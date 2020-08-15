import React, {useState} from "react";
import axios from "axios";
import Swal from "sweetalert2";
function CreatePassword(props) {
  const id = props.id;
  console.log(id, "id mohkrgnjghggjjgndfsjvb555555555testtesttest");
  console.log("heyhey");
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");

  const onChange = function (e) {
    setPassword(e.target.value);
    setPassword2(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === password2) {
      axios
        .post(`/createPassword/${id}`, {password})
        .then((res) => {
          window.location.href = "/candidates";
        })
        .catch((err) => {
          console.log(err, "err hereeeeeeee");
        });
    } else {
      Swal.fire("the password not matched");
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
