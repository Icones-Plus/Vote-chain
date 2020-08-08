import React, { useState } from 'react';
import axios from 'axios';

function CreatePassword(props) {
    const id = props.id;
    console.log(id, 'id mohkrgnjghggjjgndfsjvb');
    const [password, setPassword] = useState('');
    const [password2, setPassword2] = useState('');

    const onChange = function (e) {
        // console.log(idd, 'id mohkrgnjghggjjgndfsjvb');
        setPassword(e.target.value)
        setPassword2(e.target.value)
    }

    const onSubmit = function (e) {
        e.preventDefault();
        axios.get("/createPassword").then(res => {
            console.log("response hereeeeeee", res);
        }).catch(err => {
            console.log(err, "err hereeeeeeee")
        })
        if (password === password2) {
            axios.post('/createPassword', { password, id }).then(res => {
                console.log('submited', res);
            }).catch(err => {
                console.log('err: ', err);
            })
        } else {
            alert('passwords are not matching')
        }

    }
    return (
        <div>
            <form onSubmit={onSubmit}>
                <label>Enter your password</label>  <input type="password" onChange={onChange} />
                <label>Confirm password</label><input type="password" onChange={onChange} />
                <button>submit</button>
            </form>

        </div>

    )
}

export default CreatePassword;