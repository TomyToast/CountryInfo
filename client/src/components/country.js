import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

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
        <Query errorPolicy="all" query={COUNTRY_QUERY} variables={{name}}>
            {
                ({loading, error, data}) => {
                    if (loading) return <h4>loading</h4>
                    if (error) console.log(error);

                    const { name, capital, population, flag, region, nativeName} = data.country
                    return (
                        <div className="card card-body bg-primary text-white ">
                            <div className="row">
                                <div className="card bg-primary col-md-12 d-flex justify-content-center align-items-center">
                                    <div className="row">
                                        <h2 className="display-4 mt-3">{ name }</h2>
                                        <img src={flag} alt={`${name}_flag`} style={{width:100, height:50}}/>
                                    </div>
                                    <h3 className="mb-3">Origin name: { nativeName }</h3>
                                    <h4>Region: {region}</h4>
                                </div>
                            </div>
                            <Link to="/" className="btn btn-primary">Back</Link>
                        </div>
                    )
                }
            }
        </Query>
      </Fragment>
    )
  }
}

export default Country
