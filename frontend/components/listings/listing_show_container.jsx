import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing';
import ListingShow from './listing_show'


const mapStateToProps = (state, ownProps) => {

    return {
        listing: state.entities.listings[ownProps.match.params.listingId],
        // listings: state.entities.listings,
        listingId: ownProps.match.params.listingId
    };
};

const mapDispatchToProps = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id))
});

export default connect(mapStateToProps,mapDispatchToProps)(ListingShow);
// export default connect(null, null)(ListingShow);