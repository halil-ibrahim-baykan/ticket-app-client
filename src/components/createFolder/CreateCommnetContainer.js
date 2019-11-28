import React, { Component } from "react";
import { connect } from "react-redux";
import { createComment } from "../../actions/actions";
import CreateComment from "./CreateComment";

class CreateCommentContainer extends Component {
  state = {
    comment: "",
    ticketId: this.props.ticketId
  };

  onChange = event => {
    this.setState({
      [event.target.name]: event.target.value
    });
  };

  onSubmit = event => {
    event.preventDefault();
    this.props.createComment(this.state);
    this.setState({
      comment: ""
    });
  };

  render() {
    return (
      <CreateComment
        onSubmit={this.onSubmit}
        onChange={this.onChange}
        values={this.state}
      />
    );
  }
}

export default connect(null, { createComment })(CreateCommentContainer);
