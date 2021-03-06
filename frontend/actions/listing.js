import * as APIUtil from '../util/listing'

export const RECEIVE_LISTINGS = 'RECEIVE_LISTINGS';
export const RECEIVE_LISTING = 'RECEIVE_LISTING';
export const RECEIVE_REVIEW = 'RECEIVE_REVIEW';



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

export const receiveReview = ({ review, average_rating }) => ({
    type: RECEIVE_REVIEW,
    review,
    average_rating,
});

export const fetchListings = filters => dispatch => (
    APIUtil.fetchListings(filters).then(listings => (
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

export const createReview = review => dispatch => {

    return (
        APIUtil.createReview(review).then(review => (
            dispatch(receiveReview(review))
        ))
    )
};