import React from 'react';
// import HomeContainer from './home_container';
import { Link } from 'react-router-dom';
import NavBar from '../navbar/navbar';
import Search from '../search/search';
import NavbarContainer from '../navbar/navbar_container'
// import HomeContainer from './home_container'
import ListingIndex from '../listings/listings_index_container'
import ListingsIndex from '../listings/listings_index';
import SearchContainer from '../search/search_container'


class Home extends React.Component {
    constructor(props){
        super(props)

        this.handleClick = this.handleClick.bind(this);
        this.handleClickHome = this.handleClickHome.bind(this);
    }
    
    handleClick(){
        this.props.history.push(`/listings`);
    }

    handleClickHome() {
        this.props.history.push(`/`);
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

                            <div className="header-left" onClick={this.handleClickHome}>
                                <div className="j-logo">
                                        <img className="home-icon" src={window.airbnbicon} alt="" />
                                        <p>jaunt</p>
                                </div>
                            </div>

                            <nav className="header-center">
                                <a className="link1" href="">
                                    <button className="hcb">Places to stay</button>
                                </a>
                                <a className="link2" href="">
                                    <button className="hcb">Experiences</button>
                                </a>
                                <a className="link3" href="">
                                    <button className="hcb">Online Experiences</button>
                                </a>
                            </nav>

                            <div className="header-right">
                                <button className="bah">Become a host</button>
                                <button className="gi">
                                    <img className="globe-icon" src={window.globeicon} alt="" />
                                </button>
                                {/* <button onClick={() => <LoginForm />}className='main-form-button'>
                                    <img className="menu-icon" src={window.menuicon} alt="" />
                                    <img className="user-icon" src={window.usericon} alt="" />
                                </button> */}
                                {/* < NavBar /> */}

                                <NavbarContainer />
                            </div>

                        </div>

                        <img className="background-home-image"src={window.homepagepic} />
        

                        <div>
                            {/* < Search history={this.props.history}/> */}
                            < SearchContainer history={this.props.history} />
                        </div>

                        <p className="header-1">Made possible by Hosts</p>
                    </div>

                </div>


                <div className="bottom">
                    <h1 className="explore-nearby">Explore nearby</h1>
                    <div className="nearby">
                        <div className="nearby1">
                            <div  onClick={this.handleClick} className="nearbys">
                                <button className="location-icon"><img  src={window.kissimmee} alt="" /></button>
                                <div className="lic">
                                    <span className="lic1">Kissimmee</span>
                                    <span className="lic2">4.5 hour drive</span>
                                </div>
                            </div>

                            <div  onClick={this.handleClick} className="nearbys">
                                <button className="location-icon"><img  src={window.miami} alt="" /></button>
                                <div className="lic">
                                    <span className="lic1">Miami</span>
                                    <span className="lic2">30 minute drive</span>
                                </div>

                            </div>

                            <div  onClick={this.handleClick} className="nearbys">
                                <button className="location-icon"><img  src={window.boca} alt="" /></button>
                                <div className="lic">
                                    <span className="lic1">Naples</span>
                                    <span className="lic2">3 hour drive</span>
                                </div>

                            </div>

                            <div  onClick={this.handleClick} className="nearbys">
                                <button className="location-icon"><img  src={window.hollywood} alt="" /></button>
                                <div className="lic">
                                    <span className="lic1">Hollywood</span>
                                    <span className="lic2">45 minute drive</span>
                                </div>

                            </div>
                        </div>

                        <div className="nearby1" onClick={this.handleClick}>
                            <div className="nearbys">
                                <button className="location-icon"><img src={window.keywest} alt="" /></button>
                                <div className="lic">
                                    <span className="lic1">Key West</span>
                                    <span className="lic2">4.5 hour drive</span>
                                </div>
                            </div>

                            <div  onClick={this.handleClick} className="nearbys">
                                <button className="location-icon"><img src={window.tampa} alt="" /></button>
                                <div className="lic">
                                    <span className="lic1">Tampa</span>
                                    <span className="lic2">5.5 hour drive</span>
                                </div>

                            </div>

                            <div  onClick={this.handleClick} className="nearbys">
                                <button className="location-icon"><img src={window.davenport} alt="" /></button>
                                <div className="lic">
                                    <span className="lic1">Davenport</span>
                                    <span className="lic2">5 hour drive</span>
                                </div>

                            </div>

                            <div  onClick={this.handleClick} className="nearbys">
                               <button className="location-icon"><img  src={window.aventura} alt="" /></button>
                                <div className="lic">
                                    <span className="lic1">Aventura</span>
                                    <span className="lic2">1 hour drive</span>
                                </div>

                            </div>
                        </div>

                    </div>

                    <h1 className="live-anywhere">Live anywhere</h1>

                    <div className="home-images">
                        <div className="home-center">

                            <div className="home-images-a">
                                <img src="https://a0.muscache.com/im/pictures/7d82ca14-56e5-4465-8218-dcfa7d69b6ac.jpg" alt="" />
                                <span>Entire homes</span>

                            </div>

                            <div className="home-images-a">
                                <img src="https://a0.muscache.com/im/pictures/36f53e61-db8d-403c-9122-5b761c0e4264.jpg?im_w=720" alt="" />
                                <span>Unique stays</span>

                            </div>

                            <div className="home-images-a">
                                <img src="https://a0.muscache.com/im/pictures/a596c528-a2e9-4417-9bbe-ceb68b2f6b9c.jpg?im_w=720" alt="" />
                                <span>Cabins and cottages</span>

                            </div>

                            <div className="home-images-a">
                                <img src="https://a0.muscache.com/im/pictures/10a638e1-6aff-4313-8033-1275cec83987.jpg?im_w=720" alt="" />
                                <span>Pets allowed</span>

                            </div>
                        </div>

                    </div>

                    <div className="become-a-host">
                        <div className="bah1">
                            <img src={window.dishes} alt="" />
                        </div>
                        <div className="bah2">
                            <span className="bah2a">Your world is worth sharing</span>
                            <span className="bah2b">Turn your extra space into your next opportunity.</span>
                            <button className="bah2c">Become a host</button>
                        </div>
                    </div>
                    
                    <h1 className="etwh">Experience the world</h1>
                    <span className="etws">Unique activities with local experts—in person or online.</span>

                    <div className="explore">
                        <div className="explore-center">
                            <div className="explore-a">
                                <img src={window.etw1} alt="" />
                                <span>Online Experiences</span>
                                <span className="explore-s">Travel the world without leaving home.</span>

                            </div>

                            <div className="explore-a">
                                <img src={window.etw2} alt="" />
                                <span>Experiences</span>
                                <span className="explore-s">Things to do wherever you are.</span>
                                

                            </div>

                            <div className="explore-a">
                                <img src={window.etw3} alt="" />
                                <span>Adventures</span>
                                <span className="explore-s">Multi-day trips with meals and stays.</span>

                            </div>
                        </div>

                                

                    </div>

                    <div className="leads">
                        <div className="leads-c">
                
                            <a href="https://www.linkedin.com/in/solomon-bassalian-ba3662174/">
                                <button className="leads-c-b">
                                    <img className="leads-b-i" src={window.linkedin} alt="" />
                                </button>
                            </a>
                            <a className="leads-a-2" href="https://github.com/sbassalian">
                                <button className="leads-c-b">
                                    <img className="leads-b-i-2" src={window.github} alt="" />
                                </button>
                            </a>

    
                        </div>
                    </div>

                    <div className="footer">
                        <div className="footer-c">
                            <span>© 2021 Jaunt, Inc. All rights reserved</span>
                            <span className="dot-2">.</span>
                            <span>Privacy</span>
                            <span className="dot-2">.</span>
                            <span>Terms</span>
                            <span className="dot-2">.</span>
                            <span>Sitemap</span>
                        </div>
                        
                        

                    </div>

                </div>



             
            </div>
        );
    }
}

export default Home;