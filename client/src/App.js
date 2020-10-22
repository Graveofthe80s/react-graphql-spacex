import React from 'react';
import ApolloClient from 'apollo-boost';
import {ApolloProvider} from "react-apollo"
import {BrowserRouter as Router, Route} from 'react-router-dom'
import logo from "./spacex-logo.png"
import Launches from './components/Launches'
import Launch from './components/Launch'
import './App.css';

const client = new ApolloClient({
  uri: '/graphql'
})

function App() {
  return (
    <ApolloProvider client={client}>
      <Router>
    <div className="container">
      <img src={logo} style={{width: '300px', display: "block", margin: "20px auto"}} alt=""/>
      <Route exact path="/" component={Launches} />
      <Route exact path="/launch/:id" component={Launch} />
    </div>
    </Router>
    </ApolloProvider>
  );
}

export default App;
