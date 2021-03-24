import * as APIUtil from '../util/listing'

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';


export const receiveListings = listings => {

    return({
        type: RECEIVE_LISTINGS,
        listings,
    })
};

export const receiveListing = listing => ({
    type: RECEIVE_LISTING,
    listing,
});

export const fetchListings = () => dispatch => (
    APIUtil.fetchListings().then(listings => (
        dispatch(receiveListings(listings))
    ))
);

export const fetchListing = id => dispatch => (
    APIUtil.fetchListing(id).then(payload => (
        dispatch(receiveListing(payload))
    ))
);

export const createListing = listing => dispatch => (
    APIUtil.createListing(listing).then(listing => (
        dispatch(receiveListing(listing))
    ))
);
