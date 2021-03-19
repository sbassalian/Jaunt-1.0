import React from 'react';
import { Link } from 'react-router-dom';


class NavBar extends React.Component{
    constructor(props){
        super(props)
    }
    
    render(){

        const displayMessage = () => (
            <div>
                <p>{this.props.currentUser.first_name} {this.props.currentUser.last_name}</p>
                <button onClick={this.props.logout}>Sign Out</button>
            </div>

        );
        const displayLinks = () => {
            return (
                <div>
                    <button onClick={() => this.props.openModal('mainformbutton')} className='main-form-button'>
                        <img className="menu-icon" src={window.menuicon} alt="" />
                        <img className="user-icon" src={window.usericon} alt="" />
                    </button>
                    
                </div>
            )
        }

        return(
            <div>
                {this.props.currentUser ? displayMessage() : displayLinks()}
            </div>
        )
    }
}


export default NavBar;
