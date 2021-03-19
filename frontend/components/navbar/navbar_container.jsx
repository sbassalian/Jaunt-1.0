import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import NavBar from './navbar';
import {openModal} from '../../actions/modal'

// const mapStateToProps = state => {
//     console.log(state);

//     return {
//         currentUser: state.entities.users[state.session.id]
//     };
// };

const mapStateToProps = ({ session }) => ({
    currentUser: session.currentUser
});


const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout()),
    openModal: modal => dispatch(openModal(modal))
});

export default connect(mapStateToProps, mapDispatchToProps)(NavBar);
