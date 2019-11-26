import React from "react";
import { loadEvents } from "../../actions/actions";
import { connect } from "react-redux";
import EventsList from "./EventList";

class EventsListContainer extends React.Component {
  componentDidMount() {
    this.props.loadEvents();
  }

  render() {
    if (!this.props.events) return <p>Loading...</p>;

    return <EventsList events={this.props.events} />;
  }
}

const mapStateToProps = state => ({
  events: state.events
});

export default connect(mapStateToProps, { loadEvents })(EventsListContainer);
