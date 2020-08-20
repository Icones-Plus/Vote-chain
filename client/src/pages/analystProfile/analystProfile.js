import React, { Component } from 'react';
import axios from 'axios';
import JwtDecode from "jwt-decode";
import './analystProfile.css'
class AnalystProfile extends Component {
  state = {
    result1: []
  }

  componentDidMount(){
    console.log("I an=m hereeee in didmount")
    axios.get('/analyze').then(result => {
      console.log(result, "result hereeeeeeeeeeeeeeeeeeee")
      this.setState({
        result1: result.data.result
      })
    }).catch(err => {
      console.log('Err', err);
    })
  }

handlleClick = () => {
    axios.get("/logout")
      .then(() => {
        window.location.href = "/";
      })
      .catch((err) => {
        console.log(err);
      });
  };
handleEdit(){
  console.log('hi this is edit btn');
  window.location.href = '/analyst'
}
  render(){
    console.log('hi from render');
    // console.log(this.state.result1)
    const id = JwtDecode(document.cookie).id
    console.log(JwtDecode(document.cookie).id, 'id');
    console.log(JwtDecode(document.cookie), 'cookie');
    // const firstName = JwtDecode(document.cookie).firstName;
    return (
      <div>
      <div className="component">
      <div style={{ display: "flex", justifyContent: "space-between", boxShadow: "0px 3px 10px #888888" }}>
          <h1 style={{ fontFamily: "Roboto Condensed", color: "black", textAlign: "left", padding: "5px" }}><span style={{ fontSize: "30px" }} id="specialHeader">CC </span> Hello, {JwtDecode(document.cookie).firstName} !</h1>
          <button style={{ margin: "15px", "margin-right": "-1230px" }} type="submit" className="btn-custom" onClick={this.handleEdit.bind(this)}>Edit your profile</button>
          <button style={{ margin: "15px", "margin-left": "698px"  }} type="submit" className="btn-custom" onClick={this.handlleClick}>
              Log out
          </button>

      </div>
      </div>
      {this.state.result1.map(analyst => {
        console.log(analyst, 'analyst');
        console.log(analyst.picture, 'analyst.picture');
        if(analyst.id === id){

          return(
            <div>
            <div className="analystProfilePage__imgWrapper">
             <img src={analyst.picture} className="analystProfilePage__img"></img>
             </div>
             <h3>Bio:</h3>
             <div className="analystProfilePage__bio">
              <div>{analyst.bio}</div>
             </div>
             <h3>CV:</h3> <div>{analyst.cv}</div>
            </div>
          )
        }
      })}
        </div>


        // {this.state.result1.map(analyst =>{
        //   return (
        //     <div>
        //     <img src={analyst.picture}></img>
        //     </div>
        //   )
        // }
        // )}


    )
  }
}

export default AnalystProfile;
