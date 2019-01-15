import movies from "../apis/movies";
import history from '../history';
import {
    FETCH_MOVIES,
    FETCH_MOVIE,
    FETCH_CREDIT,
    FETCH_TRAILER,
    ADD_MOVIE,
    DELETE_MOVIE
} from "./types";


export const fetchMovies = () => async dispatch => {
    const response = await movies.get('/movies');

    dispatch({ type: FETCH_MOVIES, payload: response.data });
};

export const fetchMovie = id => async dispatch => {
    const response = await movies.get(`/movies/${id}`);

    dispatch({ type: FETCH_MOVIE, payload: response.data });
};

export const fetchMovieCredit = id => async dispatch => {
    const response = await movies.get(`/movies/${id}/cast`);

    dispatch({ type: FETCH_CREDIT, payload: { movieId: id, cast: response.data } });
};

export const fetchMovieTrailer = id => async dispatch => {
    const response = await movies.get(`/movies/${id}/videos`);

    dispatch({ type: FETCH_TRAILER, payload: { movieId: id, trailers: response.data } });
};

export const addMovie = formValues => async dispatch => {
    const response = await movies.post('/movies', { ...formValues });

    dispatch({ type: ADD_MOVIE, payload: response.data });
};

export const deleteMovie = id => async dispatch => {
    await movies.delete(`/movies/${id}`);

    dispatch({ type: DELETE_MOVIE, payload: id });
    history.push('/');
};