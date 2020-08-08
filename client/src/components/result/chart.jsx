import React, { Component } from "react";
import { Polar } from "react-chartjs-2";
class Chart extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            chartData: {
                labels: ['Ayman', 'Karam', 'Moh', 'Ahmed', 'Yasmin'],
                datasets: [
                    {
                        // label: 'Number of voters ',
                        data: [
                            100,
                            200,
                            210,
                            218,
                            300,
                            ],
                        backgroundColor: [
                            "#57C5C8",
                            "#ff0931",
                            'rgba(258,0,132,0.10)',
                            'rgba(200,0,50,0.20)',
                            'rgba(150,0,0,0.6)',
                            'rgba(150,0,0,0.6)',
                        ]
                    }
                ],
            }
        }
    }

    componentDidMount() {
        console.log(this.chartReference); // returns a Chart.js instance reference
    }
    render() {

        return (
            <div className="Chart">
              <hr />
              <hr />
              <hr />
              <hr />


                <Polar
                    data={this.state.chartData}
                    options={{}}
                > </Polar>
            </div>
        );
    }
}
export default Chart;