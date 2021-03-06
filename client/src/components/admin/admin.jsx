import React, {Component} from "react";
import axios from "axios";
export class NavAdmin extends Component {
  handleClick(e) {
    this.props.handleToggle(e.target.name);
  }
  handleLogOut() {
    axios
      .get("/logout")
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  }
  render() {
    return (
      <nav id="menu" className="navbar navbar-default">
        <div className="container">
          <div className="navbar-header">
            <button
              type="button"
              className="navbar-toggle collapsed"
              data-toggle="collapse"
              data-target="#bs-example-navbar-collapse-1"
            >
              {" "}
              <span className="sr-only">Toggle navigation</span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
              <span className="icon-bar"></span>{" "}
            </button>
            <a className="navbar-brand page-scroll" href="#page-top">
              <span className="icon-bar"></span> Admin panel{" "}
              {/* <img className="navbar-brand1" src="./img/logo.png"></img> */}
            </a>{" "}
          </div>

          <div
            className="collapse navbar-collapse"
            id="bs-example-navbar-collapse-1"
          >
            <ul className="nav navbar-nav navbar-right">
              <li>
                <a
                  href="#addCandidate"
                  className="page-scroll"
                  name="cand"
                  onClick={(e) => {
                    this.handleClick(e);
                  }}
                >
                  Add candidate{" "}
                </a>
              </li>
              <li>
                <a
                  href="#feedback"
                  className="page-scroll"
                  name="feed"
                  onClick={(e) => {
                    this.handleClick(e);
                  }}
                >
                  feedback{" "}
                </a>
              </li>
              <li>
                <a
                  href="#addCandidate"
                  className="page-scroll"
                  name="cand"
                  onClick={(e) => {
                    this.handleLogOut();
                  }}
                >
                  logout{" "}
                </a>
              </li>
            </ul>
          </div>
        </div>
      </nav>
    );
  }
}

export default NavAdmin;
