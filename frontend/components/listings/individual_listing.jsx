import React from 'react';


class IndividualListing extends React.Component {
    constructor(props) {
        super(props);
        
    }

    render() {
        let listing = this.props.listing;
        return (
            <div>
                <h1>{listing.title}</h1>
                <img className="mht" src={window.mht1} alt="" />
                <img className="mht" src={window.mht2} alt="" />
                <img className="mht" src={window.mht3} alt="" />
                <img className="mht" src={window.mht4} alt="" />
                <img className="mht" src={window.mht5} alt="" />
                <img className="mht" src={window.mht6} alt="" />

            </div>
        );
    }
}

export default IndividualListing;
