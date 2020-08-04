import React from "react";
import "./App.css";
import SignUp from "./components/signup/index";
import LogIn from "./components/logIn/index";
import Candidate from "./components/candidate";

function App() {
  return (
    <div className="App">
      {/* <SignUp/> */}
      {/* <LogIn /> */}
      <Candidate />
    </div>
  );
}

export default App;
