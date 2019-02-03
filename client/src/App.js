import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route} from 'react-router-dom';
import Countries from './components/countries';
import Country from './components/country';
import './App.css';

const client = new ApolloClient({
  uri: 'http://localhost:5000/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
          <div className="container">
            <nav className="navbar navbar-dark bg-dark my-3">
              <h1
              style={{textAlign: 'center', color: 'white'}}>
                Countries of the World
              </h1>
            </nav>
            <Route exact path="/" component={ Countries } />
            <Route exact path="/country/:name" component={ Country } />
          </div>
        </Router>
      </ApolloProvider>

    );
  }
}

export default App;
