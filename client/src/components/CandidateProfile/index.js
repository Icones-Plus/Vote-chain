import React, {useState, useEffect} from "react";
import "./style.css";
import axios from "axios";
import Candidate from "../../pages/candidates/candidates";

function CandidateProfile(props) {
  const id = props.id;
  const [data, setData] = useState([]);
  const [component, setComponent] = useState(null);
  console.log("helllllllllllllllllllllllllllllllllllllllllllllll");
  useEffect(() => {
    console.log("hellllllllllllllllllllll");
    console.log(id, "idddddddddddddddddddddddd");
    axios
      .get(`/candidateProfile/${id}`)
      .then((res) => {
        console.log("hiiiiiii from axsios");
        console.log(res, "ressssssss hereeeeeeeeee");
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
        <div class="div4">{data[1]}</div>
        <button onClick={move}></button>
      </div>
    );
  } else {
    return component;
  }
}
export default CandidateProfile;
