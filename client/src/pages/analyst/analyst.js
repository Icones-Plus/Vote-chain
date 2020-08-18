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
    this.setState({
      [e.target.name]: e.target.value
    })
  }

  handleClick(){
    // console.log(this.state.first_Name, 'yas');
    console.log(JwtDecode(document.cookie).id, 'cookie');
    console.log('white red blue');
    const analyst = {
      picture: this.state.picture,
      linkedIn: this.state.linkedIn,
      bio: this.state.bio,
      articles: this.state.articles,
    }
    axios.post('/analyze/:id', analyst).then(result => {
      if(result.data.success){
        Swal.fire('your info has been updated')
      }
                            console.log(result.data, 'resultjjjjjjj');
                          }).catch(err => {
                            console.log('Err', err);
                          })
}

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
  render(){
    return (
      <div className="component">
      <div style={{ display: "flex", justifyContent: "space-between", boxShadow: "0px 3px 10px #888888" }}>
          <h1 style={{ fontFamily: "Roboto Condensed", color: "black", textAlign: "left", padding: "5px" }}><span style={{ fontSize: "30px" }} id="specialHeader">CC </span> Hello, {JwtDecode(document.cookie).firstName} !</h1>
          <button style={{ margin: "15px" }} type="submit" className="btn-custom" onClick={this.handlleClick}>
              Log out
          </button>
      </div>

        <form>
          <label>add your picture</label>
          <input type="text" name="picture" onChange={this.handleChange.bind(this)} /> <br/><br/>

          <label>upload your cv</label>
          <input type="text" name="cv" onChange={this.handleChange.bind(this)} />
          <button onClick={this.handleUploadClick.bind(this)} className="MuiButton-label">upload</button>
          <br/><br/>

          <label>add a link to your linkedIn</label>
          <input type="text" name="linkedIn" onChange={this.handleChange.bind(this)}/> <br/><br/>

          <label>add a bio</label>
          <textarea type="text" name="bio" onChange={this.handleChange.bind(this)}/> <br/><br/>

          <label>add article links</label>
          <input type="text" name="articles" onChange={this.handleChange.bind(this)}/> <br/><br/>

          <button className="MuiButton-label" onClick={this.handleClick.bind(this)}>submit</button>
        </form>
      </div>
    )
  }
}

export default Analyst;
