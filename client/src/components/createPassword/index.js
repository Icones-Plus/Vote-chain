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
    <div>
      <form onSubmit={onSubmit.bind(this)}>
        <div className="col-md-6">
          <label>Enter your password</label>{" "}
          <div className="form-group">
            <input
              className="form-control"
              type="password"
              onChange={onChange}
            />
            <label>Confirm password</label>
            <input
              type="password"
              onChange={onChange}
              className="form-control"
            />
            <button className="button">submit</button>
          </div>
        </div>
      </form>
    </div>
  );
}

export default CreatePassword;
