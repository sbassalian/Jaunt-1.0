import React from 'react';
// import HomeContainer from './home_container';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import Search from '../search/search';
import NavbarContainer from '../navbar/navbar_container'
// import HomeContainer from './home_container'



class Home extends React.Component {
    constructor(props){
        super(props)
    }
    
    render() {
        
        return (
            <div id="home-opacity">
                
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

                            <nav className="header-center">
                                <a className="link1" href="">Link1</a>
                                <a className="link2" href="">Link2</a>
                                <a className="link3" href="">Link3</a>
                            </nav>

                            <div className="header-right">
                                <p>Become a host</p>
                                <img className="globe-icon" src={window.globeicon} alt="" />
                                <button onClick={() => <LoginForm />}className='main-form-button'>
                                    <img className="menu-icon" src={window.menuicon} alt="" />
                                    <img className="user-icon" src={window.usericon} alt="" />
                                </button>
                                {/* < NavBar /> */}

                                <NavbarContainer />
                            </div>

                        </div>

                        <img className="background-home-image"src={window.homepagepic} />
        

                        <div className="search-bar">
                            < Search />
                        </div>

                        <p className="header-1">Made possible by Hosts</p>
                    </div>

                </div>


                <div className="bottom">
                    <h1 className="explore-nearby">Explore nearby</h1>
                    <div className="nearby">
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                        <button></button>
                    </div>

                    <h1 className="live-anywhere">Live anywhere</h1>
                    <div className="home-images">
                        <img src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg" alt="" />

                        <img src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720" alt="" />

                        <img src="https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=720" alt="" />

                        <img src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720" alt="" />
                    </div>

                    {/* <div className="become-a-host-image">
                        <img src="https://a0.muscache.com/im/pictures/c800f7ee-da2e-45f5-969a-65827cb63e81.jpg?im_w=720" alt="" />
                    </div> */}

                </div>


             
            </div>
        );
    }
}

export default Home;