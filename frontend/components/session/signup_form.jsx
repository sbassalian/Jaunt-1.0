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
        // this.renderErrors = this.renderErrors.bind(this);


    }

    componentWillUnmount() {
        this.props.clearErrors()
    }

    update(field){
        return(
            e => this.setState({[field]: e.currentTarget.value})
        )
    }

    handleSubmit(e){
        e.preventDefault();
        let user = Object.assign({}, this.state);
        // this.props.action(user).then(() => this.props.history.push('/'))
        this.props.action(user).then(this.props.closeModal);
    }

    renderErrors() {

        return (
            <ul>
                {this.props.errors.map((error) => (
                    // <li>{error}</li>
                    <span>{error}. </span>
                ))}
            </ul>
        );
    }

    render(){
        return(
            <div className="all-around">
                <h1 className="formtype">{this.props.formType}</h1>
                <form className="signup-form" onSubmit={this.handleSubmit}>
                    <div className="form-header">
                        <button className="x-icon" onClick={this.props.closeModal}>
                            <img src={window.x} alt="" />
                        </button>
                    </div>

                    <div className="rend-errors">
                        <div className="rend-errors-2">

                            {this.renderErrors()}
                        </div>
                    </div>

                    <div className="no-shot-this-works-2">
                        <div className="form-border-2">
                            <div className="signup-names">
                                <div className="data-3" id="fix">
                                    <input type="text"
                                        value={this.state.first_name}
                                        onChange={this.update('first_name')}
                                        className="login-input"
                                        placeholder="First Name"
                                        />
                                </div>


                                <div className="data-3" id="fix-2">
                                    <input type="text"
                                        value={this.state.last_name}
                                        onChange={this.update('last_name')}
                                        className="login-input"
                                        placeholder="Last Name"
                                        />
                                </div>
                            </div>

                            <div className="signup-texts">
                                <span className="subtle-text">Make sure it matches the name on your government ID.</span>
                            </div>

                            <div className="data-2" id="fix-2">
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                    placeholder="Email"
                                    />
                            </div>

                            <div className="signup-texts">
                                <span className="subtle-text">We'll email you trip confirmations and receipts.</span>
                            </div>

                            <div className="data-2" id="fix-2">
                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                    placeholder="Password"
                                />
                            </div>

                            <div className="signup-texts">
                                <span className="subtle-text">By selecting Agree and continue below, I agree to Jaunt's Terms of Service, Payments Terms of Service, Privacy Policy, and Nondiscrimination Policy.</span>
                            </div>
                        </div>
                    </div>

                    <div className="dont-have-acct-2">
                        <span className="dhac">Already have an account?</span>
                        <button onClick={() => this.props.closeModal()} onClick={() => this.props.openModal('login')}>Log in here!</button>

                    </div>

                    <div className="modal-button-continue-2">
                        <button>Continue</button>
                    </div>



                    {/* need a label for a birthdate here */}

                    {/* <p className="subtle-text">To sign up, you need to be at least 18. Your birthday won’t be shared with other people who use Jaunt.</p>


                    <p>Already have an account?</p> */}
                    {/* need to make a link to do something --> Log in!*/}
                </form>

            </div>
        )
    }
}

export default SignupForm;