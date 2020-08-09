import React, { Component } from "react";
import NavResult from "../../components/result/index";
import Chart from "../../components/result/chart.jsx"
class Result extends Component {
    render() {
        return (
            <div className="Result">
                <NavResult />
                <Chart />
            </div>
        );
    }
}
export default Result;
