import React from 'react';

class SignIn extends React.Component {
    state = { id: '', password: '' };
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

    render() {
        return (
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
            </form>
          </div>
        );
    }
}

export default SignIn;