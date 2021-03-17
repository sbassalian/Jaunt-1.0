import {RECEIVE_CURRENT_USER,LOGOUT_CURRENT_USER,} from '../actions/session';

const _nullUser = Object.freeze({
    id: null
});

export default (initialState = _nullUser, action) => {
    Object.freeze(initialState);

    switch (action.type) {
        case RECEIVE_CURRENT_USER:
            return { id: action.currentUser.id };
        case LOGOUT_CURRENT_USER:
            return _nullUser;
        default:
            return initialState;
    }
}


