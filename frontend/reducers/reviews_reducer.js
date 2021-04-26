import { RECEIVE_REVIEW, RECEIVE_LISTING } from '../actions/listing';

const reviewsReducer = (state = {}, action) => {
    Object.freeze(state);
    switch (action.type) {
        case RECEIVE_LISTING:
            return Object.assign({}, state, action.reviews);
        case RECEIVE_REVIEW:
            const { review } = action;
            return Object.assign({}, state, { [review.id]: review });
        default:
            return state;
    }
}

export default reviewsReducer;
