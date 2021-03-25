import React from 'react';
import NavBarContainer from '../navbar/navbar_container'

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