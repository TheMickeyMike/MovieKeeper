import React from 'react';
import MovieCard from './MovieCard';
import { Item } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { fetchMovies } from '../actions';

class MovieList extends React.Component {
    componentDidMount() {
        this.props.fetchMovies();
    }

    renderList() {
        return this.props.movies.map(movie => {
            return <MovieCard key={movie.id} movie={movie} />;
        });
    }

    render() {
        return <Item.Group divided>{this.renderList()}</Item.Group >;

    }
};

const mapStateToProps = state => {
    return { movies: Object.values(state.movies) };
};

export default connect(
    mapStateToProps,
    { fetchMovies }
)(MovieList);
