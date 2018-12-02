import movies from "../apis/movies";
import { FETCH_MOVIES, FETCH_MOVIE } from "./types";

export const fetchMovies = () => async dispatch => {
    const response = await movies.get('/movies');

    dispatch({ type: FETCH_MOVIES, payload: response.data });
};

export const fetchMovie = id => async dispatch => {
    const response = await movies.get(`/movies/${id}`);

    dispatch({ type: FETCH_MOVIE, payload: response.data });
};