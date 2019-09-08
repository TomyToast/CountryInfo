import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import Chart from './chart';
import CountryItem from './countryItem/countryItem';

const COUNTRIES_QUERY = gql`
 query CountriesQuery {
    countryList {
        name,
        capital,
        population,
        flag,
        region,
        alpha3Code
    }
}`;

export class Region extends Component {
    render() {
        let { regionName } = this.props.match.params;
        regionName = encodeURIComponent(regionName);
        return (
            <Fragment>
                <Query query={COUNTRIES_QUERY} >
                    {
                        ({ loading, errors, data }) => {
                            if (loading) return <h4>Loading...</h4>
                            if (errors) console.log(errors);

                            const elements = data.countryList.filter(country => (country.region === `${regionName}`));

                            return (
                                <Fragment>
                                    <Chart country={elements} />
                                    {
                                        elements.map(country => (
                                            <CountryItem key={country.name} country={country} />
                                        ))
                                    }
                                </Fragment>
                            )
                        }
                    }
                </Query>
            </Fragment>
        )
    }
}

export default Region;