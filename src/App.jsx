import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';
import SingleMovie from './pages/SingleMovie';
import PageNotFound from './pages/PageNotFound';
import Layout from './ui/templates/Layout';

const App = () => {
  return (
    <Routes>
      <Route path='/' element={<Layout />}>
        <Route index element={<Home />} />
        <Route path='movies' element={<Movies />} />
        <Route path='movies/:category' element={<Movies />} />
        <Route path='movies/:category/:movieTitle' element={<Movies />} />
        <Route path='movies/:category/:genre_id' element={<Movies />} />
        <Route path='movies/:category/:id/:one' element={<SingleMovie />} />
        <Route path='*' element={<PageNotFound />} />
      </Route>
    </Routes>
  );
};

export default App;
