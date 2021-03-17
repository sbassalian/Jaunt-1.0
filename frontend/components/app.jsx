import React from 'react';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';

import Splash from '../components/splash/splash'
import SignUpFormContainer from './session/signup_container';
import LogInFormContainer from './session/login_container';
import NavbarContainer from './navbar/navbar_container'
import { AuthRoute, ProtectedRoute } from '../util/route_util';



// import { AuthRoute, ProtectedRoute } from '../util/route_util';

export default () => (
    <div>
        <header>
            <Link to="/" className="header-link"><h1>Jaunt</h1></Link>
            <NavbarContainer/>
        </header>

        <Switch>
            <Route exact path="/" component={Splash} />
            <AuthRoute exact path="/login" component={LogInFormContainer} />
            <AuthRoute exact path="/signup" component={SignUpFormContainer} />
            <Route path="/" component={Splash} />
        </Switch>
    </div>
);

