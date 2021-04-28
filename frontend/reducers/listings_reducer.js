import {RECEIVE_LISTINGS,RECEIVE_LISTING, RECEIVE_REVIEW} from '../actions/listing';

const listingsReducer = (initialState = {}, action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case RECEIVE_LISTINGS:
            return action.listings;
        case RECEIVE_LISTING:

            return Object.assign({}, { [action.listing.id]: action.listing });
        case RECEIVE_REVIEW:
            const { review, average_rating } = action;
            const newState = Object.assign({}, initialState);
            newState[review.listing_id].reviewIds.push(review.id);
            newState[review.listing_id].average_rating = average_rating;
            return newState;
        default:
            return initialState;
    }
};

export default listingsReducer;
