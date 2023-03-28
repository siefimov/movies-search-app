import { Route, Routes } from 'react-router-dom';

import Home from './pages/Home';
import Movies from './pages/Movies';
import SingleMovie from './pages/SingleMovie';
import PageNotFound from './pages/PageNotFound';
import Layout from './ui/templates/Layout';
import Loginpage from './pages/Loginpage';
import UserPage from './pages/UserPage';

import RequireAuth from './hoc/RequireAuth';
import AuthProvider from './hoc/AuthProvider'; // for redirect

import './App.css';

function App() {
    return (
        <AuthProvider>
            <Routes>
                <Route path='/' element={<Layout />}>
                    <Route index element={<Home />} />
                    <Route path='movies' element={<Movies />} />
                    <Route path='movies/:category' element={<Movies />} />
                    <Route path='movies/:category/:id' element={<SingleMovie />} />
                    <Route
                        path='user'
                        element={
                            <RequireAuth>
                                {' '}
                                // wrapper
                                <UserPage /> // private route
                            </RequireAuth>
                        }
                    />
                    <Route path='login' element={<Loginpage />} />
                    <Route path='*' element={<PageNotFound />} />
                </Route>
            </Routes>
        </AuthProvider>
    );
}

export default App;
