import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);
        this.handleDemoSubmit = this.handleDemoSubmit.bind(this);

    }

    componentWillUnmount(){
        this.props.clearErrors()
    }

    update(field){
        return (
            e => this.setState({ [field]: e.currentTarget.value })
        )
    }

    handleSubmit(e){
        e.preventDefault();
        let user = Object.assign({}, this.state);
        // console.log("heyyy")
        // console.log(this.props.closeModal)
        this.props.action(user).then(this.props.closeModal);
    }

    handleDemoSubmit(e){
        debugger
        e.preventDefault();
        let demoState = 
            {
                email: 'solomonbassalian@gmail.com',
                password: '1234567'
            };
        this.props.action(demoState).then(this.props.closeModal);
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

    render() {
        return (
            <div>
                <h1 className="formtype">{this.props.formType}</h1>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <div className="form-header">
                        <button className="x-icon" onClick={this.props.closeModal}>
                            <img  src={window.x} alt="" />
                        </button>
                    </div>

                    <div className="rend-errors">
                        <div className="rend-errors-2">

                        {this.renderErrors()}
                        </div>
                    </div>
                    

                    <div className="no-shot-this-works">
                        <div className="form-border">
                            <div className="data" id="fix">
                                <input type="text"
                                    value={this.state.email}
                                    onChange={this.update('email')}
                                    className="login-input"
                                    placeholder="Email"
                                />
                                {/* 
                                <label className="form-label">Email:
                                </label> */}

                            </div>

                            <div className="data">

                                <input type="password"
                                    value={this.state.password}
                                    onChange={this.update('password')}
                                    className="login-input"
                                    placeholder="Password"
                                />

                                {/* <label className="form-label">Password:
                                </label> */}
                            </div>
                        </div>
                    </div>

                    <div className="modal-button-continue">
                        <button >Continue</button>
                    </div>

                    <div className="or-line">
                    </div>

                    <div className="or">
                        <span>or</span>
                    </div>
                        {/* need to make a link to do something --> Sign up!*/}
                   
                    {/* </div> */}

                </form>

                <div className="continue-with">
                    <div className="continue-with-2">

                        <div className="try-this">
                            <a href="https://www.linkedin.com/in/solomon-bassalian-ba3662174/">
                                <button>
                                <div className="plz">
                                    {<img className="continue-with-icons" src={window.linkedin} alt="" />}
                                    Continue to my LinkedIn
                                </div>
                                </button>
                            </a>
                        </div>

                            <div className="try-this">
                        <a href="https://github.com/sbassalian">
                                 <button>
                                     <div className="plz">

                                     {<img className="continue-with-icons" src={window.github} alt="" />}Continue to my Github
                                     </div>
                                </button>
                        </a>
                            </div>



                            <div className="try-this">
                                <a href="https://www.google.com/">
                                <button>
                                    <div className="plz">

                                        {<img className="continue-with-icons" src={window.googleimg} alt="" />}
                                        
                                        {<span>Continue with Google</span>}
                                        {/* Continue with Google  */}
                                    </div>
                                </button>   
                                </a>

                            </div>


                        {/* <div className="try-this">
                            <a href="https://www.facebook.com/">
                                    <button>
                                        <div className="plz">
                                            {<img className="continue-with-icons" src={window.facebook} alt="" />}
                                            Continue with Facebook
                                        </div>
                                    </button>
                            </a>
                        </div> */}

                        <div className="try-this">
                            {/* <a href="https://www.facebook.com/"> */}
                            <button onClick={this.handleDemoSubmit}>
                                        <div className="plz">
                                            {<img className="continue-with-icons" src={window.aA} alt="" />}
                                            Continue with Demo User
                                        </div>
                            </button>
                            {/* </a> */}
                        </div>
                    </div>
                </div>

                <div className="dont-have-acct">
                    <span>Dont have an account?</span>
                    <button onClick={() => this.props.closeModal()} onClick={() => this.props.openModal('signup')}>Sign up here!</button>
                    
                </div>
            </div>
        )
    }
}

export default LoginForm;