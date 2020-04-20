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
        <td>{room.Employee_Name}</td>
        <td>{room.RFID_Number}</td>
      </tr>
    )
  }
  render(){
  return (
    <Table striped>
      <thead>
        <tr>
          <td>Room: 1</td>
        </tr>
        <tr>
          <td>Name Name</td>
          <td>RFID Tag#</td>
        </tr>
        {this.props.roomDataPass.map(this.renderEmployees)}
      </thead>
    </Table>
  );
}
}

export default EmployeeTable;