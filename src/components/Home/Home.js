import React, { Component } from "react";
import { connect } from "react-redux";
// import EventListContainer from "../displayFolder/EventListContainer";
import LoginFormContainer from "../security/LoginFormContainer";
import SignupFormContainer from "../security/SignupFormContainer";
import CreateEventContainer from "../createFolder/CreateEventContainer";
class Home extends Component {
  render() {
    return (
      <div>
        {!this.props.user && (
          <div>
            <LoginFormContainer />
            <br />
            <SignupFormContainer />
          </div>
        )}
        {this.props.user && <CreateEventContainer />}

        {/* <br />
        <EventListContainer /> */}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(Home);
