// import React, { Component } from "react";
// import { Link } from "react-router-dom";

// export default class EventsList extends Component {
//   render() {
//     if (!this.props.events) return "Loading...";

//     return (
//       <ul>
//         {!this.props.events && <li>Loading events...</li>}
//         {this.props.events &&
//           this.props.events.map(event => {
//             return (
//               <li key={event.id}>
//                 <Link to={`event/${event.id}`}>{event.name}</Link>
//               </li>
//             );
//           })}
//       </ul>
//     );
//   }
// }

import React, { Component } from "react";
import { Link } from "react-router-dom";

export default class EventsList extends Component {
  renderTableData = () => {
    if (!this.props.events) {
      return "Loading events...";
    }
    return this.props.events.map((event, index) => {
      const { id, name, description, url, startDate, endDate } = event; //destructuring
      return (
        <tr key={id}>
          {/* <td>{id}</td> */}
          <td>
            <Link to={`/event/${event.id}`}>{name}</Link>
          </td>
          <td>{description}</td>

          <td>{startDate}</td>
          <td>{endDate}</td>
          <td>
            <img src={url} alt={url} />
          </td>
        </tr>
      );
    });
  };

  render() {
    return (
      <div>
        {!this.props.events && <p>Loading tickets...</p>}
        <h1 id="title">Events</h1>
        <table id="tickets">
          <thead>
            <tr>
              <th>Name</th>
              <th>Description</th>
              <th>Start Date</th>
              <th>End Date</th>
              <th>Image</th>
            </tr>
          </thead>
          <tbody>{this.renderTableData()}</tbody>
        </table>
      </div>
    );
  }
}
