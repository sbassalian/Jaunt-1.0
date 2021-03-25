import ListingsIndex from "./listings_index";
import { connect } from 'react-redux';
import {fetchListings, fetchListing} from '../../actions/listing'
import {makeArray} from '../../reducers/selectors'

const mapStateToProps = state => {

return {
        listings: makeArray(state.entities.listings)
    };
};



const mapDispatchToProps = dispatch => ({
    fetchListings: () => dispatch(fetchListings()),
    fetchListing: (id) => dispatch(fetchListings(id)),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListingsIndex);