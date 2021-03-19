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
        // console.log(openModal)
            return (
                <div>
                    <nav className="login-signup">
                        <button onClick={() => this.props.openModal('login')
                        }>Login</button>
                        <br />
                        <button onClick={() => this.props.openModal('signup')}>Signup</button>
                    </nav>
                </div>
            )
        }

        return(
            <div>
                {console.log(this.props.currentUser)}
                {this.props.currentUser ? displayMessage() : displayLinks()}
            </div>
        )
    }
}


export default NavBar;
