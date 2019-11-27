import {
  TICKETS_FETCHED,
  TICKET_CREATE_SUCCESS,
  GET_SINGLE_TICKET_SUCCESS,
  TICKET_DELETE_SUCCESS
} from "../actions/actions"; //

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case TICKETS_FETCHED:
      return action.tickets;
    case TICKET_CREATE_SUCCESS:
      return [...state, action.ticket];
    case GET_SINGLE_TICKET_SUCCESS:
      return action.ticket;
    case TICKET_DELETE_SUCCESS:
      return state && state.filter(ticket => action.ticketId !== ticket.id);

    default:
      return state;
  }
};
export default reducer;
