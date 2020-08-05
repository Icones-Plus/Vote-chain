import React from "react";
import "./App.css";
import LandingPage from "./pages/landingPage/index"
import SignUp from "./components/signup/index";
import SignIn from "./components/signIn/index";
import Routing from "./components/router/index"
function App() {
  return (
    <div className="App">
      {/* <header> <Navbar /></header>
      <Routing /> */}
      {/* <SignUp/> */}
      {/* <SignIn /> */}
      <Routing/>
      <LandingPage/>
    </div>
  );
}

export default App;
