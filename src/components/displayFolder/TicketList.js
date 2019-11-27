import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreateTicketContainer from "../createFolder/CreateTicketContainer";
import { connect } from "react-redux";
class TicketList extends Component {
  renderTableData = () => {
    if (!this.props.tickets || !this.props.tickets.length) {
      return "Loading tickets...";
    }
    return this.props.tickets.map((ticket, index) => {
      if (!ticket) {
        return <h3>Loading</h3>;
      }
      const { id, name, description, price, user, risk } = ticket; //destructuring
      return (
        <tr key={id}>
          {/* <td>{id}</td> */}
          <td>
            <Link to={`/ticket/${ticket.id}`}>{name}</Link>
          </td>
          <td>{description}</td>
          <td>{price}</td>
          <td>{risk}</td>
          <td>{user.name}</td>
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
              <th>Risk</th>
              <th>Author</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
        <br />
        <hr />
        <br />
        {this.props.user && (
          <CreateTicketContainer eventId={this.props.eventId} />
        )}
      </div>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(TicketList);
