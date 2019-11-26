import { TICKETS_FETCHED } from "../actions/actions"; //

const reducer = (state = null, action = {}) => {
  // why initial state should be null
  switch (action.type) {
    case TICKETS_FETCHED:
      return action.tickets;

    default:
      return state;
  }
};
export default reducer;
