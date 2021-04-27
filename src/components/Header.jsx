import React from 'react';
import { NavLink } from 'react-router-dom';
import pdf from '../files/resume.pdf';
import '../styles/header.css';

class Header extends React.Component {
  render() {
    return (
      <ul class='navbar'>
        <li>
          <NavLink className='navlink' to='/about'>About</NavLink>
        </li>
        <li>
          <a className="navlink" href="https://www.instagram.com/pmully94/" target="blank">Photo</a>
        </li>
        <li>
          <NavLink className='navlink' to='/software'>Software</NavLink>
        </li>
        <li>
          <a className="navlink" href={pdf} target="blank">Resume</a>
        </li>
      </ul>
    );
  }
}

export default Header;