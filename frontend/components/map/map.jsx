import React from 'react';
import MarkerManager from '../../util/marker_manager';


class JMap extends React.Component {
    constructor(props){
        super(props)
        console.log(this.props)
    }

    componentDidMount() {

        const mapOptions = {
        center: { lat: 25.7991, lng: -80.1238 },
            zoom: 13
        };

 
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
        this.MarkerManager = new MarkerManager(this.map, this.handleMarkerClick.bind(this));
        if (this.props.singleListing) {
            this.MarkerManager.createMarkerFromListing(this.props.listing);
            // this.props.fetchListing(this.props.listingId);
            console.log("hit")
        } else {
            this.registerListeners();
            this.MarkerManager.updateMarkers(this.props.listings);
        }
    }

    componentDidUpdate() {
        if (this.props.singleListing) {
            // const targetListingKey = Object.keys(this.props.listings)[0];
            // const targetListing = this.props.listings[targetListingKey];
            console.log("hit") //grabs only that one listing
        } else {
            this.MarkerManager.updateMarkers(this.props.listings);
        }
    }

    registerListeners() {
        google.maps.event.addListener(this.map, 'idle', () => {
            const { north, south, east, west } = this.map.getBounds().toJSON();
            const bounds = {
                northEast: { lat: north, lng: east },
                southWest: { lat: south, lng: west }
            };
            // this.props.updateFilter('bounds', bounds);
        });
        google.maps.event.addListener(this.map, 'click', (event) => {
            const coords = getCoordsObj(event.latLng);
            this.handleClick(coords);
        });
    }

    handleMarkerClick(listing) {
        if(!this.props.singleListing){
            this.props.history.push(`listings/${listing.id}`);
        }
    }

    render() {
        return (
            <div className="jmap" id="map">
                <h1>Map</h1>
            </div> 
        )
    }


}

export default JMap;