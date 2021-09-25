import React from 'react';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  NavBtn,
  NavBtnLink
} from './NavbarElements';
import logo from '../../images/logo.svg'

const Navbar = () => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to='/'>
            <img src={logo} alt='logo' />
          </NavLink>
          <NavLink to='/'>
            <h1>Project Hub</h1>  
          </NavLink>
        </NavMenu>
        <Bars />
        <NavMenu>
          <NavLink to='/'>
            Home
          </NavLink>
          <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/contact'>
            Contact
          </NavLink>
          <NavBtn>
            <NavBtnLink to='/sign-in'>Sign In</NavBtnLink>
          </NavBtn>
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;