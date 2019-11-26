import cool from "superagent";

const baseUrl = "http://localhost:4000";

export const JWT = "JWT";
export const EVENTS_FETCHED = "EVENTS_FETCHED";
export const EVENT_CREATE_SUCCESS = "EVENT_CREATE_SUCCESS";
export const GET_SINGLE_EVENT_SUCCESS = "GET_SINGLE_EVENT_SUCCESS";
export const EVENT_DELETE_SUCCESS = "EVENT_DELETE_SUCCESS";

function jwt(payload) {
  return {
    type: JWT,
    payload
  };
}

export const login = (email, password) => dispatch => {
  cool
    .post(`${baseUrl}/login`)
    .send({ email, password })
    .then(res => {
      const action = jwt(res.body.jwt);

      dispatch(action);
    });
};

export const signUp = (email, password) => dispatch => {
  cool
    .post(`${baseUrl}/user`)
    .send({ email, password })
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
      console.log(res.body, "ress.boddyyyyyy");
      dispatch(eventsFetched(res.body));
    })
    .catch(err => console.error(err));
};
