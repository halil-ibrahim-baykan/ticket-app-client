import React, { Component } from "react";
import { connect } from "react-redux";
import TicketDetails from "./TicketDetails";
import { loadTicket, deleteTicket } from "../../actions/actions"; //, updateTicket

class TicketDetailsContainer extends Component {
  componentDidMount() {
    this.props.loadTicket(Number(this.props.match.params.id));
  }
  onDelete = id => {
    this.props.deleteTicket(this.props.ticket.id);
    this.props.history.push("/");
  };

  render() {
    // if (!this.props.ticket) {
    //   return <p>Loading..............</p>;
    // }
    return (
      <TicketDetails onDelete={this.onDelete} ticket={this.props.ticket} />
    );
  }
}

const mapStateToProps = state => ({
  ticket: state.tickets /// offf offf offf you made me tireddd
});

export default connect(mapStateToProps, { loadTicket, deleteTicket })(
  TicketDetailsContainer
);
