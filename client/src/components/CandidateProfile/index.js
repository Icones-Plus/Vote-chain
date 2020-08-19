import React, {useState, useEffect} from "react";
import "./style.css";
import axios from "axios";

function CandidateProfile(props) {
  const id = props.id;
  const [data, setData] = useState([]);

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
  return (
    <div>
      <div class="bor">
        <img id="img" src={data[2]}></img>
      </div>
      <div class="div2">{data[0]}</div>
      {/* <div class="div3"></div> */}
      <div class="div4">{data[1]}</div>
    </div>
  );
}
export default CandidateProfile;
