import React, { Component } from "react";
import axios from 'axios';

class Feedback extends React.Component {

  state = {
    data: null,
    count: 0
  }
  componentDidMount() {
    axios.get("/contact")
      .then(result => {
        console.log("Success on sending get request", result)
        result.data.map(elem => {
          this.state.count++;
          this.setState({
            data:
            <tr>
              <td>{this.state.count}</td>
              <td>{elem.name}</td>
              <td>{elem.email}</td>
              <td>{elem.message}</td>
            </tr> 
          });
        })
      })
      .catch(err => {
      console.log("Error in retrieving data on get request", err)
    })
  }

  render() {
    return (
      <div id="feedback">
        <h1> Feedback</h1>
        <table style={{width: "100%"}}>
          <tr>
            <th style={{padding:"0px"}}>number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message/concern</th>
          </tr>
          {this.state.data}
        </table>
      </div>
    );
  }
}

export default Feedback;
