import React, { useState } from "react";
// import React, {Component} from "react";
import "./style.css";
import Swal from "sweetalert2";
import axios from "axios";
import JwtDecode from "jwt-decode";

function Candidate() {
  const [value, setValue] = useState(false);
  const [code, setCode] = useState("");
  const isVoted = () => {
    if (value === false) setValue(true);
    else {
      Swal.fire("You are already voted !!");
    }
  };
  const sendCodeToMobile = () => {
    return axios
      .get("/verfiy")
      .then((res) => {
        console.log("code is sent", res);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const confirm = () => {
    Swal.fire({
      title: "Submit your code",
      input: "text",
      inputAttributes: {
        autocapitalize: "off",
      },
      showCancelButton: true,
      confirmButtonText: "Vote",
      showLoaderOnConfirm: true,
      preConfirm: (code) => {
        setCode(code);
        axios({
          method: "post",
          url: "/confirm",
          data: {
            code,
          },
        })
          .then((response) => {
            if (response.data.succses) {
              isVoted();
            }
            // return response.json();
            else Swal.fire("You intered wrong code");
          })
          .catch((error) => {
            Swal.showValidationMessage(`Request failed: ${error}`);
          });
      },
      allowOutsideClick: () => !Swal.isLoading(),
    }).then((result) => {
      if (result.value) {
        Swal.fire({
          title: `${result.value.code}'s avatar`,
          imageUrl: result.value.avatar_url,
        });
      }
    });
  };
  const combine = () => {
    sendCodeToMobile();
    setTimeout(confirm(), 1000);
  };
  const handlleClick = () => {
    axios
      .get("/logout")
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };
  return (
    <div>
      <button type="submit" className="btn-custom" onClick={handlleClick}>
        Log out
      </button>
      <h1 style={{ color: "black", textAlign: "left" }}> Hello, {JwtDecode(document.cookie).firstName} !</h1>
      <div className="divv">
        <div class="thumbnail">
          <img src="https://i.ibb.co/88ZFzYC/01.jpg" alt="cand"></img>
          <h1>Ayman</h1>
          <button data-target="modal1" className="button" onClick={combine}>
            Vote
          </button>
        </div>
        <div class="thumbnail">
          <img src="https://i.ibb.co/C73t72L/02.jpg" alt="cand"></img>
          <h1>Ahmad</h1>
          <button type="button" className="button" onClick={combine}>
            Vote
          </button>
        </div>
        <div class="thumbnail">
          <img src="https://i.ibb.co/LJ5xyhR/05.jpg" alt="cand"></img>
          <h1>Yasmin</h1>
          <button type="button" className="button" onClick={combine}>
            Vote
          </button>
        </div>
        <div class="thumbnail">
          <img src="https://i.ibb.co/5nY7tbp/03.jpg" alt="cand"></img>
          <h1>Karam</h1>
          <button type="button" className="button" onClick={combine}>
            Vote
          </button>
        </div>
        <div class="thumbnail">
          <img src="https://i.ibb.co/PChQrmX/04.jpg" alt="cand"></img>
          <h1>Mohammad</h1>
          <button type="button" className="button" onClick={combine}>
            Vote
          </button>
        </div>
      </div>
    </div>
  );
}

export default Candidate;
