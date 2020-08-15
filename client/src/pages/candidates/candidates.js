import React from 'react';
import JwtDecode from "jwt-decode";
import Candidate from '../../components/candidate/index'
import axios from 'axios'


class Candidates extends React.Component {
    state = {
        data: []
    }
    handlleClick() {
        axios
            .get("/logout")
            .then(() => {
                window.location.href = "/";
            })
            .catch((err) => {
                console.log(err);
            });
    };

     componentDidMount() {
       axios.get("/getCands")
            .then(success => {
                 console.log("Candidates recieved", success)
                this.setState({
                    data: success.data
               })
            })
            .catch(err => {
                console.log("Error in retrieving candidates", err)
            })
    }
    render() {
        return (
            <div>
                <div style={{ display: "flex", justifyContent: "space-between", boxShadow: "0px 3px 10px #888888" }}>
                    <h1 style={{ fontFamily: "Roboto Condensed", color: "black", textAlign: "left", padding: "5px" }}><span style={{ fontSize: "30px" }} id="specialHeader">CC </span> Hello, {JwtDecode(document.cookie).firstName} !</h1>
                    <button style={{ margin: "15px" }} type="submit" className="btn-custom" onClick={this.handlleClick}>
                        Log out
                    </button>
                </div>
                <div>
                    <Candidate data={this.state.data} />
                </div>
            </div >
        )
    }
}

export default Candidates;
