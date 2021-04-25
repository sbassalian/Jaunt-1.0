import React from 'react';
import { connect } from 'react-redux';
import SignupContainer from '../components/session/signup_container'
import LoginContainer from '../components/session/login_container'
import { closeModal } from '../actions/modal'
import MainFormButtonContainer from '../components/main_form_button/main_form_button_container'


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
        case 'mainformbutton':
            component = <MainFormButtonContainer grant={"grant"} />;
            break;
        case 'confirmres':
            component = <ProfileContainer />;
            break;
        default:
            return null;
    }





    if ('grant' === component.props.grant)
    {
        return(
            <>
                <div className="modal-background" onClick={closeModal} >
                </div>
                <div className="mfb" onClick={e => e.stopPropagation()}>
                    {component}
                </div>

            </>
        )
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