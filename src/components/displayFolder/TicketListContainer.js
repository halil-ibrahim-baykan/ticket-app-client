import React from "react";
import { loadTickets } from "../../actions/actions";
import { connect } from "react-redux";
import TicketList from "./TicketList";

class TicketListContainer extends React.Component {
  componentDidMount() {
    const eventId = this.props.match.params.id;
    this.props.loadTickets(eventId);
  }

  render() {
    if (!this.props.tickets) return <p>Loading...</p>;

    return (
      <div>
        <h3>
          {this.props.tickets[0] && this.props.tickets[0].event.name}
          <i style={{ fontSize: "15px" }}> created by </i>
          {this.props.tickets[0] && this.props.tickets[0].user.name}
        </h3>
        <TicketList
          tickets={this.props.tickets}
          eventId={this.props.match.params.id}
        />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets
});

export default connect(mapStateToProps, { loadTickets })(TicketListContainer);
