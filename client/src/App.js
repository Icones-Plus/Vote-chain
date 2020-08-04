import React from 'react';
import './App.css';
import SignUp from './components/signup/index'
import LogIn from './components/logIn/index'
import Navbar from './components/navbar/index'
import Routing from './components/router/index'
function App() {
  return (
    <div className="App">
      <header> <Navbar /></header>
      <Routing />
      {/* <SignUp/> */}
      {/* <LogIn /> */}
      {/* <Navbar /> */}
    </div>
  );
}

export default App;
