import movies from "../apis/movies";
import history from "../history";
import {
  FETCH_MOVIES,
  FETCH_MOVIE,
  FETCH_CREDIT,
  FETCH_TRAILER,
  DELETE_MOVIE,
  SEEN_MOVIE,
  ADD_MOVIE_SUCCESS,
  ADD_MOVIE_REQUEST,
  ADD_MOVIE_FAILURE,
  ADD_MOVIE_CLEAR_STATE,
  REFRESH_MOVIES_REQUEST,
  REFRESH_MOVIES_SUCCESS,
  REFRESH_MOVIES_FAILURE,
} from "./types";

export const fetchMovies = watched => async dispatch => {
  const response = await movies.get("/movies", { params: { watched } });

  dispatch({ type: FETCH_MOVIES, payload: response.data });
};

export const fetchMovie = id => async dispatch => {
  const response = await movies.get(`/movies/${id}`);

  dispatch({ type: FETCH_MOVIE, payload: response.data });
};

export const addMovie = formValues => async dispatch => {
  dispatch({ type: ADD_MOVIE_REQUEST });
  try {
    const response = await movies.post('/movies', { ...formValues });
    dispatch({ type: ADD_MOVIE_SUCCESS, payload: response.data });
  } catch (error) {
    if ([409, 404].includes(error.response.status)) {
      dispatch({ type: ADD_MOVIE_FAILURE, payload: error.response.data });
    }
  }
}
export const fetchMovieCredit = id => async dispatch => {
  const response = await movies.get(`/movies/${id}/cast`);

  dispatch({
    type: FETCH_CREDIT,
    payload: { movieId: id, cast: response.data }
  });
};

export const fetchMovieTrailer = id => async dispatch => {
  const response = await movies.get(`/movies/${id}/videos`);

  dispatch({
    type: FETCH_TRAILER,
    payload: { movieId: id, trailers: response.data }
  });
};

export const deleteMovie = id => async dispatch => {
  await movies.delete(`/movies/${id}`);

  dispatch({ type: DELETE_MOVIE, payload: id });
  history.push("/");
};

export const movieIsSeen = (id, watched) => async dispatch => {
  const response = await movies.put(`/movies/${id}`, { watched });

  dispatch({ type: SEEN_MOVIE, payload: response.data });
  history.push("/");
};

export const refreshMovies = () => async dispatch => {
  dispatch({ type: REFRESH_MOVIES_REQUEST });
  try {
    const response = await movies.get(`/movies/refresh`);
    dispatch({ type: REFRESH_MOVIES_SUCCESS, payload: response.data });
  } catch (error) {
    dispatch({ type: REFRESH_MOVIES_FAILURE, payload: error.response.data });
  }
};

export const cleanForm = () => async dispatch => {
  dispatch({ type: ADD_MOVIE_CLEAR_STATE });
}; 