import { connect } from 'react-redux';
import { logout } from '../../actions/session';
import NavBar from './navbar';

const mapStateToProps = state => {
    return {
        currentUser: state.entities.users[state.session.id]
    };
};

const mapDispatchToProps = dispatch => ({
    logout: () => dispatch(logout())
});

export default connect(
    mapStateToProps,
    mapDispatchToProps
)(NavBar);
