import React, { useState } from "react";
import "./style.css";
import Swal from "sweetalert2";
import axios from "axios";
import WebcamCapture from './../faceVerification/webCam'
import Popup from "reactjs-popup";
import CandidateProfile from "../CandidateProfile";

function Candidate(props) {
  const [value, setValue] = useState(false);
  const [code, setCode] = useState("");
  const [page, setPage] = useState(null);
  const isVoted = () => {
    if (value === false) setValue(true);
    else {
      Swal.fire("You are already voted !!");
    }
  };
  const sendCodeToMobile = () => {
    console.log('inse sent to mobile');
    return axios
      .get("/verfiy")
      .then((res) => {
        console.log("code is sent");
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const confirm = (id) => {
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

        if (code !== "") {
          axios({
            method: "post",
            url: "/confirm",
            data: {
              code: code,
              id: id,
            },
          })
            .then((response) => {
              if (response.data.succses) {
                isVoted();
                console.log("_-__--____--_---_----____--___--", response.data);
                Swal.fire(response.data.msg);
              }
              // return response.json();
              else Swal.fire(response.data.msg);
            })
            .catch((error) => {
              Swal.showValidationMessage(`Server failed`);
            });
        } else {
          Swal.fire("you have to enter your code");
        }
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

  function setter(id) {
    return new Promise((resolve) => {
      resolve(id);
    });
  }
  const move = (e) => {
    const id = e.target.name;
    setPage(<CandidateProfile id={id} />);
  };

  const combine = (x) => {
    console.log("In combine")
    sendCodeToMobile();
    setter(x).then((res) => {
      if (res) {
        confirm(res);
      }
    });
  };
  return page == null ? (
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
                <button
                  type="button"
                  className="button"
                  name={item.id}
                  onClick={move}
                >
                  Candidate Profile
              </button><br /><br /><br />
                <div>
                  <Popup
                    trigger={<button className="button"> Vote </button>}
                    modal
                    closeOnDocumentClick
                  >
                    <span> <WebcamCapture handleClick={combine} name={item.id} /> </span>
                  </Popup>
                </div>
              </div>
            )
          })
        }
      </div>
    </div>
  ) : (
      page
    );
}

export default Candidate;
