import React, { Component } from "react";
import LoginForm from "./LoginForm";
import { connect } from "react-redux";
import { login } from "../actions";

class LoginFormContainer extends Component {
  state = { name: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.login(this.state.name, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    //checkm if this.prop.jwt != "" and this.props
    //then redirect
    return (
      <LoginForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { login })(LoginFormContainer);
