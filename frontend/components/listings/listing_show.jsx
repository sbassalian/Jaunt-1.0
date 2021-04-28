import React from 'react';
import NavBarContainer from '../navbar/navbar_container'
import JMap from '../map/map'
import SearchContainer from '../search/search_container'
import Review from '../reviews/review';
import ReviewFormContainer from '../reviews/review_form_container'
import { ProtectedRoute } from '../../util/route_util';
import { ReviewLink } from '../../util/link_util';


class ListingShow extends React.Component {
    constructor(props){
        super(props)
        this.handleClickHome = this.handleClickHome.bind(this)
        
        this.state = {
            "render": false
        };
    }

    componentDidMount(){
         this.props.fetchListing(this.props.listingId).then(() => this.setState({["render"]: true}))
       
    }

    handleChange(filter) {
    
        return e => this.props.updateFilter(filter, parseInt(e.currentTarget.value))
    };

    handleChange2(filter) {
        return e => this.props.updateFilter(filter, e.currentTarget.value)
    };

    // handleNothing(){
    //     console.log("hi")
    // }

    // componentDidUpdate() {
    //     this.props.fetchListing(this.props.listingId)
    // }

    handleClickHome() {
        this.props.history.push(`/`);
    }

    parseDate(str) {
    let ymd = str.split('-');
    
    return new Date(ymd[0], ymd[1] - 1, ymd[2]);
    }

    datediff(first, second) {
      
    // Take the difference between the dates and divide by milliseconds per day.
    // Round to nearest whole number to deal with DST.
        return Math.round((second - first) / (1000 * 60 * 60 * 24));
    }

    reviewList(reviews = []){
    // console.log(reviews);

    reviews = this.props.listing.reviewIds.map(id => reviews[id]);
        return(
        reviews.map(review => {
            console.log(review);
            console.log("WTF IS GOING ON")
            return (<Review
                review={review}
                key={review.id}
            />)
        }
            
        ))
    
  
}



    

    
    render(){
        if (this.state["render"]){

        
                
            console.log(this.props)
          
            
            
           
            let nights = this.props.listing.price * (this.datediff(this.parseDate(this.props.filters.startDate),this.parseDate(this.props.filters.endDate)));
            let cleaning = this.props.listing.price * .067;
            let service = this.props.listing.price * .15;
            let occupancy = this.props.listing.price * .074
            let total = (nights + cleaning + service + occupancy).toFixed(2)

            
            
            const pu1 = this.props.listing.picture_url_1;
            return(
                <div>
                    <div className="lh">
    
                        <div className="lhl" onClick={this.handleClickHome}>
                            <img className="home-icon" src={window.airbnbblack} alt="" />
                            <p>jaunt</p>
                        </div>
    
                        <div className="lhc">
                            {/* <div className="lhc2">
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
                            </div> */}
                            
                            < SearchContainer singleListing={true}/>
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

                                {/* <div className="descript">
                                    {this.props.listing.description}
                                </div> */}
                        

                            </div>
                        </div>

                    
                        {/* <div className="map2">
                            <JMap listing={this.props.listing} singleListing={true}/>
                        </div> */}

                        <div className="pricecalc">
                            <div className="pricereviews">
                                <span>${this.props.listing.price} / night</span>
                                
                            </div>

                            {/* <div className="lsdates">
                                <div className="lsdatesa">
                                    <div className="lsdatesaa">
                                        <span>Check In</span>
                                    </div>
                                    <div>
                                        <span>Check out</span>
                                    </div>
                                </div>

                                <div className="lsdatesb">
                                    <span>Guests</span>
                                </div>
                            </div> */}

                            <form className="lsdates">
                                <div className="lsdatesa">
                                    <div className="lsdatesaa">
                                        <span>CHECK IN</span>
                                        <input type="date" 
                                            value={this.props.filters.startDate} id="lsda" onChange={this.handleChange2('startDate')}/>
                                    </div>
                                    <div>
                                        <span>CHECK OUT</span>
                                        <input type="date" id="lsda" value={this.props.filters.endDate} onChange={this.handleChange2('endDate')}/>
                                    </div>
                                </div>

                                <div className="lsdatesb">
                                    <span>GUESTS</span>
                                    <input type="number" value={this.props.filters.minGuests >= this.props.listing.num_guests_avail ? this.props.listing.num_guests_avail : this.props.filters.minGuests < 1 ? 1 : this.props.filters.minGuests} onChange={this.props.filters.minGuests >= this.props.listing.num_guests_avail ? this.handleNothing : this.handleChange('minGuests')}id="lsda"/>
                                </div>
                            </form>

                            <div className="lsbut">
                                <button>Reserve</button>
                            </div>

                            <div className="lsline">
                                <span>You won't be charged yet</span>
                            </div>

                            <div className="lsprices">
                                <div className="lspricesa">
                                    <span>${this.props.listing.price} x {(this.datediff(this.parseDate(this.props.filters.startDate),this.parseDate(this.props.filters.endDate)))} nights</span>
                                    <span>${nights.toFixed(2)}</span>
                                </div>

                                <div className="lspricesa">
                                    <span>Cleaning fee</span>
                                    <span>${cleaning.toFixed(2)}</span>
                                </div>

                                <div className="lspricesa">
                                    <span>Service fee</span>
                                    <span>${service.toFixed(2)}</span>
                                </div>

                                <div className="lspricesa">
                                    <span>Occupancy taxes and fees</span>
                                    <span>${occupancy.toFixed(2)}</span>
                                </div>

                                <div className="lspricesaf">
                                    <span>Total</span>
                                    <span>${total}</span>
                                </div>
                            </div>

                        </div>

                        



                    </div>

                    <div className="needfont">
                        <h2>Location</h2>
                    </div>
                    <div className="map2">
                            <JMap listing={this.props.listing} singleListing={true}/>
                    </div>

                    <div className="abovereviews">
                        <h2>Reviews</h2>
                    </div>

                    <div className="reviewsdiv">
                        {/* <ReviewLink
                            component={ReviewFormContainer}
                            to={`/listings/${this.props.listing.id}/review`}
                            label="Leave a Review"
                        />

                        <ProtectedRoute
                            path="/listings/:listingId/review"
                            component={ReviewFormContainer}
                        /> */}

                        <div>
                            <ReviewFormContainer />
                        </div>


                        <div className="reviews">
                            
                            {/* <button onClick={this.reviewList(this.props.listing.reviews)}>HIT ME</button> */}
                            {this.reviewList(this.props.listing.reviews)}

                            {/* <Review review={{ id: 1, rating: 5, body: "Great Host!", listing_id: 1 }} /> */}

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