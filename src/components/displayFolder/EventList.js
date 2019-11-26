import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventsList extends Component {
  render() {
    if (!this.props.events) return "Loading...";

    return (
      <ul>
        {!this.props.events && <li>Loading events...</li>}
        {this.props.events &&
          this.props.events.map(event => {
            return (
              <li key={event.id}>
                <Link to={`event/${event.id}`}>{event.name}</Link>
              </li>
            );
          })}
      </ul>
    );
  }
}
