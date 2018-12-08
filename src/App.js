import React, { Component } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import { Container } from 'semantic-ui-react';
import { Router, Switch, Route } from 'react-router-dom';
import MovieShow from './components/movies/MovieShow';
import Pending from './components/Pending';
import history from './history';

class App extends Component {
  render() {
    return (
      <Container>
        <Router history={history} >
          <React.Fragment>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movies/:id" exact component={MovieShow} />
              <Route path="/pending" exact component={Pending} />
            </Switch>
          </React.Fragment>
        </Router>
      </Container>
    );
  }
}

export default App;
