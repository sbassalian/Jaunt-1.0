import React from 'react';
class JMap extends React.Component {
    constructor(props){
        super(props)
        
    }

    componentDidMount() {

        const mapOptions = {
        center: { lat: 25.7991, lng: -80.1238 },
            zoom: 13
        };

 
        this.map = new google.maps.Map(document.getElementById("map"), mapOptions);
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