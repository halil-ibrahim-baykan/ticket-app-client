import React, { Component } from "react";
import { Link } from "react-router-dom";
import CreateTicketContainer from "../createFolder/CreateTicketContainer";
import { connect } from "react-redux";
class TicketList extends Component {
  getRiskColor(risk) {
    if (risk > 70) {
      return "red";
    }
    if (risk > 35) {
      return "orange";
    }
    return "green";
  }

  renderTableData = () => {
    if (!this.props.tickets || !this.props.tickets.length) {
      return;
    }
    return this.props.tickets.map((ticket, index) => {
      if (!ticket) {
        return <h3>Loading</h3>;
      }
      const { id, name, description, price, user, risk } = ticket; //destructuring
      return (
        user && (
          <tr key={id}>
            {/* <td>{id}</td> */}
            <td>
              <Link to={`/ticket/${ticket.id}`}>{name}</Link>
            </td>
            <td>{description}</td>
            <td>{price}</td>
            <td style={{ color: this.getRiskColor(risk) }}>{risk}</td>
            <td>{user.name}</td>
          </tr>
        )
      );
    });
  };

  render() {
    return this.props.tickets ? (
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
    ) : (
      <p>Loading</p>
    );
  }
}

const mapStateToProps = state => {
  return {
    user: state.user
  };
};

export default connect(mapStateToProps)(TicketList);
