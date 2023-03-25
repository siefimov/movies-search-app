import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';
import SingleMovie from './pages/SingleMovie';
import PageNotFound from './pages/PageNotFound';
import Layout from './ui/templates/Layout';

import './App.css';

function App() {
    return (
        <Routes>
            <Route path='/' element={<Layout />}>
                <Route index element={<Home />} />
                <Route path='/movies' element={<Movies />} />
                <Route path='/movies/:id' element={<SingleMovie />} />
                <Route path='*' element={<PageNotFound />} />
            </Route>
        </Routes>
    );
}

export default App;
