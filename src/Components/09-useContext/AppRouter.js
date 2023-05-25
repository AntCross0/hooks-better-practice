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


const AppRouter = () => {
    return (
        <div>
            <Router>
                <NavBar />
                <div>
                    <Routes>
                        <Route exact path='/' Component={HomePage} />
                        <Route exact path='/about' Component={AboutMePage} />
                        <Route exact path='/login' Component={LoginPage} />
                    </Routes>
                </div>
            </Router>
        </div>
    )
}

export default AppRouter
