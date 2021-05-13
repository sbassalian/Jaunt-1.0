import { connect } from 'react-redux';
import { signup, login, clearSessionErrors } from '../../actions/session';
import SignupForm from './signup_form';
import React from 'react';
import { Link } from 'react-router-dom';
import { closeModal, openModal } from '../../actions/modal'

const mapStateToProps = state => {
    return {
        errors: state.errors.session,
        formType: 'Sign Up',
        // navLink: <Link to="/login">log in instead</Link>,
    };
};


const mapDispatchToProps = dispatch => ({
    action: (formUser) => dispatch(signup(formUser)),
    login: (formUser) => dispatch(login(formUser)),
    closeModal: () => dispatch(closeModal()),
    clearErrors: () => dispatch(clearSessionErrors()),
    openModal: modal => dispatch(openModal(modal)),
})

export default connect(mapStateToProps, mapDispatchToProps)(SignupForm);

