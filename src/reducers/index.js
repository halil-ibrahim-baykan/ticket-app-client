import { combineReducers } from "redux";
import events from "./events";
import user from "./user";
import tickets from "./tickets";
import comments from "./comments";

export default combineReducers({
  events,
  user,
  tickets,
  comments
});
