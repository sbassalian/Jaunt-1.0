import React from 'react';
// import HomeContainer from './home_container';
import { Link } from 'react-router-dom';
// import '../../../app/assets/stylesheets/home.scss'


class Home extends React.Component {
    constructor(props){
        super(props)
    }
    

    render() {
        return (
            <div className='background-col'>
                <h1>Welcome</h1>
                <img className="home-icon" src={window.airbnbicon} alt="" />
                <div >
                    <img className="home" src={window.homepagepic} alt=""/>
                </div>
            </div>
        );
    }
}

export default Home;