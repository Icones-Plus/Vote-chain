import React,  { Component } from 'react';

class Analyst extends Component {
  render(){
    return (
      <div>
        <form>
          <label>first name</label>
          <input type="text"/>

          <label>last name</label>
          <input type="text"/>

          <label>add your picture</label>
          <input type="text"/>

          <label>add your cv</label>
          <input type="text"/>

          <label>add a link to your linkedIn</label>
          <input type="text" />

          <label>add a bio</label>
          <textarea type="text" />

          <label>add article links</label>
          <input type="text" />

          <button>submit</button>
        </form>
      </div>
    )
  }
}

export default Analyst;
