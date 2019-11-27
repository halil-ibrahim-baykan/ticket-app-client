import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class TicketList extends Component {
  renderTableData = () => {
    if (!this.props.tickets) {
      return "Loading tickets...";
    }
    return this.props.tickets.map((ticket, index) => {
      const { id, name, description, price } = ticket; //destructuring
      return (
        <tr key={id}>
          {/* <td>{id}</td> */}
          <td>
            <Link to={`/ticket/${ticket.id}`}>{name}</Link>
          </td>
          <td>{description}</td>
          <td>{price}</td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        {!this.props.tickets && <p>Loading tickets...</p>}
        <h1 id="title">Tickets</h1>
        <table id="tickets">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Price</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
