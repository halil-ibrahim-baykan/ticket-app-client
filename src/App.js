import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store";
import Home from "./components/Home/Home";
import TicketListContainer from "./components/displayFolder/TicketListContainer";
import EventListContainer from "./components/displayFolder/EventListContainer";
import TicketDetailsContainer from "./components/displayFolder/TicketDetailsContainer";

function App() {
  return (
    <Provider store={store}>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/event/:id" exact component={TicketListContainer} />
        <Route path="/" exact component={EventListContainer} />
        <Route path="/ticket/:id" exact component={TicketDetailsContainer} />
      </div>
    </Provider>
  );
}

export default App;
