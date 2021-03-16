import { connect } from 'react-redux';
import { login } from '../../actions/session';
import LoginForm from './login_form';
import React from 'react';
import { Link } from 'react-router-dom';

// const mapStateToProps = ({ errors }) => {
//     return {
//         errors: errors.session,
//         formType: 'Log In',
//         navLink: <Link to="/login">sign up instead</Link>,
//     };
// };

const mapStateToProps = state => {
    return {
        formType: 'Log In',
    };
};



const mapDispatchToProps = dispatch => ({
    action: (formUser) => dispatch(login(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

