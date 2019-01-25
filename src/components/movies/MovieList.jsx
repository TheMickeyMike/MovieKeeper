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
        return _.filter(this.props.movies, { watched: this.props.watched })
            .filter(
                (movie) => {
                    let movieTitle = movie.title.toLowerCase()
                    return movieTitle.indexOf(
                        this.props.filterTerm.toLowerCase()) !== -1
                }
            ).map(movie => {
                return <MovieItem key={movie.id} movie={movie} />;
            })
    }

    render() {
        return <Item.Group divided>{this.renderList()}</Item.Group >;

    }
};


const mapStateToProps = state => {
    return {
        movies: Object.values(_.orderBy(state.movies, ['creation_date'], ['desc'])),
        filterTerm: state.movieFilter,
    };
};

export default connect(
    mapStateToProps,
    { fetchMovies }
)(MovieList);
