import cool from "superagent";

const baseUrl = "http://localhost:4000";

export const JWT = "JWT";

export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
export const GET_SINGLE_EVENT_SUCCESS = "GET_SINGLE_EVENT_SUCCESS";
export const EVENT_DELETE_SUCCESS = "EVENT_DELETE_SUCCESS";

export const TICKETS_FETCHED = "TICKETS_FETCHED";
export const TICKET_CREATE_SUCCESS = "TICKET_CREATE_SUCCESS";
export const GET_SINGLE_TICKET_SUCCESS = "GET_SINGLE_TICKET_SUCCESS";
export const TICKET_DELETE_SUCCESS = "EVENT_DELETE_SUCCESS";

export const COMMENTS_FETCHED = "COMMENTS_FETCHED";
export const COMMENT_CREATE_SUCCESS = "COMMENT_CREATE_SUCCESS";
export const GET_SINGLE_COMMENT_SUCCESS = "GET_SINGLE_COMMENT_SUCCESS";
export const COMMENT_DELETE_SUCCESS = "COMMENT_DELETE_SUCCESS";

// security---------------------------------------------------------------------------------------------------------------------
function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (name, password) => dispatch => {
  cool
    .post(`${baseUrl}/login`)
    .send({ name, password })
    .then(res => dispatch(jwt(res.body.jwt)));
};
//----------------------------------------------
export const signUp = (name, password) => dispatch => {
  cool
    .post(`${baseUrl}/user`)
    .send({ name, password })
    .then(res => console.log(res, "SIGN UP SENDDDDDDD^^^^^^^"));
};

//Event------------------------------------------------------------------------------------------------------------------
const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

export const loadEvents = () => (dispatch, getState) => {
  if (getState().events) return;
  cool(`${baseUrl}/event`)
    .then(res => dispatch(eventsFetched(res.body)))
    .catch(err => console.error(err));
};
//----------------------------------------------
const eventCreateSuccess = event => ({
  type: EVENT_CREATE_SUCCESS,
  event
});

export const createEvent = data => (dispatch, getState) => {
  const { user } = getState();
  cool
    .post(`${baseUrl}/event`)
    .set("Authorization", `Bearer ${user}`)
    .send(data)
    .then(response => {
      dispatch(eventCreateSuccess(response.body));
    })
    .catch(err => console.error(err));
};
//----------------------------------------------
const getSingleEventSuccess = event => ({
  type: GET_SINGLE_EVENT_SUCCESS,
  event
});

export const loadEvent = id => dispatch => {
  cool(`${baseUrl}/event/${id}`).then(selectedEvent => {
    console.log(selectedEvent.body, "SELECTED EVENTSSSSSSSS");
    dispatch(getSingleEventSuccess(selectedEvent.body));
  });
};
//----------------------------------------------
const eventDeleteSuccess = eventId => ({
  type: EVENT_DELETE_SUCCESS,
  eventId
});

export const deleteEvent = id => (dispatch, getState) => {
  const { user } = getState();
  console.log(user, "I'M USERRRRRRRR");

  cool
    .delete(`${baseUrl}/event/${id}`)
    .set("Authorization", `Bearer ${user}`)
    .then(res => dispatch(eventDeleteSuccess(id)));
};
//Ticket---------------------------------------------------------------------------------------------------------------------
const ticketsFetched = tickets => ({
  type: TICKETS_FETCHED,
  tickets
});

export const loadTickets = id => dispatch => {
  cool(`${baseUrl}/event/${id}/tickets`)
    .then(res => {
      dispatch(ticketsFetched(res.body));
    })
    .catch(err => console.error(err));
};
//----------------------------------------------
const ticketCreateSuccess = ticket => ({
  type: TICKET_CREATE_SUCCESS,
  ticket
});

export const createTicket = data => (dispatch, getState) => {
  const { user } = getState();
  cool
    .post(`${baseUrl}/ticket`)
    .set("Authorization", `Bearer ${user}`)
    .send(data)
    .then(response => {
      dispatch(ticketCreateSuccess(response.body));
    })
    .catch(err => console.error(err));
};
//----------------------------------------------
const getSingleTicketSuccess = ticket => ({
  type: GET_SINGLE_TICKET_SUCCESS,
  ticket
});

export const loadTicket = id => dispatch => {
  cool(`${baseUrl}/ticket/${id}`).then(selectedTicket => {
    // console.log(selectedTicket.body, "SELECTED TICKETTTTTTT");
    dispatch(getSingleTicketSuccess(selectedTicket.body));
  });
};
//----------------------------------------------
const ticketDeleteSuccess = ticketId => ({
  type: TICKET_DELETE_SUCCESS,
  ticketId
});

export const deleteTicket = id => (dispatch, getState) => {
  const { user } = getState();

  cool
    .set("Authorization", `Bearer ${user}`)
    .delete(`${baseUrl}/ticket/${id}`)
    .then(res => dispatch(ticketDeleteSuccess(id)));
};
//Comment---------------------------------------------------------------------------------------------------------------------
const commentsFetched = comments => ({
  type: COMMENTS_FETCHED,
  comments
});

export const loadComments = id => dispatch => {
  cool(`${baseUrl}/event/${id}/comments`)
    .then(res => {
      dispatch(commentsFetched(res.body));
    })
    .catch(err => console.error(err));
};
//----------------------------------------------
const commentCreateSuccess = event => ({
  type: COMMENT_CREATE_SUCCESS,
  event
});

export const createComment = data => (dispatch, getState) => {
  const { user } = getState();
  cool
    .post(`${baseUrl}/comment`)
    .set("Authorization", `Bearer ${user}`)
    .send(data)
    .then(response => {
      dispatch(commentCreateSuccess(response.body));
    })
    .catch(err => console.error(err));
};
//----------------------------------------------
const getSingleCommentSuccess = ticket => ({
  type: GET_SINGLE_COMMENT_SUCCESS,
  ticket
});

export const loadComment = id => dispatch => {
  cool(`${baseUrl}/comment/${id}`).then(selectedComment => {
    // console.log(selectedTicket.body, "SELECTED TICKETTTTTTT");
    dispatch(getSingleCommentSuccess(selectedComment.body));
  });
};
//----------------------------------------------
const commentDeleteSuccess = ticketId => ({
  type: COMMENT_DELETE_SUCCESS,
  ticketId
});

export const deleteComment = id => (dispatch, getState) => {
  const { user } = getState();

  cool
    .set("Authorization", `Bearer ${user}`)
    .delete(`${baseUrl}/comment/${id}`)
    .then(res => dispatch(commentDeleteSuccess(id)));
};
