import React, { useState } from 'react';
import axios from 'axios';

function CreatePassword(props) {
    const id = props.id;
    console.log(id, 'id mohkrgnjghggjjgndfsjvb555555555testtesttest');
    console.log('heyhey');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const onChange = function (e) {
        // console.log(idd, 'id mohkrgnjghggjjgndfsjvb');
        setPassword(e.target.value)
        setPassword2(e.target.value)
      console.log(password);
      console.log(password2);

    }

    const onSubmit = (e) => {
      console.log(password, 'password');
      console.log(password2, 'password2');
      // console.log('here666');
        e.preventDefault();
        console.log(id, 'idyasmin');
        // console.log(useState(''), 'useState4444444444444');
        // console.log(this.props.id, 'this.props.id');
        if(password === password2){
        axios.post(`/createPassword/${id}`, { password }).then(res => {
            console.log("response hereeeeeee", res);
        }).catch(err => {
            console.log(err, "err hereeeeeeee")
        })}

        // if (password === password2) {
        //   console.log(id, 'idyasmin');
        //     axios.post('/createPassword', { password, id }).then(res => {
        //         console.log('submited', res);
        //     }).catch(err => {
        //         console.log('err: ', err);
        //     })
        // } else {
        //     alert('passwords are not matching')
        // }

    }
    return (
        <div>
            <form onSubmit={onSubmit.bind(this)}>
                <label>Enter your password</label>  <input type="password" onChange={onChange} />
                <label>Confirm password</label><input type="password" onChange={onChange} />
                <button>submit</button>
            </form>

        </div>

    )
}

export default CreatePassword;
