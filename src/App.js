import React from "react";
import "./App.css";
import Header from "./Header.js";
import { BrowserRouter as Router, Switch, Route, Link } from "react-router-dom";
import TinderCards from "./TinderCards";
function App() {
  return (
    <div className="App">
      {/*cause this is outside the route it renders it regardless of route */}
      <Header />

      <Router>
        <Switch>
          <Route path="/chat">
            <h1>chat</h1>
          </Route>
          {/*default routes needs to be @ bottom otherwise it'll render / first */}
          <Route path="/">
            <TinderCards />
          </Route>
        </Switch>
        {/* card */}
        {/* buttons */}
        {/* chat screen */}
      </Router>
    </div>
  );
}

export default App;
