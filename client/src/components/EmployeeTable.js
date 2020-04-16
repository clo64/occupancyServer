//import React from 'react';
import React, { Component } from 'react'
import { Table } from 'reactstrap';

export class EmployeeTable extends Component {
  constructor(){
      super();
      this.state = {
          alertFlag: "0"
      }
  }
  renderEmployees (room, index){
    return(
      <tr key={index}>
        <td>{room.firstName}</td>
        <td>{room.lastName}</td>
        <td>{room.RFID}</td>
      </tr>
    )
  }
  render(){
  return (
    <Table striped>
      <thead>
        <tr>
          <td>First Name</td>
          <td>Last Name</td>
          <td>RFID Tag#</td>
        </tr>
        {this.props.room.map(this.renderEmployees)}
      </thead>
    </Table>
  );
}
}

export default EmployeeTable;