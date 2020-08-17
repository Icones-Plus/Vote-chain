import React, {useState} from "react";
import "./style.css";
import Axios from "axios";

function ForCandidate(props) {
  const [slogan, setSlogan] = useState("");
  const [campaign, setCampaign] = useState("");
  const id = props.id;

  const hundelSubmit = (e) => {
    e.preventDefault();
    const addToCandidate = {slogan, campaign};
    console.log("I am reach hereeeeeeeeeeeeeee dont worry");
    Axios.post(`/forCandidate/${id}`, addToCandidate)
      .then((res) => {
        console.log(res, "resss hereeeeee yala");
      })
      .catch((err) => {
        console.log(err, "err hereeeeee yala");
      });
  };

  return (
    <div>
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
