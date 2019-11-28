import React, { Component } from "react";
import CreateCommnetContainer from "../createFolder/CreateCommnetContainer";
import CommentListContainer from "../displayFolder/CommentListContainer";

export default class TicketDetails extends Component {
  getRiskColor(risk) {
    if (risk > 70) {
      return "red";
    }
    if (risk > 35) {
      return "darkyellow";
    }
    return "green";
  }

  render() {
    if (!this.props.ticket) return <p>Loading..........</p>;

    return this.props.ticket.event ? (
      <div>
        <h1>Name: {this.props.ticket.name}</h1>
        <h3>Description: {this.props.ticket.description}</h3>
        <p>Price: {this.props.ticket.price}</p>
        <p style={{ color: this.getRiskColor(this.props.ticket.risk) }}>
          Risk: {this.props.ticket.risk}
        </p>
        <p>Author: {this.props.ticket.user && this.props.ticket.user.name}</p>
        {/* <button onClick={this.props.onDelete}>Delete</button> */}
        <CommentListContainer
          ticketId={this.props.ticket.id}
          user={this.props.user}
        />
        <br />
        {this.props.user && (
          <CreateCommnetContainer
            ticketId={this.props.ticket.id}
            user={this.props.user}
          />
        )}
      </div>
    ) : (
      <div>Loading</div>
    );
  }
}
