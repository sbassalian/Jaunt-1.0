import React from 'react';
class JMap extends React.Component {
    constructor(props){
        super(props)
        
    }

    componentDidMount() {
        // set the map to show SF
        const mapOptions = {
        center: { lat: 40.7494, lng: -73.9809 }, // this is SF
            zoom: 13
        };

        // wrap this.mapNode in a Google Map
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
    }

    render() {
        return (
            <div className="jmap" id="map">
                <h1>Map</h1>
            </div> // this ref gives us access to the map dom node
        )
    }


}

export default JMap;