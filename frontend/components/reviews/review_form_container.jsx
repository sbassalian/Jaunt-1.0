import { connect } from 'react-redux';

import { createReview } from '../../actions/listing';
import ReviewForm from './review_form';

const mapStateToProps = state => ({
    listingId: Object.keys(state.entities.listings)[0]
})

const mapDispatchToProps = dispatch => ({
   
    createReview: review => dispatch(createReview(review))
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(ReviewForm);
