import { useEffect } from 'react';
import { MovieListing } from '../../components';

import { useDispatch } from 'react-redux';
import {
   fetchAsyncMovies,
   fetchAsyncShows,
} from '../../store/features/movie/movieSlice';

import './home.scss';

const Home = () => {
   const dispatch = useDispatch();
   const movieText = 'Harry';
   const showText = 'Friends';

   useEffect(() => {
      dispatch(fetchAsyncMovies(movieText));
      dispatch(fetchAsyncShows(showText));
   }, [dispatch]);

   return (
      <>
         <div className='banner-img'></div>
         <MovieListing />
      </>
   );
};

export default Home;
