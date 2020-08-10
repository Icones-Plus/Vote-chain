import React, {Component} from "react";

class Feedback extends React.Component {

  state = {
    count: '',
    name: '',
    email: '',
    msg: ''
  }

  render() {
    return (
      <div id="feedback">
        <h1> Feedback</h1>
        <table style={{width: "100%"}}>
          <tr>
            <th>number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message/concern</th>
          </tr>
          <tr>
            <td>1</td>
            <td>Jill</td>
            <td>jill@gmail.com</td>
            <td>I hate blue</td>
          </tr>
          <tr>
            <td>2</td>
            <td>Smith</td>
            <td>sam@gmail.com</td>
            <td>just want to say hi</td>
          </tr>
          <tr>
            <td>3</td>
            <td>Jackson</td>
            <td>jackson@hotmail.com</td>
            <td>Are you there?</td>
          </tr>
        </table>
      </div>
    );
  }
}

export default Feedback;
