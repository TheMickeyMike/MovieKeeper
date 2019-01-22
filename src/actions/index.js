import movies from "../apis/movies";
import history from '../history';
import {
    FETCH_MOVIES,
    FETCH_MOVIE,
    FETCH_CREDIT,
    FETCH_TRAILER,
    ADD_MOVIE,
    DELETE_MOVIE,
    SEEN_MOVIE,
    ADD_MOVIE_ERROR
} from "./types";



export const fetchMovies = watched => async dispatch => {
    const response = await movies.get('/movies', { params: { watched } });

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
    try {
        const response = await movies.post('/movies', { ...formValues });
        dispatch({ type: ADD_MOVIE, payload: response.data });

    } catch (e) {
        if (e.response.status < 500) {
            dispatch({ type: ADD_MOVIE_ERROR, payload: e.response.data.message });
        }
    }
    // if (response.status !== 201) {
    //     dispatch({ type: ADD_MOVIE_ERROR, payload: response.data.message });
    // }
    // dispatch({ type: ADD_MOVIE, payload: response.data });
};

export const deleteMovie = id => async dispatch => {
    await movies.delete(`/movies/${id}`);

    dispatch({ type: DELETE_MOVIE, payload: id });
    history.push('/');
};

export const movieIsSeen = (id, watched) => async dispatch => {
    const response = await movies.put(`/movies/${id}`, { watched });

    dispatch({ type: SEEN_MOVIE, payload: response.data });
    history.push('/');
};
