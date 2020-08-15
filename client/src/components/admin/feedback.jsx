import React, {Component} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Footer from "../footer.jsx";
class Feedback extends React.Component {
  state = {
    data: null,
    count: 0,
  };

  toDelete(e) {
    axios
      .post("/delete", {
        message: e.target.headers,
      })
      .then(function (response) {
        Swal.fire("Done!", "", "success").then(function () {
          console.log("Success on post the delete post request", response);
          window.location.reload(true);
        });
      })
      .catch(function (error) {
        console.log("Error on sending delete axios request", error);
      });
  }

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
        <h1 style={{color: "black"}}> Feedback</h1>
        <table style={{width: "100%"}}>
          <thead>
            <th style={{padding: "0px"}}>number</th>
            <th>Name</th>
            <th>Email</th>
            <th>Message/concern</th>
            <th>Finish</th>
          </thead>

          <tbody>
            {data.map((elem) => {
              this.state.count++;
              return (
                <tr>
                  <td className="count">{this.state.count}</td>
                  <td className="name">{elem.name}</td>
                  <td className="email">{elem.email}</td>
                  <td className="msg">{elem.message}</td>
                  <td
                    style={{cursor: "pointer"}}
                    headers={elem.message}
                    className="finish"
                    onClick={this.toDelete.bind(this)}
                  >
                    Done
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
        <Footer />
      </div>
    );
  }
}

export default Feedback;
