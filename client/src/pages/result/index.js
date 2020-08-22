import React, {Component} from "react";
import NavResult from "../../components/result/index";
import Chart from "../../components/result/chart.jsx";
import axios from "axios";

class Result extends Component {
  state = {
    data: null,
  };
  componentDidMount() {
    axios
      .get("/getResult")
      .then((success) => {
        console.log("success in the result retrive", success.data);
        this.setState({
          data: success.data,
        });
      })
      .catch((err) => {
        console.log("Error in retrieving result", err);
      });
  }
  render() {
    const data = this.state.data || {};
    console.log("chata...", data);
    return (
      <div className="Result">
        <NavResult />
        <Chart data={data} />
      </div>
    );
  }
}
export default Result;
