import {
  EVENTS_FETCHED,
  EVENT_CREATE_SUCCESS,
  GET_SINGLE_EVENT_SUCCESS,
  EVENT_DELETE_SUCCESS,
} from "../actions/actions"; //

const reducer = (state = null, action = {}) => {
  // why initial state should be null
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events;
    case EVENT_CREATE_SUCCESS:
      return [...state, action.event];
    case GET_SINGLE_EVENT_SUCCESS:
      return action.event;
    case EVENT_DELETE_SUCCESS:
      return state && state.filter(event => action.eventId !== event.id);
  
    //state && state.filter i anlamadim
    // => state'te eventslerim var id'si sildigimin id'simne esit olani filtreledim

    default:
      return state;
  }
};
export default reducer;
