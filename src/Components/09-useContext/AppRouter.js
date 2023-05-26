import React from 'react'
import {
    BrowserRouter as Router,
    Routes,
    Route,
    Link
} from 'react-router-dom';

import AboutMePage from './AboutMePage';
import LoginPage from './LoginPage';
import HomePage from './HomePage';
import NavBar from './NavBar';
import Error404Page from './Error404Page';


const AppRouter = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <div>
                    <Routes>
                        <Route exact="true" path='/' Component={HomePage} />
                        <Route exact="true" path='/about' Component={AboutMePage} />
                        <Route exact="true" path='/login' Component={LoginPage} />
                        <Route path='*' Component={Error404Page} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter
