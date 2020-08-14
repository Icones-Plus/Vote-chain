import React, {useState} from "react";
import "./style.css";
import Axios from "axios";

function ForCandidate() {
  const [slogan, setSlogan] = useState("");
  const [campaign, setCampaign] = useState("");

  // const hundleChange = (e) => {
  //   setSlogan(e.target.value);
  //   setCampaign(e.target.value);
  //   console.log(slogan, "handleChange slooooooooooooo");
  //   console.log(campaign, "handleChange caaaaaaaaaaaaaaaaap");
  // };

  const onSubmit = (e) => {
    // e.preventDefault();
    const addToCandidate = {slogan, campaign};
    console.log("I am reach hereeeeeeeeeeeeeee dont worry");
    Axios.post("/forCandidate", addToCandidate)
      .then((res) => {
        console.log(res, "resss hereeeeee yala");
      })
      .catch((err) => {
        console.log(err, "err hereeeeee yala");
      });
  };

  return (
    <div>
      <form onSubmit={onSubmit.bind(this)}>
        <label>enter your slogan</label>
        <div class="slogan">
          <input
            type="text"
            placeholder="Add your slogn"
            name="slogan"
            value={slogan}
            onChange={(e) => setSlogan(e.target.value)}
          ></input>
        </div>
        <label>enter your compaign</label>
        <div class="campaign">
          <input
            type="text"
            placeholder="Add your campaign"
            value={campaign}
            name="campaign"
            onChange={(e) => e.target.value}
          ></input>
        </div>
      </form>
    </div>
  );
}

export default ForCandidate;
