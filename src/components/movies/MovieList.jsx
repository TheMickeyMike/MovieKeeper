import React from 'react';
import _ from 'lodash';
import MovieItem from './MovieItem';
import { Item } from 'semantic-ui-react'
import { connect } from 'react-redux';
import { fetchMovies } from '../../actions';

class MovieList extends React.Component {
    componentDidMount() {
        this.props.fetchMovies(this.props.watched);
    }

    renderList() {
        return _.filter(this.props.movies, { watched: this.props.watched }).map(movie => {
            return <MovieItem key={movie.id} movie={movie} />;
        })
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
