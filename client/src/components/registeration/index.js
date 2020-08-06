import React from 'react';
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
              <button type="submit" value="Log in" className="btn-custom"> Sign In </button>
              <p>Don't have an account?</p><button className="button" onClick={this.showSignupForm.bind(this)} >Sign up</button>;
              </form>
          </div>
        </div>
        : this.state.component
    );
  }
}



class SignUp extends React.Component {
  state = { id: '', email: '', phoneNumber: '', dateOfBirth: '', motherName: '', signIn: null };
  handleChange = this.handleChange.bind(this);
  handleSubmit = this.handleSubmit.bind(this);
  handleChange(event) {
    this.setState({ [event.target.name]: event.target.value });
  };
  handleSubmit(event) {
    event.preventDefault();
    this.setState({ id: '', email: '', phoneNumber: '', dateOfBirth: '', motherName: '' })
    //Axios request goes here
  };
  showSignin() {
    this.setState({
      signIn: <SignIn />
    })
  }
  render() {
    return (
      this.state.signIn == null ?
        <div className="component">
          <h1></h1>
          <form onSubmit={this.handleSubmit}>
            <h1>Sign Up</h1>
            <label>
              ID
            <input type="number" name="id" placeholder=' e.g. 403328682' value={this.state.id} onChange={this.handleChange} />
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
              Mother Name
            <input type="text" name='motherName' placeholder=' e.g. Huda' value={this.state.motherName} onChange={this.handleChange} />
            </label><br /><br />
            <input type="submit" value="Sign up" />
            <p>Go bak to </p> <button className="button" onClick={this.showSignin.bind(this)}>Sign in</button>
          </form>
        </div>
        : this.state.signIn
    );
  }
}


export default SignIn;