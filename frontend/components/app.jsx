import React from 'react';
import {Route,Redirect,Switch,Link,HashRouter} from 'react-router-dom';

import {Splash} from '../components/splash/splash'
import SignUpFormContainer from './session_form/signup_container';
import LogInFormContainer from './session_form/login_container';


// import { AuthRoute, ProtectedRoute } from '../util/route_util';

export default () => (
    <div>
        <header>
            <Link to="/" className="header-link">
                <h1>Jaunt</h1>
            </Link>
        </header>
        <Switch>
            <Route exact path="/" component={Splash} />
            <Route exact path="/login" component={LogInFormContainer} />
            <Route exact path="/signup" component={SignUpFormContainer} />
            <Route path="/" component={Splash} />
        </Switch>
    </div>
);

