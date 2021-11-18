import React from 'react';
import { Dropdown } from 'react-bootstrap';
import {
  Nav,
  NavLink,
  Bars,
  NavMenu,
  DropdownElement
} from './NavbarElements';
import logo from '../../assets/logo.svg'

const Navbar = (props) => {
  return (
    <>
      <Nav>
        <NavMenu>
          <NavLink to={props.route1}>
            <img src={logo} alt='logo' />
          </NavLink>
          <NavLink to={props.route1}>
            <h1>Project Hub</h1>  
          </NavLink>
        </NavMenu>
        <Bars />
        <NavMenu>
          <NavLink to={props.route1}>
            {props.tab1}
          </NavLink>
          <NavLink to={props.route2}>
            {props.tab2}
          </NavLink>
          <NavLink to={props.route3}>
            {props.tab3}
          </NavLink>
          {/* <NavLink to='/about'>
            About
          </NavLink>
          <NavLink to='/contact'>
            Contact
          </NavLink> */}
          {props.role === 'unassigned' ?
            (<Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-button-dark-example1">
                Sign In
              </Dropdown.Toggle>

              <Dropdown.Menu variant="dark">
                <DropdownElement to='/student/sign-in'>Student SignIn</DropdownElement>
                <DropdownElement to='/teacher/sign-in'>Teacher SignIn</DropdownElement>
              </Dropdown.Menu>
            </Dropdown>)
            : (<Dropdown>
              <Dropdown.Toggle variant="primary" id="dropdown-button-dark-example1">
                Sign Out
              </Dropdown.Toggle>
            </Dropdown>
            )
        }
        </NavMenu>
      </Nav>
    </>
  );
};

export default Navbar;