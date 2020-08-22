import React, {useState} from "react";
import axios from "axios";
import jwtDecode from "jwt-decode";
import Swal from "sweetalert2";

function CreatePassword(props) {
  const id = props.id;
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === password2) {
      axios
        .post(`/createPassword/${id}`, {password, password2})
        .then((result) => {
          if (result.data.message === "passwords do not match") {
            Swal.fire("passwords do not match");
          } else if (result.data === "signup cookie set") {
            Swal.fire("your password is set up successfully");
            window.location.href = "/cand";
          }
        })
        .catch((err) => {
          console.log(err, "err hereeeeeeee");
        });
    } else {
      Swal.fire({
        position: "center",
        icon: "error",
        title: "Passwords don't matched!",
        showConfirmButton: true,
      });
    }
  };
  return (
    <div
      style={{
        padding: "20px",
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <form className="component" onSubmit={onSubmit}>
        <div className="col-md-6">
          <label>Enter your password</label>{" "}
          <div className="form-group">
            <br /> <br />
            <input
              className="form-control"
              type="password"
              name="pass"
              onChange={(e) => setPassword(e.target.value)}
            />
            <br /> <br />
            <label>Confirm password</label>
            <br /> <br />
            <input
              type="password"
              name="pass1"
              onChange={(e) => setPassword2(e.target.value)}
              className="form-control"
            />
            <br /> <br />
            <button className="btn-custom">submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePassword;
