import { connect } from 'react-redux';
import { signup } from '../../actions/session';
import SignupForm from './signup_form';
import React from 'react';
import { Link } from 'react-router-dom';

const mapStateToProps = ({ errors }) => {
    return {
        errors: errors.session,
        formType: 'Sign Up',
        navLink: <Link to="/login">log in instead</Link>,
    };
};


const mapDispatchToProps = dispatch => ({
    action: (formUser) => dispatch(signup(formUser))
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

