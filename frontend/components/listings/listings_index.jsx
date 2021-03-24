import React from 'react';
import IndividualListing from './individual_listing'
import NavBarContainer from '../navbar/navbar_container'
import JMap from '../map/map'


class ListingsIndex extends React.Component{

    constructor(props){
        super(props)
        this.handleClick = this.handleClick.bind(this);
        this.handleClickHome = this.handleClickHome.bind(this)
    }

    componentDidMount(){
        this.props.fetchListings()
    }

    handleClick(id) {
        this.props.history.push(`/listings/${id}`);
    }

    handleClickHome() {
        this.props.history.push(`/`);
    }

    render(){
        console.log(this.props.listings)
        return(
            <div className="plsss">
                
                <div className="lh">
                    
                    <div className="lhl" onClick={this.handleClickHome}>
                        <img className="home-icon" src={window.airbnbblack} alt="" />
                        <p>jaunt</p>
                    </div>

                    <div className="lhc">
                        <div className="lhc2">
                            <button>Insert Area Here</button>

                            <button>Add Dates</button>

                            <button>
                                <div className="ag">
                                    Add Guests
                                </div>
                                <div className="si">
                                    <img src={window.searchicon} alt="" />
                                </div>
                            </button>
                        </div>
                    </div>


                    <div className="lhr">
                        <p className="bah">Become a host</p>
                        <img className="globe-icon" src={window.globeicon} alt="" />
                        <NavBarContainer />
                    </div>
                </div>

                <div className="listings-bottom">
                    <div className="listings">
                        <span className="listingsa">3 stays near you</span>
                        <h1>Stays in selected map area</h1>
                        <div className="fo">
                            <button>Cancellation Flexibility</button>
                            <button>Type of Place</button>
                            <button>Price</button>
                            <button>Instant Book</button>
                            <button>More Filters</button>
                        </div>
                        <span className="cv">Review COVID-19 travel restrictions before you book.</span>
                        
                        {this.props.listings.map((listing) => (
        
                            <div onClick={() => this.handleClick(listing.id)} className="il">
                                <div className="ili">
                                    <img src={window.mht1} />
                                </div> 
                                <div className="ilc">
                                    <div className="ilc1">
                                        <span>Entire place in {listing.city}</span>
                                    </div>

                                    <div className="ilc2">
                                        <span>{listing.title}</span>
                                    </div>

                                    <div className="ilc3">
                                    </div>

                                    <div className="ilc4">
                                        <span>2 guests</span>
                                        <span className="dot">.</span>
                                        <span>1 Bedroom</span>
                                        <span className="dot">.</span>
                                        <span>1 Bed</span>
                                        <span className="dot">.</span>
                                        <span>1.5 Baths</span>
                                    </div>

                                    <div className="ilc4">
                                        <span>Wifi</span>
                                        <span className="dot">.</span>
                                        <span>Kitchen</span>
                                        <span className="dot">.</span>
                                        <span>Heating</span>
                                        <span className="dot">.</span>
                                        <span>Air</span>
                                    </div>

                                    <div className="ilc5">
                                        <div className="ilc5a">
                                            <img src={window.star} />
                                            <span>5.0</span>
                                        </div>
                                        <div className="ilc5b"></div>
                                        <div className="ilc5c">
                                            <span className="ilc5cfc">${listing.price}</span>
                                            <span className="ilc5clc"> / night</span>
                                        </div>
                                    </div>



                                </div>
                            </div>

                        ))}
                    </div>

                    <div className="map">
                        <JMap />
                    </div>
                </div>

            </div>
        )
    }
};

export default ListingsIndex;