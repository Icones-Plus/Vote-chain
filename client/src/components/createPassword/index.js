import React, { useState } from "react";
import axios from "axios";

import Swal from "sweetalert2";


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

        .post(`/createPassword/${id}`, {password, password2})
        .then(result => {
          console.log(result, 'res3433222212sddsdfrewdfrewdweds');
          if(result.data.message === "passwords do not match"){
            Swal.fire("passwords do not match");
          } else if(result.data === 'signup cookie set'){
            Swal.fire("your password is set up successfully");
             window.location.href = "/candidates";
          }
     

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


//
// import React, {useState} from "react";
// import axios from "axios";
//
// function CreatePassword(props) {
//   const id = props.id;
//   console.log(id, "id mohkrgnjghggjjgndfsjvb555555555testtesttest");
//   console.log("heyhey");
//   const [password, setPassword] = useState("");
//   const [confirmPassword, setConfirmPassword] = useState("");
//
//   const onChange = function (e) {
//     console.log('this is another log');
//     console.log(123 === 543, 'eval');
//     // console.log(password === password2);
//     console.log(password, 'password');
//     console.log(confirmPassword, 'confirmPassword');
//     setPassword(e.target.value);
//     setConfirmPassword(e.target.value);
//   };
//
//   const onSubmit = (e) => {
//     e.preventDefault();
//     // console.log('this is another log');
//     // console.log(password, 'password yasmin');
//     // console.log(password2, 'password2');
//     if (password === confirmPassword) {
//       axios
//         .post(`/createPassword/${id}`, {password, confirmPassword})
//         .then((res) => {
//           window.location.href = "/candidates";
//         })
//         .catch((err) => {
//           console.log(err, "err hereeeeeeee");
//         });
//     }
//
//     // if (password === password2) {
//     //   console.log(id, 'idyasmin');
//     //     axios.post('/createPassword', { password, id }).then(res => {
//     //         console.log('submited', res);
//     //     }).catch(err => {
//     //         console.log('err: ', err);
//     //     })
//     // } else {
//     //     alert('passwords are not matching')
//     // }
//   };
//   return (
//     <div style={{
//       padding: "20px",
//       display: "flex",
//       flexDirection: "column",
//       alignItems: "center"}}>
//       <form className="component" onSubmit={onSubmit.bind(this)}>
//         <div className="col-md-6">
//           <label>Enter your password</label>{" "}
//           <div className="form-group" >
//             <br /> <br />
//             <input
//               className="form-control"
//               type="password"
//               onChange={onChange}
//             /><br /> <br />
//             <label>Confirm password</label><br /> <br />
//             <input
//               type="password"
//               onChange={onChange}
//               className="form-control"
//             /><br /> <br />
//             <button className="btn-custom">submit</button>
//           </div>
//         </div>
//       </form>
//     </div>
//   );
// }
//
// export default CreatePassword;
