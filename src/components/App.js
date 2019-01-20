import React, { Component } from 'react';
import Header from './Header'
import Home from './Home'
import { Container } from 'semantic-ui-react';
import { Router, Switch, Route } from 'react-router-dom';
import MovieShow from './movies/MovieShow';
import Watched from './Watched';
import history from '../history';

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
              <Route path="/watched" exact component={Watched} />
            </Switch>
          </React.Fragment>
        </Router>
      </Container>
    );
  }
}

export default App;
