import React from "react";
import "./App.css";
import { Provider } from "react-redux";
import { Route } from "react-router-dom";
import store from "./store";
import EventListContainer from "./components/displayFolder/EventListContainer";
function App() {
  return (
    <Provider store={store}>
      <div>
        {/* <Route path="/" exact component={Home} /> */}
        <Route path="/" exact component={EventListContainer} />
      </div>
    </Provider>
  );
}

export default App;
