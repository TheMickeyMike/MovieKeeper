import movies from "../apis/movies";
import { FETCH_MOVIES, FETCH_MOVIE, FETCH_CREDIT, FETCH_TRAILER } from "./types";


export const fetchMovies = () => async dispatch => {
    const response = await movies.get('/movies');

    dispatch({ type: FETCH_MOVIES, payload: response.data });
};

export const fetchMovie = id => async dispatch => {
    const response = await movies.get(`/movies/${id}`);

    dispatch({ type: FETCH_MOVIE, payload: response.data });
};

export const fetchMovieCredit = id => async dispatch => {
    const response = await movies.get(`/movies/${id}/credits`);

    dispatch({ type: FETCH_CREDIT, payload: response.data });
};

export const fetchMovieTrailer = id => async dispatch => {
    const response = await movies.get(`/movies/${id}/videos`);

    dispatch({ type: FETCH_TRAILER, payload: response.data });
};