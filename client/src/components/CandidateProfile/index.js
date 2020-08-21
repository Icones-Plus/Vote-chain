import React, { useState, useEffect } from "react";
import "./style.css";
import axios from "axios";
import Candidate from "../../pages/candidates/candidates";

function CandidateProfile(props) {
  const id = props.id;
  const [data, setData] = useState([]);
  const [component, setComponent] = useState(null);
  useEffect(() => {
    axios
      .get(`/candidateProfile/${id}`)
      .then((res) => {
        setData(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  }, []);
  const move = () => {
    // setComponent(<Candidate />);
    window.location.href = "/cand";
  };
  if (component == null) {
    return (
      <div>
        <div class="bor">
          <img id="img" src={data[2]}></img>
        </div>
        <div class="div2">{data[0]}</div>
        <div class="div3"></div>
        <div style={{ display: "flex" }}>

          <div class="div4">
            <div style={{ backgroundColor: "rgb(240, 248, 255)" }}>
              {data[1]}
            </div>
            <br/><br/><br/><br/>
            <button className="button" onClick={move}> Go back </button>
          </div>
        </div>
      </div>
    );
  } else {
    return component;
  }
}
export default CandidateProfile;
