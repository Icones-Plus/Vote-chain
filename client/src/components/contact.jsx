import React, {Component} from "react";
import axios from "axios";
import Swal from "sweetalert2";
import Footer from "./footer";

export class Contact extends Component {
  state = {
    name: "",
    email: "",
    message: "",
  };
  handleChange = (e) => {
    this.setState({[e.target.id]: e.target.value});
  };
  handleSubmit = (e) => {
    //some kind of functionality
    e.preventDefault();
    axios
      .post("/contact", this.state)
      .then((result) => {
        Swal.fire(
          "Done!",
          "Thank you for your feedback and honesty. We will make sure to take your opinion into consideration!",
          "success"
        );
      })
      .catch((err) => {
        console.log("Error on the post request of contact", err);
        Swal.fire({
          icon: "error",
          title: "Oops...",
          text: "Something went wrong!",
        });
      });
    this.setState({
      name: "",
      email: "",
      message: "",
    });
  };
  render() {
    return (
      <div>
        <div id="contact">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <h2>Get In Touch</h2>
                  <p>
                    Please fill out the form below to send us an email and we
                    will get back to you as soon as possible.
                  </p>
                </div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  onSubmit={this.handleSubmit.bind(this)}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="name"
                          className="form-control"
                          placeholder="Name"
                          required="required"
                          value={this.state.name}
                          onChange={this.handleChange.bind(this)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="email"
                          id="email"
                          className="form-control"
                          placeholder="Email"
                          required="required"
                          value={this.state.email}
                          onChange={this.handleChange.bind(this)}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="message"
                      id="message"
                      className="form-control"
                      rows="4"
                      placeholder="Message"
                      required
                      value={this.state.message}
                      onChange={this.handleChange.bind(this)}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Send Message
                  </button>
                </form>
              </div>
            </div>
            <div className="col-md-3 col-md-offset-1 contact-info">
              <div className="contact-item">
                <h3>Contact Info</h3>
                <p>
                  <span>
                    <i className="fa fa-map-marker"></i> Address
                  </span>
                  {this.props.data ? this.props.data.address : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-phone"></i> Phone
                  </span>{" "}
                  {this.props.data ? this.props.data.phone : "loading"}
                </p>
              </div>
              <div className="contact-item">
                <p>
                  <span>
                    <i className="fa fa-envelope-o"></i> Email
                  </span>{" "}
                  {this.props.data ? this.props.data.email : "loading"}
                </p>
              </div>
            </div>
            <div className="col-md-12">
              <div className="row">
                <div className="social">
                  <ul>
                    <li>
                      <a
                        href={this.props.data ? this.props.data.facebook : "/"}
                      >
                        <i className="fa fa-facebook"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.twitter : "/"}>
                        <i className="fa fa-twitter"></i>
                      </a>
                    </li>
                    <li>
                      <a href={this.props.data ? this.props.data.youtube : "/"}>
                        <i className="fa fa-youtube"></i>
                      </a>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div>
          <div className="container text-center" style={{padding: "15px"}}>
            <p>
              &copy; 2020 ElecChian Design by Icones Team
              <a href="https://github.com/Icones-Plus"> Icones</a>
            </p>
          </div>
        </div>
      </div>
    );
  }
}

export default Contact;
