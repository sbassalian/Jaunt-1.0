import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import MainFormButton from './main_form_button';
import { openModal, closeModal } from '../../actions/modal'

const mapStateToProps = state => {
    console.log(state);

    return {
        currentUser: state.entities.users[state.session.id]
    };
};



const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal)),
    closeModal: () => dispatch(closeModal())
});

export default connect(mapStateToProps, mapDispatchToProps)(MainFormButton);