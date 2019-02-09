import React, { Component } from 'react';
import ApolloClient from 'apollo-boost';
import { ApolloProvider } from 'react-apollo';
import { BrowserRouter as Router, Route, Link} from 'react-router-dom';
import Countries from './components/countries';
import Country from './components/country';
import Region from './components/region';
import './App.css';

const client = new ApolloClient({
  // uri: 'http://localhost:5000/graphql'
  uri: '/graphql'
});

class App extends Component {
  render() {
    return (
      <ApolloProvider client={client}>
      <Router>
          <div className="container">
            <nav className="navbar navbar-dark bg-dark my-3">
                <Link to="/" className="btn btn-secondary">
                  <h1
                  style={{textAlign: 'center', color: 'white'}}>
                    Countries of the World
                  </h1>
                </Link>
                <Link to={'/Africa'}  className="btn btn-primary">Africa</Link>
                <Link to={'/Asia'} className="btn btn-primary">Asia</Link>
                <Link to={'/Americas'} className="btn btn-primary">Americas</Link>
                <Link to={'/Europe'} className="btn btn-primary">Europe</Link>
                <Link to={'/Oceania'} className="btn btn-primary">Oceania</Link>
            </nav>
            <Route exact path="/" component={ Countries } />
            <Route exact path="/country/:name" component={ Country } />
            <Route path="/:regionName" exact component={Region} />
          </div>
        </Router>
      </ApolloProvider>

    );
  }
}

export default App;
