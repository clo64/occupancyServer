//import React, { useState } from 'react';
import React, { Component } from 'react'
import {
  Collapse,
  Navbar,
  NavbarToggler,
  NavbarBrand,
  Nav,
  NavItem,
  NavLink,
  UncontrolledDropdown,
  DropdownToggle,
  DropdownMenu,
  DropdownItem,
  NavbarText
} from 'reactstrap';

export class OccupancyNav extends Component {
  constructor(){
      super();
      this.state = {
          isOpen: false
      }
    }
  toggle() {
    this.state.isOpen = !this.state.isOpen;
  }
  alert(alertFlag){
    console.log(alertFlag);
    console.log("Is this called?");
      if(alertFlag == "1"){
        return <NavItem><NavLink style = {alertLinkStyle}>ALERT</NavLink></NavItem>
      }
      else{
          return 
      }
  }
  render() {
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={this.toggle()} />
        <Collapse isOpen={this.state.isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Floor View</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Employees</NavLink>
            </NavItem>
             {this.alert(this.props.SendAlertFlag)}
          </Nav>
          <NavbarText>Occupancy Tracker</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}
}


const alertLinkStyle = {
    color: '#FFFFFF',
    backgroundColor: '#f44336',
    borderRadius: '10px'
}

export default OccupancyNav;