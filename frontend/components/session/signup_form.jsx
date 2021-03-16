import React from 'react';

class SignupForm extends React.Component{
    constructor(props){
        super(props);
        this.state = {
            email: '',
            first_name: '',
            last_name: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
    }

    update(field){
        return(
            e => this.setState({[field]: e.currentTarget.value})
        )
    }

    handleSubmit(e){
        e.preventDefault();
        let user = Object.assign({}, this.state);
        console.log(this.props)
        console.log(this.props.history)
        this.props.action(user).then(() => this.props.history.push('/'))
    }

    render(){
        return(
            <div>
                <form className="session-form-3" onSubmit={this.handleSubmit}>
                    <h1 className="form-header">{this.props.formType}</h1>

                    <label>First Name:
                        <input type="text"
                            value={this.state.first_name}
                            onChange={this.update('first_name')}
                            className="login-input"
                        />
                    </label>

                    <label>Last Name:
                        <input type="text"
                            value={this.state.last_name}
                            onChange={this.update('last_name')}
                            className="login-input"
                        />
                    </label>

                    <p className="subtle-text">Make sure it matches the name on your government ID.</p>

                    {/* need a label for a birthdate here */}

                    <p className="subtle-text">To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Jaunt.</p>

                    <label>Email:
                        <input type="text"
                                value={this.state.email}
                                onChange={this.update('email')}
                                className="login-input"
                                />
                    </label>

                    <p className="subtle-text">We'll email you trip confirmations and receipts.</p>

                    <label>Password:
                        <input type="password"
                               value={this.state.password}
                               onChange={this.update('password')}
                               className="login-input"
                        />
                    </label>

                    <p className="subtle-text">By selecting Agree and continue below, I agree to Jaunt's Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.</p>

                    <button>Agree and continue</button>

                    <p>Already have an account?</p>
                    {/* need to make a link to do something --> Log in!*/}
                </form>
            </div>
        )
    }
}

export default SignupForm;