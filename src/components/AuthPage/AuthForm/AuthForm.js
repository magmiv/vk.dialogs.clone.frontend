import React from 'react';


import './authForm.scss';

class AuthForm extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      name: "",
      password: "",
      errors: []
    };

  }

  handleInput(e) {
    this.setState({ [e.target.name]: e.target.value });
  }

  render() {
    return (
      <div className="auth-form">
        <input
          type="text"
          name="name"
          placeholder="Ваше имя"
          value={this.state.name}
          onChange={this.handleInput.bind(this)}>
        </input>
        <input
          type="password"
          name="password"
          placeholder="Пароль"
          value={this.state.password}
          onChange={this.handleInput.bind(this)}>
        </input>
      </div>
    );
  }

}

export default AuthForm;
