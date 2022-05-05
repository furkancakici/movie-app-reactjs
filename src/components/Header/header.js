import { useState } from 'react';
import { Link } from 'react-router-dom';

import { useDispatch } from 'react-redux';

import userImg from '../../assets/images/user.png';
import './header.scss';
import {
   fetchAsyncMovies,
   fetchAsyncShows,
} from '../../store/features/movie/movieSlice';

const Header = () => {
   const [term, setTerm] = useState('');
   const dispatch = useDispatch();

   const submitHandler = (e) => {
      e.preventDefault();

      if (term === "") return alert('Please enter a search term');
      dispatch(fetchAsyncMovies(term));
      dispatch(fetchAsyncShows(term));
   };

   return (
      <div className='header'>
         <div className='logo'>
            <Link to='/'>Movie App</Link>
         </div>
         <div className='search-bar'>
            <form onSubmit={submitHandler}>
               <input
                  type='text'
                  value={term}
                  placeholder='Search Movies or Shows'
                  onChange={(e) => setTerm(e.target.value)}
               />
               <button type='submit'>
                  <i className='fa fa-search'></i> Search
               </button>
            </form>
         </div>
         <div className='user-image'>
            <img src={userImg} alt='user' />
         </div>
      </div>
   );
};

export default Header;
