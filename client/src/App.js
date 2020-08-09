import React from "react";
import "./App.css";
import Result from "./pages/result/index";
import LandingPage from "./pages/landingPage/index";
import Candidate from "./components/candidate/index";
import {BrowserRouter, Router, Switch, Route} from "react-router-dom";
import AdminPanel from "./pages/adminPanel/adminPanel.js";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route path="/admin" component={AdminPanel} />
          <Route path="/result" component={Result} />
          <Route path="/candidates" component={Candidate} />
          <Route path="*" component={LandingPage} />
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
