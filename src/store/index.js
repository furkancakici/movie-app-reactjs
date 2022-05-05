import {configureStore} from '@reduxjs/toolkit'
import moviesReducer from './features/movie/movieSlice'

export const store = configureStore({
    reducer:{
        movies:moviesReducer
    }
})