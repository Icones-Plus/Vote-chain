import React from "react";
import "./App.css";
import LandingPage from "./pages/landingPage/index"
import SignUp from "./components/signup/index";
import LogIn from "./components/logIn/index";
import AdminPanel from "./pages/adminPanel/adminPanel.js"
function App() {
  return (
    <div className="App">
      {/* <SignUp/> */}
      {/* <LogIn /> */}
      <AdminPanel/>
      {/* <LandingPage/> */}
    </div>
  );
}

export default App;
