import React, { Component } from 'react';
import Navbar from './components/Navbar'
import Home from './components/Home'
import { Container } from 'semantic-ui-react';
import { BrowserRouter, Switch, Route } from 'react-router-dom';
import MovieDetail from './components/MovieDetail';

class App extends Component {
  render() {
    return (
      <Container>
        <BrowserRouter>
          <React.Fragment>
            <Navbar />
            <Switch>
              <Route path="/" exact component={Home} />
              <Route path="/movies/:id" exact component={MovieDetail} />
            </Switch>
          </React.Fragment>
        </BrowserRouter>
      </Container>
    );
  }
}

export default App;
