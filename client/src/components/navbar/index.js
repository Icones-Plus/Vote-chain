import React from 'react';
import logo from './2.png';
import './style.css'
class Navbar extends React.Component {
    render() {
        return (
            <div>
                <nav>
                    <a href='/home'><img src={logo} /></a>
                    <ul>
                        <li> <a href='/home'>Home</a> </li>
                        <li> <a href='/about'>About</a> </li>
                        <li> <a href='/contact'>Contact Us</a> </li>
                        <li> <a href='/signup'>Sign up</a> </li>
                    </ul>
                </nav>
            </div>
        )
    }

}

export default Navbar;