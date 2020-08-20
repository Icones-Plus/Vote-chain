import React,  { Component } from 'react';
import JwtDecode from "jwt-decode";
import axios from 'axios';
import Button from '@material-ui/core/Button'
import './analyst.css'
import Swal from "sweetalert2";
class Analyst extends Component {
  state = {
    picture: "",
    cv: "",
    linkedIn: "",
    bio: "",
    articles: []
  }

  handleChange(e){
    console.log("i am working")
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick(e){
    console.log('hi');
    e.preventDefault();
    console.log(JwtDecode(document.cookie), 'cookie');
    // console.log(this.state.first_Name, 'yas');
    const id = JwtDecode(document.cookie).id;
    console.log(id, 'id99999');
    // console.log(JwtDecode(document.cookie).id, 'cookie');
    console.log('white red blue');
    const analyst = {
      picture: this.state.picture,
      linkedIn: this.state.linkedIn,
      bio: this.state.bio,
      articles: this.state.articles,
    }
    axios.post(`/analyze/${id}`, analyst).then(result => {
      console.log(result, 're5555555');
      // if(result.data.success){
      //   Swal.fire('your info has been updated')
      // }
      //                       console.log(result.data, 'resultjjjjjjj');
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

handleUploadClick(e){
  e.preventDefault();
  // console.log('upload licicked!');
  var cv = {
    cv: this.state.cv
  }
  let id = JwtDecode(document.cookie).id
  axios.post(`/uploadCV/${id}`, cv).then(result => {
    console.log(result);
  }).catch(err => {
    console.log('Err', err);
  })
}

handleProfileButtonClick(){
  // e.preventDefault();
  console.log('hi this is profile btn');
  window.location.href = '/analyst-profile'
}
  render(){
    console.log('hiiiiiii55555');
    return (

      <div>
      <div style={{ display: "flex", justifyContent: "space-between", boxShadow: "0px 3px 10px #888888" }}>
          <h1 style={{ fontFamily: "Roboto Condensed", color: "black", textAlign: "left", padding: "5px" }}><span style={{ fontSize: "30px" }} id="specialHeader">CC </span> Hello, {JwtDecode(document.cookie).firstName} !</h1>
          <button style={{ margin: "15px", "margin-right": "-1333px" }} type="submit" className="btn-custom" onClick={this.handleProfileButtonClick.bind(this)}>Go to your profile</button>
          <button style={{ margin: "15px", "margin-left": "698px" }} type="submit" className="logout-btn btn-custom" onClick={this.handlleClick}>
              Log out
          </button>


      </div>

      <div className="form-wrapper">
        <form>
        <div className="input-container">
          <label className="analystPage__label">add your picture</label>
          <input type="text" name="picture" onChange={this.handleChange.bind(this)} className="analystProfilePage__input"/> <br/><br/>

          <label className="analystPage__label">upload your cv</label>
          <input type="text" name="cv" onChange={this.handleChange.bind(this)} className="analystProfilePage__input"/>

          <br/><br/>

          <label className="analystPage__label">add a link to your linkedIn</label>
          <input type="text" name="linkedIn" onChange={this.handleChange.bind(this)} className="analystProfilePage__input"/> <br/><br/>

          <label className="analystPage__label">add a bio</label>
          <textarea type="text" name="bio" onChange={this.handleChange.bind(this)} className="analystProfilePage__input"/> <br/><br/>

          <label className="analystPage__label">add article links</label>
          <input type="text" name="articles" onChange={this.handleChange.bind(this)} className="analystProfilePage__input"/> <br/><br/>

          <button type="submit" className="btn-custom analystProfilePage__btn" onClick={this.handleClick.bind(this)}>submit</button>
          </div>
        </form>
      </div>
    </div>
    )
  }
}

export default Analyst;
