import React, { Component, Fragment } from 'react';
import gql from 'graphql-tag';
import { Query } from 'react-apollo';
import { Link } from 'react-router-dom';

const COUNTRY_QUERY = gql`
    query CountryQuery($name: String!) {
        country(name: $name) {
            name,
            population,
            flag
        }
    }
`;

export class Country extends Component {
  render() {
      let { name } = this.props.match.params;
      name = encodeURIComponent(name);
    return (
      <Fragment>
        <Query query={COUNTRY_QUERY} variables={{name}}>
            {
                (loading, error, data) => {
                    if (loading) return <h4>loading</h4>
                    if (error) console.log(error);

                    console.log(data);
                    return <h1>test</h1>
                }
            }
        </Query>
      </Fragment>
    )
  }
}

export default Country
