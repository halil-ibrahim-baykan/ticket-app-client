import React from "react";
import { loadComments } from "../../actions/actions";
import { connect } from "react-redux";
import CommentList from "./CommentList";

class CommentListContainer extends React.Component {
  // constructor(props) {
  //   super(props);

  //   this.state = {
  //     userId: null
  //   };
  // }
  state = {};
  componentDidMount() {
    this.props.loadComments(this.props.ticketId);
  }

  render() {
    if (!this.props.comments) return <p>Loading...</p>;
    // return <p>hi</p>;
    return (
      <div>
        <hr />
        <h3>Comments</h3>
        {this.props.comments.map(comment => {
          return (
            <CommentList
              comment={comment}
              user={this.props.user}
              key={comment.id}
            />
          );
        })}
      </div>
    );
  }
}

const mapStateToProps = state => ({
  comments: state.comments,
  user: state.user
});

export default connect(mapStateToProps, { loadComments })(CommentListContainer);
