import React, {useState} from "react";
import axios from "axios";

function CreatePassword(props) {
  const id = props.id;
  console.log(id, "id mohkrgnjghggjjgndfsjvb555555555testtesttest");
  console.log("heyhey");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const onChange = function (e) {
    console.log('this is another log');
    console.log(123 === 543, 'eval');
    // console.log(password === password2);
    console.log(password, 'password');
    console.log(confirmPassword, 'confirmPassword');
    setPassword(e.target.value);
    setConfirmPassword(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();
    // console.log('this is another log');
    // console.log(password, 'password yasmin');
    // console.log(password2, 'password2');
    if (password === confirmPassword) {
      axios
        .post(`/createPassword/${id}`, {password})
        .then((res) => {
          window.location.href = "/candidates";
        })
        .catch((err) => {
          console.log(err, "err hereeeeeeee");
        });
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
    <div style={{
      padding: "20px",
      display: "flex",
      flexDirection: "column",
      alignItems: "center"}}>
      <form className="component" onSubmit={onSubmit.bind(this)}>
        <div className="col-md-6">
          <label>Enter your password</label>{" "}
          <div className="form-group" >
            <br /> <br />
            <input
              className="form-control"
              type="password"
              onChange={onChange}
            /><br /> <br />
            <label>Confirm password</label><br /> <br />
            <input
              type="password"
              onChange={onChange}
              className="form-control"
            /><br /> <br />
            <button className="btn-custom">submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePassword;
