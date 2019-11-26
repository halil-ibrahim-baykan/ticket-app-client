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
        {this.props.tickets[0] && this.props.tickets[0].event.name}
        <TicketList tickets={this.props.tickets} />
      </div>
    );
  }
}

const mapStateToProps = state => ({
  tickets: state.tickets
});

export default connect(mapStateToProps, { loadTickets })(TicketListContainer);
