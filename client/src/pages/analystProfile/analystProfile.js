import React, { Component } from 'react';
import axios from 'axios';

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
  render(){
    console.log(this.state.result1)
    return (
      <div>
      {this.state.result1.map(analyst =>{
        return (
          <div>
          <h1>{analyst.first_Name}</h1>
          </div>
        )
      }
      )}
      </div>
    )
  }
}

export default AnalystProfile;
