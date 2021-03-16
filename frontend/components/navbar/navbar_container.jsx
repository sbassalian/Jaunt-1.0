import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import NavBar from './navbar';

const mapStateToProps = state => {
    console.log(state);
    return {
        currentUser: state.session.currentUser
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);
