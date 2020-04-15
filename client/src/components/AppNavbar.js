import React, { useState } from 'react';
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

const OccupancyNav = (props) => {
  const [isOpen, setIsOpen] = useState(false);

  const toggle = () => setIsOpen(!isOpen);

  let state = {
      alertFlag: "1"
  }
  function alert(alertFlag){
      if(alertFlag == "1"){
        return <NavItem><NavLink style = {alertLinkStyle}>ALERT</NavLink></NavItem>
      }
      else{
          return 
      }
  }
  return (
    <div>
      <Navbar color="light" light expand="md">
        <NavbarToggler onClick={toggle} />
        <Collapse isOpen={isOpen} navbar>
          <Nav className="mr-auto" navbar>
            <NavItem>
              <NavLink>Floor View</NavLink>
            </NavItem>
            <NavItem>
              <NavLink>Employees</NavLink>
            </NavItem>
             {alert(state.alertFlag)}
          </Nav>
          <NavbarText>Occupancy Tracker</NavbarText>
        </Collapse>
      </Navbar>
    </div>
  );
}

const alertLinkStyle = {
    color: '#FFFFFF',
    backgroundColor: '#f44336',
    borderRadius: '10px'
}

export default OccupancyNav;