import React, {Component} from "react";
import axios from "axios";

class Feedback extends React.Component {
  state = {
    data: null,
    count: 0,
  };
  componentDidMount() {
    axios
      .get("/contact")
      .then((result) => {
        console.log("Success on sending get request", result.data);
        this.setState({data: result.data});
      })
      .catch((err) => {
        console.log("Error in retrieving data on get request", err);
      });
  }

  render() {
    var data = this.state.data || [];
    return (
      <div id="feedback">
        <h1 style={{color:"black"}}> Feedback</h1>
        <table style={{width: "100%"}}>
          <tr>
            <th style={{padding: "0px"}}>number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message/concern</th>
          </tr>
          {data.map((elem) => {
            this.state.count++;
            return (
              <tr>
                <td className="count">{this.state.count}</td>
                <td className="name">{elem.name}</td>
                <td className="email">{elem.email}</td>
                <td className="msg">{elem.message}</td>
              </tr>
            );
          })}
        </table>
      </div>
    );
  }
}

export default Feedback;
