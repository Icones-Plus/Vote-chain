import React, { useState } from "react";
import "./style.css";
import Swal from "sweetalert2";
import axios from "axios";
import WebcamCapture from './../faceVerification/webCam'
import Popup from "reactjs-popup";

function Candidate(props) { 
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
            else Swal.fire("You entered wrong code");
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
    <div>
      <div className="div">
        {
          props.data.map(item => {
            return (
              <div className="thumbnail" style={{ backgroundColor: "rgb(255, 255, 255)", padding: "70px" }}>
                <img src={item.img} alt="image"></img>
                <h1 style={{ color: "black" }}>{item.name || "Loading"}</h1>
                <p style={{ color: "black", fontSize: "20px" }}>
                  {item.description}
                </p>
                <div>
                  <Popup
                    trigger={<button className="button"> Vote </button>}
                    modal
                    closeOnDocumentClick
                  >
                    <span> <WebcamCapture handleClick={combine} /> </span>
                  </Popup>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  );
}

export default Candidate;
