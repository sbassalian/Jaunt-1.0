import { connect } from 'react-redux';

// import { updateFilter } from '../../actions/filter_actions';
// import { asArray } from '../../reducers/selectors';
import Search from './search';
import {updateFilter} from '../../actions/filter'

const mapStateToProps = (state, ownProps) => ({
    minGuests: state.ui.filters.minGuests,
    destination: state.ui.filters.destination,
    state: state,
    

});

const mapDispatchToProps = dispatch => ({
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(Search);
