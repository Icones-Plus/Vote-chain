import React from "react";
import "./App.css";
import LandingPage from "./pages/landingPage/index";
import {BrowserRouter, Switch, Route} from "react-router-dom";

function App() {
  return (
    <div className="App">
      <BrowserRouter>
        <Switch>
          <Route exact path="/" render={() => <LandingPage />} />
          <Route path="*" component={LandingPage} />
          {/*
          <Route path="/admin" component={admin} />
          <Route path="/candidates" component={candidates} />*/}
        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
