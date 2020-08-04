import React, {useState} from "react";
import "./style.css";

function Candidate() {
  const [value, setValue] = useState(false);

  return (
    <div className="divv">
      <div class="div1">
        <h1>candidate1</h1>
        {/* <input type="radio" id="male" name="gender" value="male"></input> */}
      </div>
      <div class="div2">
        <h1>candidate2</h1>
        {/* <input type="radio" id="male1" name="gender" value="male"></input> */}
      </div>
      <div class="div3">
        <h1>candidate3</h1>
        {/* <input type="radio" id="male2" name="gender" value="male"></input> */}
      </div>
      <div class="div4">
        <h1>candidate4</h1>
      </div>
      <div class="div5">
        <h1>candidate5</h1>
      </div>
    </div>
  );
}

export default Candidate;
