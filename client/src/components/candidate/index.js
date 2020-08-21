import React, { useState } from "react";
// import React, {Component} from "react";
import "./style.css";
import Swal from "sweetalert2";
import axios from "axios";
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

  const combine = (e) => {
    sendCodeToMobile();
    setter(e.target.name).then((res) => {
      if (res) {
        confirm(res);
      }
    });
  };
  return page == null ? (
    <div>
      <div className="div">
        {props.data.map((item) => {
          return (
            <a className="card" >
              <div className="front" style={{ backgroundImage: "url(" + item.img + ")" }}>
                <img src={item.img} ></img>
                <hr />
                <h1 style={{ color: "white" }}>{item.name || "Loading.."}</h1>
              </div>
              <div className="back">
                <div>
                  <p style={{ color: "black", fontSize: "20px" }}>
                    {item.description}
                  </p>
                  <button
                    type="button"
                    className="button"
                    name={item.id}
                    onClick={combine}>Vote</button>
                  <hr />
                  <button
                    type="button"
                    className="button"
                    name={item.id}
                    onClick={move}>Candidate Profile</button>
                </div>
              </div>
            </a>
          );
        })}

      </div>
    </div>
  ) : (
      page
    );
}

export default Candidate;
