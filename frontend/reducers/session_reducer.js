import {RECEIVE_CURRENT_USER,LOGOUT_CURRENT_USER,} from '../actions/session';

const _nullSession = {
    currentUser: null,
};

export default (initialState = _nullSession, action) => {
    Object.freeze(initialState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return Object.assign({}, {currentUser: action.user});
        case LOGOUT_CURRENT_USER:
            return _nullSession;
        default:
            return initialState;
    }
}

