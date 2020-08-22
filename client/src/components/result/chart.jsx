import React, {Component} from "react";
import {Polar} from "react-chartjs-2";
class Chart extends React.Component {
  // componentDidMount() {
  //   console.log(this.chartReference); // returns a Chart.js instance reference
  // }
  render() {
    var chartData = {
      labels: Object.keys(this.props.data) || [],
      datasets: [
        {
          // label: 'Number of voters ',
          data: Object.values(this.props.data) || [],
          backgroundColor: [
            "#57C5C8",
            "#ff0931",
            "rgba(258,0,132,0.10)",
            "rgba(200,0,50,0.20)",
            "rgba(150,0,0,0.6)",
            "rgba(150,0,0,0.6)",
          ],
        },
      ],
    };
    return (
      <div className="Chart">
        <hr />
        <hr />
        <hr />
        <hr />

        <Polar data={chartData} options={{}}>
          {" "}
        </Polar>
      </div>
    );
  }
}
export default Chart;
