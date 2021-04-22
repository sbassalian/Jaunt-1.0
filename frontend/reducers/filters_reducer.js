
import { UPDATE_FILTER } from '../actions/filter';

let today = new Date();

let dd = String(today.getDate()).padStart(2, '0');
let mm = String(today.getMonth() + 1).padStart(2, '0'); //January is 0!
let yyyy = today.getFullYear();
today = yyyy + '-' + mm + '-' + dd;

let firstDay = new Date();

let nextWeek = new Date(firstDay.getFullYear(), firstDay.getMonth(), firstDay.getDate() + 7);

let newdd = String(nextWeek.getDate()).padStart(2, '0');
let newmm = String(nextWeek.getMonth() + 1).padStart(2, '0'); //January is 0!
let newyyyy = nextWeek.getFullYear();
let endDate = newyyyy + '-' + newmm + '-' + newdd;

const defaultFilters = Object.freeze({
    bounds: {},
    minGuests: 1,
    destination: 'Miami Beach',
    dd: dd,
    mm:mm,
    yyyy: yyyy,
    startDate: today,
    endDate: endDate
});

const filtersReducer = (state = defaultFilters, action) => {
    Object.freeze(state);
    if (action.type === UPDATE_FILTER) {
        const newFilter = {
            [action.filter]: action.value
        };
        return Object.assign({}, state, newFilter);
    } else {
        return state;
    }
};

export default filtersReducer;
