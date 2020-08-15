import React, {Fragment} from "react";
import "./App.css";
import Result from "./pages/result/index";
import LandingPage from "./pages/landingPage/index";
import Candidates from "./pages/candidates/candidates";
import {BrowserRouter, Router, Switch, Route} from "react-router-dom";
import AdminPanel from "./pages/adminPanel/adminPanel.js";
import NotFound from "./pages/error/error";
import Analyst from "./pages/analyst/analyst";
import jwtDecode from "jwt-decode";
import CandidateProfile from "./components/CandidateProfile/index";
import ForCandidate from "./components/forCandidate/index";
function App() {
  return (
    <div className="App">
      <BrowserRouter>
        {!document.cookie ? (
          <Switch>
            <Route path="/" component={LandingPage} />
            <Route path="*" exact={true} component={NotFound} />
          </Switch>
        ) : jwtDecode(document.cookie).admin ? (
          <AdminPanel />
        ) : (
          <Switch>
            <Route exact path="/" render={() => <LandingPage />} />
            <Route path="/result" component={Result} />
            <Route path="/candidates" component={Candidates} />
            <CandidateProfile path="/CandidateProfile" />
            <ForCandidate path="/forCandidate" />
            <Route path="/analyst" exact={true} component={Analyst} />
            <Route path="*" exact={true} component={NotFound} />
          </Switch>
        )}
      </BrowserRouter>
    </div>
  );
}

export default App;
