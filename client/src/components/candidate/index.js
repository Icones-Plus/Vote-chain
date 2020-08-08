import React, {useState} from "react";
// import React, {Component} from "react";
import "./style.css";
import Swal from "sweetalert2";
import axios from "axios";

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
      .then(() => {
        console.log("code is sent");
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
        return axios
          .post("/confirm", {code})
          .then((response) => {
            console.log(code);
            if (response.succses) {
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

  return (
    <div className="divv">
      <div class="div1">
        <h1>candidate1</h1>
      </div>
      <button data-target="modal1" id="buttom1" onClick={combine}>
        Vote
      </button>
      <div class="div2">
        <h1>candidate2</h1>
      </div>
      <button type="button" id="buttom2" onClick={combine}>
        Vote
      </button>
      <div class="div3">
        <h1>candidate3</h1>
      </div>
      <button type="button" id="buttom3" onClick={combine}>
        Vote
      </button>
      <div class="div4">
        <h1>candidate4</h1>
      </div>
      <button type="button" id="buttom4" onClick={combine}>
        Vote
      </button>
      <div class="div5">
        <h1>candidate5</h1>
      </div>
      <button type="button" id="buttom5" onClick={combine}>
        Vote
      </button>
    </div>
  );
}

export default Candidate;
