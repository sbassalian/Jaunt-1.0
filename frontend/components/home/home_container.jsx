import { connect } from 'react-redux';
import Home from './home'
import {closeModal} from '../../actions/modal'



const mapStateToProps = state => ({
    modal: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});


export default connect(mapStateToProps, mapDispatchToProps)(Home);
