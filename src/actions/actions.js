import cool from "superagent";

const baseUrl = "http://localhost:4000";

export const JWT = "JWT";
export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
export const GET_SINGLE_EVENT_SUCCESS = "GET_SINGLE_EVENT_SUCCESS";
export const EVENT_DELETE_SUCCESS = "EVENT_DELETE_SUCCESS";
export const TICKETS_FETCHED = "TICKETS_FETCHED";

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
    .then(res => {
      const action = jwt(res.body.jwt);

      dispatch(action);
    });
};

export const signUp = (name, password) => dispatch => {
  cool
    .post(`${baseUrl}/user`)
    .send({ name, password })
    .then(res => console.log(res, "SIGN UP SENDD"));
};

const eventsFetched = events => ({
  type: EVENTS_FETCHED,
  events
});

export const loadEvents = () => (dispatch, getState) => {
  if (getState().events) return; // you can ask here
  cool(`${baseUrl}/event`)
    .then(res => {
      dispatch(eventsFetched(res.body));
    })
    .catch(err => console.error(err));
};

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

const ticketsFetched = tickets => ({
  type: TICKETS_FETCHED,
  tickets
});

export const loadTickets = id => (dispatch, getState) => {
  cool(`${baseUrl}/event/${id}/tickets`)
    .then(res => {
      dispatch(ticketsFetched(res.body));
    })
    .catch(err => console.error(err));
};
