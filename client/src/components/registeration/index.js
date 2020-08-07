import React from 'react';
import axios from 'axios'
class SignIn extends React.Component {
  state = { id: '', password: '', component: null };
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ id: '', password: '' })
    //Axios request goes here
  };
  showSignupForm() {
    this.setState({
      component: <SignUp />
    })
  }
  render() {
    return (
      this.state.component == null ?
        <div id="SignIn">
          <div className="component">
            <form onSubmit={this.handleSubmit}>
              <h1>Sign in</h1>
              <label id="id">
                ID­­­
              </label>
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
              <button type="submit" value="Log in" className="btn-custom"> Sign In </button><br /><br />
              <p>Don't have an account? <button className="button" onClick={this.showSignupForm.bind(this)} >Sign up</button></p>;
              </form>
          </div>
        </div>
        : this.state.component
    );
  }
}



class SignUp extends React.Component {
  state = { id: '', first_name: '', last_name:'', email: '', phoneNumber: '', dateOfBirth: '', gender: '', motherName: '', signIn: null };
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ id: '', first_name: '', last_name: '', email: '', phoneNumber: '', dateOfBirth: '', gender: '', motherName: '' })
    //Axios request goes here
    axios.post('/', {
      mobile: this.state.phoneNumber,
      mother_name: this.state.motherName,
      gender: this.state.gender,
      id: this.state.id,
      email: this.state.email,
      first_name: this.state.first_name,
      last_name: this.state.last_name,
      dateOfBirth: this.state.dateOfBirth
    })
    .then(function (response) {
      console.log("Sign up data got sent", response);
    })
    .catch(function (error) {
      console.log("Failed to send sign up data", error);
    });
  };
  showSignin() {
    this.setState({
      signIn: <SignIn />
    })
  }
  render() {
    return (
      this.state.signIn == null ?
        <div id="SignIn">
          <div className="component">
          <h1></h1>
          <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <label>
              ID
            <input type="number" name="id" placeholder=' e.g. 403328682' value={this.state.id} onChange={this.handleChange} />
              </label><br /><br />
              <label>
                First Name
            <input type="text" name="first_name" placeholder=' John ' value={this.state.first_name} onChange={this.handleChange} />
              </label><br /><br />
              <label>
                Last Name
            <input type="text" name="last_name" placeholder=' Smith ' value={this.state.last_name} onChange={this.handleChange} />
              </label>
            <label><br /><br />
            Email
          <input type="email" name='email' placeholder=' e.g. jsmith@gmail.com' value={this.state.email} onChange={this.handleChange} />
            </label><br /><br />
            <label>
              Phone Number
            <input type="number" name='phoneNumber' placeholder=' 05********' value={this.state.phoneNumber} onChange={this.handleChange} />
            </label> <br /> <br />
            <label>
              Date Of Birth
            <input type="date" name='dateOfBirth' value={this.state.dateOfBirth} onChange={this.handleChange} />
              </label> <br /><br />
              <label>
                Gender
                <select name='gender' value={this.state.gender} onChange={this.handleChange} >
                  <option value="none"> </option>
                  <option value="male"> Male </option>
                  <option value="female"> Female </option>
                </select>
              </label> <br /><br />
            <label>
              Mother Name
            <input type="text" name='motherName' placeholder=' e.g. Huda' value={this.state.motherName} onChange={this.handleChange} />
            </label><br /><br />
              <input type="submit" value="Sign up" /><br /><br />
            <p>Go bak to <button className="button" onClick={this.showSignin.bind(this)}>Sign in</button></p> 
          </form>
        </div>
        </div>
        
        : this.state.signIn
    );
  }
}


export default SignIn;