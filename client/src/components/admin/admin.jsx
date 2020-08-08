import React, { Component } from "react";

export class NavAdmin extends Component {
    render() {
        return (
            <nav id="menu" className="navbar navbar-default navbar-fixed-top">
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
                                <a href="#addCandidate" className="page-scroll">
                                    Add candidate                    </a>
                            </li>
                            <li>
                                <a href="#setting" className="page-scroll">
                                    setting </a>
                            </li>
                           
                            
                        </ul>
                    </div>
                </div>
            </nav>
        );
    }
}

export default NavAdmin;
