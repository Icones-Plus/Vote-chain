import React from "react";
import "./App.css";
import LandingPage from "./pages/landingPage/index";
// import SignUp from "./components/registeration/index";
// import LogIn from "./components/logIn/index";
import Candidate from "./components/candidate/index";
import {BrowserRouter, Router, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          {/* <Route path="*" component={LandingPage} /> */}
          {/* <Route path="/admin" component={Admin} /> */}
          {/* <Route path="/candidates" component={Candidate} /> */}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
