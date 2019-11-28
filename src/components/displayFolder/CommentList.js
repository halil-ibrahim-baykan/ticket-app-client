import React, { Component } from "react";

export default class CommentList extends Component {
  render() {
    return (
      <div>
        <p>
          {this.props.comment.comment}
          <i>___by {this.props.comment.user.name}</i>
        </p>
      </div>
    );
  }
}
