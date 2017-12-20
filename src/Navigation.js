import React, { Component } from 'react';

// import components from reactstrap
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
 } from 'reactstrap';

// import NavLink component from react-router-dom
// allows for page change without refresh
import { NavLink } from 'react-router-dom';

// export component named Navigation
export default class Navigation extends Component {
  // initializes component to manage variables
  constructor(props) {
    // initialize properties for component to utilize
    super(props);
    // bind toggle function to component so it can modify the state
    // any function to change variables must be bound
    this.toggle = this.toggle.bind(this);
    // set state variable for component to use privately
    // initialize isOpen to false
    this.state = {
      isOpen: false
    };
  }

  // open or close navigation menu
  toggle() {
    // forcing state variable to update
    // setState is a function of React, allows state variable changes
    this.setState({
      isOpen: !this.state.isOpen
    });
  }

  // renders elements for the component
  // anything inside the div is exported
  render() {
    return (
      <div>
        {/* start nav, set background to dark and text to match dark */}
        <Navbar color="dark" dark expand="md">
          {/* NavbarBrand is equal to regular bootstrap navbar brand */}
          <NavbarBrand tag={NavLink} to={"/"}>Custom Tool</NavbarBrand>
          {/* onClick, find and execute the function toggle if it is bound */}
          <NavbarToggler onClick={this.toggle} />
          {/* expands to show content if var isOpen is true */}
          <Collapse isOpen={this.state.isOpen} navbar>
            <Nav className="mr-auto" navbar>
              {/* to={} is direct react link to another view */}
              <NavItem>
                <NavLink className="nav-link nav-item" to={"/all/"}>List All</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link nav-item" to={"/lathes/"}>List Lathes</NavLink>
              </NavItem>
              <NavItem>
                <NavLink className="nav-link nav-item" to={"/mills/"}>List Mills</NavLink>
              </NavItem>
            </Nav>
          </Collapse>
        </Navbar>



      </div>
    );
  }
}
