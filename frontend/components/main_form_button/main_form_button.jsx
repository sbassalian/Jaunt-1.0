import React from 'react';
import { Link } from 'react-router-dom';

class MainFormButton extends React.Component {
    constructor(props){
        super(props)
    }

    render(){

        return(
            <div className="mfb2">
                <button onClick={()=> this.props.closeModal()} onClick={() => this.props.openModal('signup')}>Signup</button>

                <button onClick={() => this.props.openModal('login')
                }>Login</button>
                
                <div className="or-line-2">
                </div>
                {/* <h1>Hi!</h1> */}

                <button id="lighter">Host your home</button>

                <button id="lighter" >Host your experience</button>

                <button id="lighter" >Help</button>
            </div>
        )
    }
}

export default MainFormButton

