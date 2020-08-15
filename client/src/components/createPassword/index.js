import React, { useState } from "react";
import axios from "axios";
import Swal from 'sweetalert2'


function CreatePassword(props) {
  const id = props.id;
  const [password, setPassword] = useState("");
  const [password2, setPassword2] = useState("");
  console.log(password)
  console.log(password2)


  const onChange = function (e) {
    setPassword(e.target.value);
    setPassword2(e.target.value);
  };

  const onSubmit = (e) => {
    e.preventDefault();

    if (password === password2) {
      axios
        .post(`/createPassword/${id}`, { password })
        .then((res) => {
          Swal.fire({
            position: 'center',
            icon: 'success',
            title: 'Welcome',
            showConfirmButton: false,
            timer: 1500
          })
          setTimeout(() => {
            window.location.href = "/candidates";
          }, 1100)
        })
        .catch((err) => {
          console.log(err, "err hereeeeeeee");
        });
    } else {
      Swal.fire({
        position: 'center',
        icon: 'error',
        title: "Passwords don't matched!",
        showConfirmButton: true,
      })
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
      alignItems: "center"
    }}>
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
