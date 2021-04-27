import ListingsIndex from "./listings_index";
import { connect } from 'react-redux';
import {fetchListings, fetchListing} from '../../actions/listing'
import {makeArray} from '../../reducers/selectors'
import {updateFilter} from '../../actions/filter'

const mapStateToProps = (state, ownProps) => {

return {
        listings: makeArray(state.entities.listings),
        state: state
    };
};



const mapDispatchToProps = dispatch => ({
    fetchListings: () => dispatch(fetchListings()),
    fetchListing: (id) => dispatch(fetchListings(id)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))

});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListingsIndex);