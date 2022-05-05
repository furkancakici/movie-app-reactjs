import { useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { AiFillStar, AiFillCalendar } from 'react-icons/ai';
import { FaThumbsUp } from 'react-icons/fa';
import { RiFilmFill } from 'react-icons/ri';

import { useDispatch, useSelector } from 'react-redux';
import {
   fetchAsyncMovieOrShowDetail,
   getSelectedMovieOrShow,
   removeSelectedMovieOrShow,
} from '../../store/features/movie/movieSlice';

import { BallTriangle } from 'react-loader-spinner';

import './movie-detail.scss';

const MovieDetail = () => {
   const { imdbID } = useParams();
   const dispatch = useDispatch();
   const data = useSelector(getSelectedMovieOrShow);

   useEffect(() => {
      dispatch(fetchAsyncMovieOrShowDetail(imdbID));
      return () => {
         dispatch(removeSelectedMovieOrShow());
      };
   }, [dispatch, imdbID]);

   return (
      <div className='movie-section'>
         {Object.keys(data).length === 0 ? (
            <>
               <BallTriangle
                  heigth='100'
                  width='100'
                  color='grey'
                  ariaLabel='loading-indicator'
               />
            </>
         ) : (
            <>
               <div className='section-left'>
                  <div className='movie-title'>{data.Title}</div>
                  <div className='movie-rating'>
                     <span>
                        IMDB Rating <AiFillStar color='#ff9e00' /> :
                        {data.imdbRating}
                     </span>
                     <span>
                        IMDB Votes <FaThumbsUp color='#fafafa' /> :
                        {data.imdbVotes}
                        {data.imdbRating}
                     </span>
                     <span>
                        Runtime <RiFilmFill color='rgb(191,213,214)' /> :{' '}
                        {data.Runtime}
                     </span>
                     <span>
                        Year <AiFillCalendar color='peachpuff' /> : {data.Year}
                     </span>
                  </div>
                  <div className='movie-plot'>{data.Plot}</div>
                  <div className='movie-info'>
                     <div>
                        <span>Director</span>
                        <span>{data.Director}</span>
                     </div>
                     <div>
                        <span>Stars</span>
                        <span>{data.Actors}</span>
                     </div>
                     <div>
                        <span>Generes</span>
                        <span>{data.Genre}</span>
                     </div>
                     <div>
                        <span>Languages</span>
                        <span>{data.Language}</span>
                     </div>
                     <div>
                        <span>Awards</span>
                        <span>{data.Awards}</span>
                     </div>
                  </div>
               </div>
               <div className='section-right'>
                  <img src={data.Poster} alt={data.Title} />
               </div>
            </>
         )}
      </div>
   );
};

export default MovieDetail;
