import { connect } from 'react-redux';
import { fetchListing } from '../../actions/listing';
import ListingShow from './listing_show';
import {updateFilter} from '../../actions/filter'


const mapStateToProps = (state, ownProps) => {

    return {
        listing: state.entities.listings[ownProps.match.params.listingId],
        // listings: state.entities.listings,
        listingId: ownProps.match.params.listingId,
        currentUser: state.entities.users[state.session.id],
        filters: state.ui.filters
    };
};

const mapDispatchToProps = dispatch => ({
    fetchListing: id => dispatch(fetchListing(id)),
    updateFilter: (filter, value) => dispatch(updateFilter(filter, value))
});

export default connect(mapStateToProps,mapDispatchToProps)(ListingShow);
// export default connect(null, null)(ListingShow);