import React from 'react';

class LoginForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            email: '',
            password: ''
        };
        this.handleSubmit = this.handleSubmit.bind(this);

    }

    update(field){
        return (
            e => this.setState({ [field]: e.currentTarget.value })
        )
    }

    handleSubmit(e){
        e.preventDefault();
        let user = Object.assign({}, this.state);
        this.props.action(user);
    }

    renderErrors() {
        return (
            <ul>
                {this.props.errors.map((error) => (
                    <li>{error}</li>
                ))}
            </ul>
        );
    }

    render() {
        return (
            <div>
                <form className="login-form" onSubmit={this.handleSubmit}>
                    <h1 className="form-header">{this.props.formType}</h1>
                    {this.renderErrors()}
                    <label>Email:
                        <input type="text"
                            value={this.state.email}
                            onChange={this.update('email')}
                            className="login-input"
                        />
                    </label>


                    <label>Password:
                        <input type="password"
                            value={this.state.password}
                            onChange={this.update('password')}
                            className="login-input"
                        />
                    </label>

                    <button>{this.props.formType}</button>

                    <p>Dont have an account?</p>
                    {/* need to make a link to do something --> Sign up!*/}


                </form>
            </div>
        )
    }
}

export default LoginForm;