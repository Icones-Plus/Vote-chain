import React, {useState} from "react";
import "./style.css";
import Axios from "axios";
import JwtDecode from "jwt-decode";

function ForCandidate() {
  const [slogan, setSlogan] = useState("");
  const [campaign, setCampaign] = useState("");
  const id = JwtDecode(document.cookie).id;
 
  const handlleClick = () => {
    Axios.get("/logout")
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const hundelSubmit = (e) => {
    e.preventDefault();
    const addToCandidate = {slogan, campaign};
     Axios.post(`/forCandidate/${id}`, addToCandidate)
      .then((res) => {
       })
      .catch((err) => {
        console.log(err, "err");
      });
  };

  return (
    <div>
      <div style={{backgroundColor: "rgba(10, 125, 255, 0.7)"}}></div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          boxShadow: "0px 3px 10px rgb(135, 206, 250)",
          background: "white",
        }}
      >
        <h1
          style={{
            fontFamily: "Roboto Condensed",
            color: "black",
            textAlign: "left",
            padding: "5px",
          }}
        >
          <span style={{fontSize: "30px"}} id="specialHeader">
            CC{" "}
          </span>{" "}
          Hello, {JwtDecode(document.cookie).firstName} !
        </h1>
        <button
          style={{margin: "15px"}}
          type="submit"
          className="btn-custom"
          onClick={handlleClick}
        >
          Log out
        </button>
      </div>
      <form className="forcandy" onSubmit={hundelSubmit}>
        {/* <label>enter your slogan</label> */}
        <div class="slogan">
          <textarea
            name="slogan"
            id="descriptionCan"
            className="form-control"
            rows="4"
            placeholder="Add your slogn"
            required
            onChange={(e) => setSlogan(e.target.value)}
          ></textarea>
        </div>
        <label></label>
        <div class="campaign">
          <textarea
            name="campaign"
            id="descriptionCan"
            className="form-control"
            rows="4"
            placeholder="Add your campaign"
            required
            onChange={(e) => setCampaign(e.target.value)}
          ></textarea>
        </div>
        <div class="url1">
          <input
            type="url"
            id="ImgUrlCan"
            className="form-control"
            placeholder="Image Url"
            required="required"
            name="img"
          />
        </div>

        <button class="btn1">submit</button>
      </form>
    </div>
  );
}

export default ForCandidate;
