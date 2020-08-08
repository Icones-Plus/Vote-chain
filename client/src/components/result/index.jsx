
import React, { Component } from "react";

export class NavResult extends Component {
    render() {
        return (
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
                <div className="container">
                    <div className="navbar-header">
                        <button
                            type="button"
                            className="navbar-toggle collapsed"
                            data-toggle="collapse"
                            data-target="#bs-example-navbar-collapse-1"> {" "}
                            <span className="sr-only">Toggle navigation</span> {" "}
                            <span className="icon-bar"></span>{" "}
                            <span className="icon-bar"></span>{" "}
                            <span className="icon-bar"></span>{" "}
                        </button>
                        <a className="navbar-brand page-scroll" href="#page-top">
                            <span className="icon-bar"></span> Result {" "}
                            {/* <img className="navbar-brand1" src="./img/logo.png"></img> */}
                        </a>{" "}
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavResult;
