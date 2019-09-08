import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

import CountryData from './country/countryData';

const COUNTRY_QUERY = gql`
    query CountryQuery($name: String!) {
        country(name: $name) {
            name,
            capital,
            population,
            flag,
            region,
            nativeName,
            # latlng
        }
    }
`;

export class Country extends Component {
    render() {
        let { name } = this.props.match.params;
        name = encodeURIComponent(name);

        return (
            <Fragment>
                <Query errorPolicy="all" query={COUNTRY_QUERY} variables={{ name }}>
                    {({ loading, error, data }) => {
                        if (loading) return <h4>loading</h4>
                        if (error) console.log(error);

                        const { name, capital, population, flag, region, nativeName } = data.country
                        return (
                            <div className="card card-body bg-primary text-white ">
                                <CountryData name={name} flag={flag} region={region} nativeName={nativeName} />
                                <Link to="/" className="btn btn-primary">Back</Link>
                            </div>)
                    }}
                </Query>
            </Fragment>
        )
    }
}

export default Country
