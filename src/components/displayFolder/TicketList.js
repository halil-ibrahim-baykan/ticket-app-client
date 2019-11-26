import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TicketList extends Component {
  render() {
    if (!this.props.tickets) return "Loading...";

    return (
      <ul>
        {!this.props.tickets && <li>Loading tickets...</li>}
        {this.props.tickets &&
          this.props.tickets.map(ticket => {
            return (
              <li key={ticket.id}>
                <Link to={`ticket/${ticket.id}`}>{ticket.name}</Link>
              </li>
            );
          })}
      </ul>
    );
  }
}
