import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import Countries from './components/countries';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
        <div className="container">
        <nav className="navbar navbar-dark bg-dark mb-3">
          <h1
          style={{textAlign: 'center', color: 'white'}}>
            Countries of the World
          </h1>
        </nav>
        <Countries />
        </div>
      </ApolloProvider>

    );
  }
}

export default App;
