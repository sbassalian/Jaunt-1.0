import ListingsIndex from "./listings_index";
import { connect } from 'react-redux';
import {fetchListings} from '../../actions/listing'
import {makeArray} from '../../reducers/selectors'

const mapStateToProps = state => {
    console.log(state);
return {
        listings: makeArray(state.entities.listings)
    };
};



const mapDispatchToProps = dispatch => ({
    fetchListings: () => dispatch(fetchListings()),
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ListingsIndex);