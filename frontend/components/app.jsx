import React from 'react';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';

import Home from '../components/home/home'
import SignUpFormContainer from './session/signup_container';
import LogInFormContainer from './session/login_container';
import NavbarContainer from './navbar/navbar_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';
import Modal from '../modal/modal'
import NavBar from './navbar/navbar'
import HomeContainer from '../components/home/home_container'
import configureStore from '../store/store';
import ListingIndexContainer from './listings/listings_index_container' 

export default () => (
    <div>
        < Modal />
        {/* <header>
            <Link to="/" className="header-link"><h1>Jaunt</h1></Link>
            <NavbarContainer/>
        </header> */}

        {/* <NavbarContainer /> */}

        <Switch>
            {/* <Route exact path="/" component={Home} /> */}
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route exact path="/listings" component={ListingIndexContainer} />
            <Route path="/" component={HomeContainer} />
        </Switch>
    </div>
);

