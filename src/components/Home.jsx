import React from 'react';
import MovieList from './movies/MovieList'
import { connect } from 'react-redux';
import { addMovie } from '../actions';
import MovieAdd from './movies/MovieAdd';

class Home extends React.Component {
    onSubmit = formValues => {
        this.props.addMovie(formValues);
    };

    render() {
        return (
            <React.Fragment>
                <MovieAdd onSubmit={this.onSubmit} />
                <MovieList />
            </React.Fragment>
        );
    }
}

export default connect(
    null,
    { addMovie }
)(Home);