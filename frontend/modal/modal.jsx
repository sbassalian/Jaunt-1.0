import React from 'react';
import { connect } from 'react-redux';
import SignupContainer from '../components/session/signup_container'
import LoginContainer from '../components/session/login_container'
import { closeModal } from '../actions/modal'


const mapStateToProps = state => ({
    modal: state.ui.modal
})

const mapDispatchToProps = dispatch => ({
    closeModal: () => dispatch(closeModal())
});


function Modal({ modal, closeModal }) {
    if (!modal) {
        return null;
    }
    
    let component;
    
    switch (modal) {
        case 'login':
            component = <LoginContainer />;
            break;
        case 'signup':
            component = <SignupContainer />;
            break;
        default:
            return null;
    }


                
    return (
        <>
        <div className="modal-background" >
        </div>
        <div className="modal-child" id="help" onClick={e => e.stopPropagation()}>
            {component}
        </div>

        </>

    );
}

export default connect(mapStateToProps, mapDispatchToProps)(Modal);