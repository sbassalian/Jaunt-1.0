import React from 'react';
import NavBarContainer from '../navbar/navbar_container'
import JMap from '../map/map'

class ListingShow extends React.Component {
    constructor(props){
        super(props)
        this.handleClickHome = this.handleClickHome.bind(this)
    }

    componentDidMount(){
        this.props.fetchListing(this.props.listingId)
    }

    handleClickHome() {
        this.props.history.push(`/`);
    }

    
    render(){
        if (!!this.props.listing){
            console.log(this.props.listing['picture_url_1'])
            const pu1 = this.props.listing.picture_url_1;
            return(
                <div>
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
                    <h1 className="ltitle">{this.props.listing.title}</h1>
                    <div className="above-img">
                        <div className="above-img-a">
                            <img src={window.star} />
                            <span>4.90(73)</span>
                            <span className="dot-9">.</span>
                            <span>Superhost</span>
                            <span className="dot-9">.</span>
                            <span>{this.props.listing.city}, {this.props.listing.country}</span>
                        </div>
                        <div className="above-img-b"></div>
                        <div className="above-img-c">
                            <span>Share</span>
                            <span>Save</span>
                        </div>
                    </div>

                    <div className="limages">
                        <div className="center-lim">

                            <div className="limg1">
                                <img src={window[this.props.listing['picture_url_1']]} alt=""/>
                            </div>

                            <div className="limg2">
                                <div className="limg2a">
                                    <img src={window[this.props.listing['picture_url_2']]} alt="" />
                                    <img src={window[this.props.listing['picture_url_3']]} alt="" />
                                    </div>
                                <div className="limg2b">
                                    <img src={window[this.props.listing['picture_url_4']]} alt="" />
                                    <img src={window[this.props.listing['picture_url_5']]} alt="" />
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="sticks">
                        <div className="sticks2">

                    
                    <div className="hosted-by">
                        <div className="hosted-by-a">
                            <h2 className="hh">Entire condominium hosted by Elon Musk</h2>
                            <div className="hosted-by-a-1">
                                <span>3 guests</span>
                                <span className="dot-9">.</span>
                                <span>Apartment</span>
                                <span className="dot-9">.</span>
                                <span>1 bed</span>
                                <span className="dot-9">.</span>
                                <span>1 bath</span>
                                <span className="dot-9">.</span>
                            </div>
                        </div>
                        <img src={window.elon} alt="" />
                    </div>

                    <div className="more-things">
                        <div className="more-things-a">
                            <img src={window.house} alt=""/>
                            <div className="mtaa">
                                <span className="mtaaa">Entire home</span>
                                <span className="mtaab">You’ll have the condominium to yourself.</span>

                            </div>
                        </div>

                        <div className="more-things-a">
                            <img src={window.clean} alt="" />
                            <div className="mtaa">
                                <span className="mtaaa">Enhanced Clean</span>
                                <span className="mtaab">This host committed to Airbnb's 5-step enhanced cleaning process. Learn more</span>

                            </div>
                        </div>

                        <div className="more-things-a">
                            <img src={window.door} alt=""/>
                            <div className="mtaa">
                                <span className="mtaaa">Self check-in</span>
                                <span className="mtaab">Check yourself in with the lockbox.</span>

                            </div>
                        </div>


                        <div className="more-things-a">
                            <img src={window.cal} alt=""/>
                            <div className="mtaa">
                                <span className="mtaaa">Cancellation policy</span>
                                <span className="mtaab">Add your trip dates to get the cancellation details for this stay.</span>

                            </div>
                        </div>


                        <div className="more-things-a">
                            <img src={window.rules} alt="" />
                            <div className="mtaa">
                                <span className="mtaaa">House rules</span>
                                <span className="mtaab">This host doesn’t allow smoking. Get details</span>

                            </div>
                        </div>

                        <div className="descript">
                            {this.props.listing.description}
                        </div>
                        

                    </div>
                    </div>
                    <div className="map2">
                        <JMap />
                    </div>

                    </div>

                    



                </div>
            )
        }
        else{
            return(
                <div>
                    {/* <h1>Loading!</h1> */}
                </div>
            )
        }
    }
}

export default ListingShow;