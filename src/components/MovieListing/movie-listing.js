import { useSelector } from 'react-redux';
import {
   getAllMovies,
   getAllShows,
} from '../../store/features/movie/movieSlice';
import { MovieCard } from '../index';

import Slider from 'react-slick';

import { Settings } from '../../utils/constant';

import './movie-listing.scss';

const MovieListing = () => {
   const movies = useSelector(getAllMovies);
   const shows = useSelector(getAllShows);
   let renderMovies = '';
   let renderShows = '';

   renderMovies =
      movies.Response === 'True' ? (
         movies.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
         ))
      ) : (
         <div className='movies-error'>
            <h3>{movies.error}</h3>
         </div>
      );

   renderShows =
      shows.Response === 'True' ? (
         shows.Search.map((movie, index) => (
            <MovieCard key={index} data={movie} />
         ))
      ) : (
         <div className='shows-error'>
            <h3>{shows.error}</h3>
         </div>
      );

   return (
      <div className='movie-wrapper'>
         <div className='movie-list'>
            <h2 className='moviesh2'>Movies</h2>
            <div>
               <Slider {...Settings}>{renderMovies}</Slider>
            </div>
         </div>
         <div className='show-list'>
            <h2>Shows</h2>
            <div>
               <Slider {...Settings}>{renderShows}</Slider>
            </div>
         </div>
      </div>
   );
};

export default MovieListing;
