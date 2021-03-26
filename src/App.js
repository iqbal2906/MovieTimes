import React from "react";
import "./App.css";
import { Navbar, Homepage } from "./components";
import { BrowserRouter as Router, Route } from "react-router-dom";

function App() {
  return (
    <Router>
      <div className="container">
        <Navbar />
        <Route path="/">
          <Homepage />
        </Route>
      </div>
    </Router>
  );
}

export default App;
