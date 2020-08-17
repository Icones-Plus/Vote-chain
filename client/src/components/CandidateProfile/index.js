import React, {useState, useEffect} from "react";
import "./style.css";
import axios from "axios";

function CandidateProfile(props) {
  const id = props.id;

  useEffect(() => {
    console.log("hellllllllllllllllllllll");
    console.log(id, "idddddddddddddddddddddddd");
    axios
      .get(`/candidateProfile/${id}`)
      .then((res) => {
        console.log("hiiiiiii from axsios");
        console.log(res, "ressssssss hereeeeeeeeee");
      })
      .catch((err) => {
        console.log(err);
      });
  });
  return (
    <div>
      <div class="bor"></div>
      <div class="div2"></div>
      <div class="div3"></div>
      <div class="div4"></div>
    </div>
  );
}

export default CandidateProfile;
