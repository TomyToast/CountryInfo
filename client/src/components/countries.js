import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import CountryItem from './countryItem';

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
  render() {
    return (
      <Fragment>
        <Query query={COUNTRIES_QUERY}>
            {
                ({ loading, error, data }) => {
                    if (loading) return (
                        <div className="d-flex justify-content-center">
                            <button className="btn btn-primary" type="button" disabled>
                                <span 
                                    className="spinner-grow spinner-grow-sm" 
                                    role="status" 
                                    aria-hidden="true">
                                </span>
                                Loading...
                            </button>
                        </div>
                    )
                    if (error) console.log(error);
                    console.log(data);

                    return (
                        <Fragment>
                            {
                                data.countryList.map(country => (
                                    <CountryItem key={country.name} country={country}/>
                                ))
                            }
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
