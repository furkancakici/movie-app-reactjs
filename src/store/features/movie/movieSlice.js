import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { API_KEY } from '../../../utils/api-key';
import movieApi from '../../app/services/movie-api';

export const fetchAsyncMovies = createAsyncThunk(
   'movies/fetchAsyncMovies',
   async (term) => {
      const res = await movieApi
         .get(`?apiKey=${API_KEY}&s=${term}&type=movie`)
         .catch((err) => console.log('Err :', err));

      return res.data;
   }
);

export const fetchAsyncShows = createAsyncThunk(
   'movies/fetchAsyncShows',
   async (term) => {
      const res = await movieApi
         .get(`?apiKey=${API_KEY}&s=${term}&type=series`)
         .catch((err) => console.log('Err :', err));

      return res.data;
   }
);

export const fetchAsyncMovieOrShowDetail = createAsyncThunk(
   'movies/fetchAsyncMovieOrShowDetail',
   async (id) => {
      const res = await movieApi
         .get(`?apiKey=${API_KEY}&i=${id}&Plot=full`)
         .catch((err) => console.log('Err :', err));

      return res.data;
   }
);

const initialState = {
   movieList: {},
   showList: {},
   selectMovieOrShow: {},
};

export const movieSlice = createSlice({
   name: 'movies',
   initialState,
   reducers: {
      addMovies: (state, { payload }) => {
         state.movieList = payload;
      },
      removeSelectedMovieOrShow: (state) => {
         state.selectMovieOrShow = {};
      },
   },
   extraReducers: {
      [fetchAsyncMovies.pending]: () => {},
      [fetchAsyncMovies.fulfilled]: (state, { payload }) => {
         return { ...state, movieList: payload };
      },
      [fetchAsyncMovies.rejected]: () => {},
      [fetchAsyncShows.fulfilled]: (state, { payload }) => {
         return { ...state, showList: payload };
      },
      [fetchAsyncMovieOrShowDetail.fulfilled]: (state, { payload }) => {
         return { ...state, selectMovieOrShow: payload };
      },
   },
});

export const { addMovies, removeSelectedMovieOrShow } = movieSlice.actions;
export const getAllMovies = (state) => state.movies.movieList;
export const getAllShows = (state) => state.movies.showList;
export const getSelectedMovieOrShow = (state) => state.movies.selectMovieOrShow;
export default movieSlice.reducer;
