import { connect } from 'react-redux';
import { login, clearSessionErrors } from '../../actions/session';

import LoginForm from './login_form';
import React from 'react';
import { Link } from 'react-router-dom';
import {closeModal} from '../../actions/modal'

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: 'Log In',
        // navLink: <Link to="/login">sign up instead</Link>,
    };
};

// const mapStateToProps = state => {
//     return {
//         formType: 'Log In',
//     };
// };



const mapDispatchToProps = dispatch => ({
    action: (formUser) => dispatch(login(formUser)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearSessionErrors())
})

export default connect(mapStateToProps, mapDispatchToProps)(LoginForm);

