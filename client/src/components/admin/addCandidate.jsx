import React, {Component} from "react";
import axios from "axios";
import Footer from "../footer.jsx";
import Swal from "sweetalert2";
export class AddCandidate extends Component {
  state = {
    name: "",
    img: "",
    description: "",
    id: "",
  };
  handleChange = (event) => {
    this.setState({[event.target.name]: event.target.value});
  };

  handleSubmit = () => {
    const candidate = {
      role: this.state.role,
      img: this.state.img,
      description: this.state.description,
      id: this.state.id,
    };
    axios({
      method: "post",
      url: "/admn",
      data: candidate,
    })
      .then((res) => {
        alert("done");
      })
      .catch((err) => {
        alert("fail");
      });
  };

  render() {
    return (
      <div
        style={{backgroundColor: "rgba(10, 125, 255, 0.659)", padding: "100px"}}
      >
        <div id="addCandidate">
          <div className="container">
            <div className="col-md-8">
              <div className="row">
                <div className="section-title">
                  <hr />
                </div>
                <form
                  name="sentMessage"
                  id="contactForm"
                  noValidate
                  onSubmit={this.handleSubmit}
                >
                  <div className="row">
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="text"
                          id="nameOfCan"
                          className="form-control"
                          placeholder="Name of candidate"
                          required="required"
                          name="role"
                          onChange={this.handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                    <div className="col-md-6">
                      <div className="form-group">
                        <input
                          type="url"
                          id="ImgUrlCan"
                          className="form-control"
                          placeholder="Image Url"
                          required="required"
                          name="img"
                          onChange={this.handleChange}
                        />
                        <p className="help-block text-danger"></p>
                      </div>
                    </div>
                  </div>
                  <div className="form-group">
                    <textarea
                      name="description"
                      id="descriptionCan"
                      className="form-control"
                      rows="4"
                      placeholder="description"
                      required
                      onChange={this.handleChange}
                    ></textarea>
                    <p className="help-block text-danger"></p>
                  </div>

                  <div className="col-md-6">
                    <div className="form-group">
                      <input
                        type="text"
                        id="idOfCan"
                        className="form-control"
                        placeholder="id of candidate"
                        required="required"
                        name="id"
                        onChange={this.handleChange}
                      />
                      <p className="help-block text-danger"></p>
                    </div>
                  </div>
                  <div id="success"></div>
                  <button type="submit" className="btn btn-custom btn-lg">
                    Add
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
        <Footer />
      </div>
    );
  }
}

export default AddCandidate;
