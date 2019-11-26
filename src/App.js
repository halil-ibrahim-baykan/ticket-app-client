import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store";
import Home from "./components/Home/Home";
import TicketListContainer from './components/displayFolder/TicketListContainer'

function App() {
  return (
    <Provider store={store}>
      <div>
        <Route path="/" exact component={Home} />
        <Route path="/event/:id" exact component={TicketListContainer} />
      </div>
    </Provider>
  );
}

export default App;
