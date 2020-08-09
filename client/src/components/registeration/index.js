import React from "react";
import axios from "axios";
import CreatePassword from "../createPassword";
//mport { createPassword } from '../../../../server/middlewares/createPassword.js';
class SignIn extends React.Component {
  state = {id: "", password: "", component: null};
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  handleChange(event) {
    this.setState({[event.target.name]: event.target.value});
  }
  handleSubmit(event) {
    event.preventDefault();
    //Axios request goes here
    const user = {
      id: this.state.id,
      password: this.state.password,
    };
    axios
      .post("/login", user)
      .then(function (response) {
        console.log("Success  sign in", response);
        window.location.href = "/candidates";
      })
      .catch(function (error) {
        console.log("Error Get request on sign in compoenet", error);
      });
    this.setState({id: "", password: ""});
  }
  showSignupForm() {
    this.setState({
      component: <SignUp />,
    });
  }
  render() {
    return this.state.component == null ? (
      <div id="SignIn">
        <div className="component">
          <form onSubmit={this.handleSubmit}>
            <h1>Sign in</h1>
            <label id="id">ID­­­</label>
            <input
              type="number"
              name="id"
              placeholder=" e.g. 403328682"
              value={this.state.id}
              onChange={this.handleChange}
            />
            <label id="password">
              <br />
              <br />
              Password­­
            </label>
            <input
              type="password"
              name="password"
              placeholder=""
              value={this.state.password}
              onChange={this.handleChange}
            />
            <br />
            <br />
            <button type="submit" value="Log in" className="btn-custom">
              {" "}
              Sign In{" "}
            </button>
            <br />
            <br />
            <p>
              Don't have an account?{" "}
              <button
                className="button"
                onClick={this.showSignupForm.bind(this)}
              >
                Sign up
              </button>
            </p>
            ;
          </form>
        </div>
      </div>
    ) : (
      this.state.component
    );
  }
}

class SignUp extends React.Component {
  state = {id: 0, signIn: null};
  // , first_name: '', last_name: '', email: '', phoneNumber: '', dateOfBirth: '', gender: '', motherName: '', signIn: null };
  // handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  handleChange(event) {
    console.log(this.state.id, "hiii mooooooooo");
    this.setState({[event.target.name]: event.target.value});

    // <CreatePassword idd={this.state.id} />
  }
  // console.log('id line 88 ', this.state.id)
  handleSubmit(event) {
    event.preventDefault();
    const idd = this.state.id;
    //Axios request goes here
    axios
      .post("/signup", {
        // mobile: this.state.phoneNumber,
        // mother_name: this.state.motherName,
        id: this.state.id,
        // email: this.state.email,
        // dateOfBirth: this.state.dateOfBirth
      })
      .then((response) => {
        console.log("Data of sign up request nfdfd ", response.data);

        if (response.data.success) {
          this.setState({
            signIn: <CreatePassword id={idd} />,
          });
          console.log(idd, "hello yasmiiin");
        } else {
          console.log("Can't redierect to create password");
        }
      })
      .catch(function (error) {
        console.log("Failed to send sign up data", error);
      });
    this.setState({
      id: "",
      first_name: "",
      last_name: "",
      email: "",
      phoneNumber: "",
      dateOfBirth: "",
      gender: "",
      motherName: "",
    });
  }
  showSignin() {
    this.setState({
      signIn: <SignIn />,
    });
  }
  render() {
    return this.state.signIn == null ? (
      <div id="SignIn">
        <div className="component">
          <h1></h1>
          <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <label>
              ID
              <input
                name="id"
                placeholder=" e.g. 403328682"
                value={this.state.id}
                onChange={this.handleChange.bind(this)}
              />
            </label>
            <br />
            <br />{" "}
            <label>
              First Name{" "}
              <input
                type="text"
                name="first_name"
                placeholder=" John "
                value={this.state.first_name}
                onChange={this.handleChange}
              />{" "}
            </label>
            <br />
            <br />{" "}
            <label>
              Last Name{" "}
              <input
                type="text"
                name="last_name"
                placeholder=" Smith "
                value={this.state.last_name}
                onChange={this.handleChange}
              />{" "}
            </label>{" "}
            <label>
              <br />
              <br />
              Email{" "}
              <input
                type="email"
                name="email"
                placeholder=" e.g. jsmith@gmail.com"
                value={this.state.email}
                onChange={this.handleChange}
              />{" "}
            </label>
            <br />
            <br />{" "}
            <label>
              Phone Number{" "}
              <input
                type="number"
                name="phoneNumber"
                placeholder=" 05********"
                value={this.state.phoneNumber}
                onChange={this.handleChange}
              />{" "}
            </label>{" "}
            <br /> <br />{" "}
            <label>
              Date Of Birth{" "}
              <input
                type="date"
                name="dateOfBirth"
                value={this.state.dateOfBirth}
                onChange={this.handleChange}
              />{" "}
            </label>{" "}
            <br />
            <br />{" "}
            <label>
              Gender{" "}
              <select
                name="gender"
                value={this.state.gender}
                onChange={this.handleChange}
              >
                <option value="none"> </option>
                <option value="male"> Male </option>
                <option value="female"> Female </option>{" "}
              </select>{" "}
            </label>{" "}
            <br />
            <br />{" "}
            <label>
              Mother Name{" "}
              <input
                type="text"
                name="motherName"
                placeholder=" e.g. Huda"
                value={this.state.motherName}
                onChange={this.handleChange}
              />
            </label>
            <br />
            <br />
            <input type="submit" value="Sign up" />
            <br />
            <br />
            <p>
              Go bak to{" "}
              <button className="button" onClick={this.showSignin.bind(this)}>
                Sign in
              </button>
            </p>
          </form>
        </div>
      </div>
    ) : (
      this.state.signIn
    );
  }
}

export default SignIn;
