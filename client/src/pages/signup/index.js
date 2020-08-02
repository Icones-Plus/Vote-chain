import React from 'react';

class SignUp extends React.Component {
    state = { id: '', email: '', phoneNumber: '', dateOfBirth: '', motherName: ''};
    handleChange = this.handleChange.bind(this);
    handleSubmit = this.handleSubmit.bind(this);
    handleChange(event) {
        this.setState({ [event.target.name]: event.target.value });
    };
    handleSubmit(event) {
        event.preventDefault();
        this.setState({ id: '', email: '', phoneNumber: '', dateOfBirth: '', motherName: ''})
    };

    render() {
        return (
            <div>
                <h1>
                    Sign Up
                </h1>
                <form onSubmit={this.handleSubmit}>
                    <label>
                        ID:
                    <input type="number" name='id' value={this.state.id} onChange={this.handleChange} />
                    </label>
                    <label><br /><br />
                        Email:
                    <input type="email" name='email' value={this.state.email} onChange={this.handleChange} />
                    </label><br /><br />
                    <label>
                        Phone Number:
                    <input type="number" name='phoneNumber' value={this.state.phoneNumber} onChange={this.handleChange} />
                    </label> <br /> <br />
                    <label>
                        Date Of Birth:
                    <input type="date" name='dateOfBirth' value={this.state.dateOfBirth} onChange={this.handleChange} />
                    </label> <br /><br />
                    <label>
                        Mother Name:
                    <input type="text" name='motherName' value={this.state.motherName} onChange={this.handleChange} />
                    </label><br /><br />
                    <input type="submit" value="Sign up" />
                </form>
            </div>
        );
    }
}

export default SignUp;