import React, {useState} from "react";
import axios from "axios";

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
          window.location.href = "/cand";
        })
        .catch((err) => {
          console.log(err, "err hereeeeeeee");
        });
    } else {
      alert("the password not matched");
    }

    // if (password === password2) {
    //   console.log(id, 'idyasmin');
    //     axios.post('/createPassword', { password, id }).then(res => {
    //         console.log('submited', res);
    //     }).catch(err => {
    //         console.log('err: ', err);
    //     })
    // } else {
    //     alert('passwords are not matching')
    // }
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
      <form className="component" onSubmit={onSubmit.bind(this)}>
        <div className="col-md-6">
          <label>Enter your password</label>{" "}
          <div className="form-group">
            <br /> <br />
            <input
              className="form-control"
              type="password"
              name="pass"
              onChange={onChange}
            />
            <br /> <br />
            <label>Confirm password</label>
            <br /> <br />
            <input
              type="password"
              name="pass1"
              onChange={onChange}
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
