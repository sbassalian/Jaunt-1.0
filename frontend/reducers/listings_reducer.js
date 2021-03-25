import {RECEIVE_LISTINGS,RECEIVE_LISTING} from '../actions/listing';

const listingsReducer = (initialState = {}, action) => {
    Object.freeze(initialState)
    switch (action.type) {
        case RECEIVE_LISTINGS:
            return action.listings;
        case RECEIVE_LISTING:

            return Object.assign({}, { [action.listing.id]: action.listing });
        default:
            return initialState;
    }
};

export default listingsReducer;
