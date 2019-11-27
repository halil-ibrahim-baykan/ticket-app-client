import {
  EVENTS_FETCHED,
  EVENT_CREATE_SUCCESS,
  GET_SINGLE_EVENT_SUCCESS,
  EVENT_DELETE_SUCCESS
} from "../actions/actions"; 

const reducer = (state = null, action = {}) => {
  switch (action.type) {
    case EVENTS_FETCHED:
      return action.events;
    case EVENT_CREATE_SUCCESS:
      return [...state, action.event];
    case GET_SINGLE_EVENT_SUCCESS:
      return action.event;
    case EVENT_DELETE_SUCCESS:
      return state && state.filter(event => action.eventId !== event.id);

    default:
      return state;
  }
};
export default reducer;
