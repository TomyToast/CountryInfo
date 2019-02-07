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
        flag,
        region
    }
}`;

export class Region extends Component {
    render(){
        let { regionName } = this.props.match.params;
        regionName = encodeURIComponent(regionName);
        
        return (
            <Fragment>
                <Query query={COUNTRIES_QUERY} >
                    {
                        ({loading, errors, data}) => {
                            if (loading) return <h4>Loading...</h4>
                            if (errors) console.log(errors);

                                const elements = data.countryList.filter(country => (country.region === `${regionName}`));

                                return(
                                    <Fragment>
                                        {
                                            elements.map(country => (
                                                <CountryItem key={country.name} country={country}/>
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