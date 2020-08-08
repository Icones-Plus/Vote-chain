import React from 'react';

class LogIn extends React.Component {
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
          <div id="LogIn">
            <h1>Log in</h1>
            <form onSubmit={this.handleSubmit}>
              <label>
                ID­­­
                <input
                  type="number"
                  name="id"
                  placeholder=" e.g. 403328682"
                  value={this.state.id}
                  onChange={this.handleChange}
                />
              </label>
              <label>
                <br />
                <br />
                Password­­
                <input
                  type="password"
                  name="password"
                  placeholder=""
                  value={this.state.password}
                  onChange={this.handleChange}
                />
              </label>
              <br />
              <br />
              <input type="submit" value="Log in" />
            </form>
          </div>
        );
    }
}

export default LogIn;