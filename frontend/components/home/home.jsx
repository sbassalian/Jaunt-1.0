import React from 'react';
// import HomeContainer from './home_container';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import Search from '../search/search';



class Home extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        return (
            <div>
                <div className="top">
                    <div className="covid-header">
                        <p>Get the latest on our COVID-19 response</p>
                    </div>

                    <div className="background">
                        <div className="header">

                            <div className="header-left">
                                <img className="home-icon" src={window.airbnbicon} alt="" />
                                <p>jaunt</p>
                            </div>

                            <div className="header-center">
                                <p>Link1</p>
                                <p>Link2</p>
                                <p>Link3</p>
                            </div>

                            <div className="header-right">
                                <p>Become a host</p>
                                <img className="globe-icon" src={window.globeicon} alt="" />
                                <img className="menu-icon" src={window.menuicon} alt="" />
                                < NavBar />
                            </div>

                        </div>

                        <img className="background-home-image"src={window.homepagepic} />
        

                        <div className="search-bar">
                            < Search />
                        </div>

                        <p className="header-1">Made possible by Hosts</p>
                    </div>

                </div>
                
            </div>
        );
    }
}

export default Home;