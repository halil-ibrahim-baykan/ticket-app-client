import React from "react";

import { connect } from "react-redux";
import { signUp } from "../actions";
import SignUpForm from "./SignUpForm";

class SignUpFormContainer extends React.Component {
  state = { name: "", password: "" };

  onSubmit = event => {
    event.preventDefault();
    this.props.signUp(this.state.name, this.state.password);
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  render() {
    return (
      <SignUpForm
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { signUp })(SignUpFormContainer);
