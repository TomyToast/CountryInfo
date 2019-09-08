import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import CountryItem from './countryItem/countryItem';
import Loader from './loader';
import Pagination from './pagination/pagination';

const COUNTRIES_QUERY = gql`
 query CountriesQuery {
    countryList {
        name,
        capital,
        population,
        flag
    }
}`;

export class Countries extends Component {
    constructor(props) {
        super(props);
        this.state = {
            posts: [],
            setPost: [],
            loading: false,
            setLoading: false,
            currentPage: 1,
            setCurrentPage: 1,
            postPerPage: 10,
            setPostsPerPage: 10
        }
    }

    render() {
        return (
            <Fragment>
                <Query query={COUNTRIES_QUERY}>
                    {
                        ({ loading, error, data }) => {
                            if (loading) return (
                                <Loader />
                            )
                            if (error) console.log(error);

                            /// Get current post

                            const { currentPage, postPerPage, setCurrentPage } = this.state;

                            const indexOfLastPost = currentPage * postPerPage;
                            const indexOfFirstPost = indexOfLastPost - postPerPage;
                            const currentPosts = data.countryList.slice(indexOfFirstPost, indexOfLastPost);

                            /// Change page
                            const paginate = pageNumber => setCurrentPage(pageNumber);

                            return (
                                <Fragment>
                                    <CountryItem countryList={currentPosts} loading={this.state.loading} />
                                    <Pagination postPerPage={postPerPage} totalPosts={data.countryList.length} paginate={paginate} />
                                </Fragment>
                            );
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default Countries
