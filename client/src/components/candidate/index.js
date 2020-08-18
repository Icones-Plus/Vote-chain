import React, {useState} from "react";
// import React, {Component} from "react";
import "./style.css";
import Swal from "sweetalert2";
import axios from "axios";

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
                alert("done");
              }
              // return response.json();
              else Swal.fire("You intered wrong code!");
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

  const combine = (e) => {
    sendCodeToMobile();
    setter(e.target.name).then((res) => {
      if (res) {
        confirm(res);
      }
    });
  };
  return (
    <div>
      <div className="div">
        {props.data.map((item) => {
          return (
            <div
              className="thumbnail"
              style={{backgroundColor: "rgb(255, 255, 255)", padding: "70px"}}
            >
              <img src={item.img} alt="image"></img>
              <h1 style={{color: "black"}}>{item.name || "Loading.."}</h1>
              <p style={{color: "black", fontSize: "20px"}}>
                {item.description}
              </p>
              <button
                type="button"
                className="button"
                name={item.id}
                onClick={combine}
              >
                Vote
              </button>
            </div>
          );
        })}
      </div>
    </div>
  );
}

export default Candidate;
