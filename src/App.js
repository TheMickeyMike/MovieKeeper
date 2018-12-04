import React, { Component } from 'react';
import Header from './components/Header'
import Home from './components/Home'
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieShow from './components/movies/MovieShow';

class App extends Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <React.Fragment>
            <Header />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movies/:id" exact component={MovieShow} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
