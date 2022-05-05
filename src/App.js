import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Home, Layout, MovieDetail, PageNotFound } from './pages';

function App() {
   return (
      <div className='App'>
         <BrowserRouter>
            <Routes>
               <Route path='/' element={<Layout />}>
                  <Route index element={<Home />} />
                  <Route path='movie/:imdbID' element={<MovieDetail />} />
                  <Route element={<PageNotFound />} />
               </Route>
            </Routes>
         </BrowserRouter>
      </div>
   );
}

export default App;
