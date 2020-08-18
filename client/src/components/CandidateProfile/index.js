import React, {useState, useEffect} from "react";
import "./style.css";
import axios from "axios";

function CandidateProfile(props) {
  const id = props.id;
  const [data, setData] = useState([]);

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

// <div>
//   <div class="bor">
//     <img src={data[2]}></img>
//   </div>
//   <div class="div2">{data[0]}</div>
//   <div class="div3"></div>
//   <div class="div4">{data[1]}</div>
// </div>
// // <div className="test-parent">
// //   <div className="sidebar">test from side bar</div>
// //   <div className="content">test from content</div>
// // </div>

// <div>
//   <section id="packages">
//     <div class="box">
//       <img src="img/garden.jpg"></img>
//     </div>
//     <div class="box">
//       <div class="content">
//         <div>
//           <h2>OCEAN VIEW</h2>
//           <p>Marvellous ocean views.</p>
//           <a href="oceanView.html">Read More</a>
//         </div>
//       </div>
//       <img src="img/ocean.jpg"></img>
//     </div>
//   </section>
// </div>
