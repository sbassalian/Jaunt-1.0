import React from 'react';
// import SplashContainer from './splash_container';
import { Link } from 'react-router-dom';



class Splash extends React.Component {
    constructor(props){
        super(props)
    }
    

    render() {
        return (
            <div>
                <h1>YOOOOOOO!!!!</h1>
                <Link to='/signup'>Sign up here boi</Link>
                <br/>
                <Link to='/login'>Log in here boi</Link>

            </div>
        );
    }
}

export default Splash;