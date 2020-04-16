/*
This is hierarchicaly the "top" level for the floor view.
State should be updated via the getData function and axios 
backend requests. 
*/
import React, { Component } from 'react'
import FloorPlanSvg from './FloorPlanSvg';
import ThermalImageCard from './ThermalImageCard';
import EmployeeTable from './EmployeeTable';
import FirstFloorOverlay from './FirstFloorOverlay'
import { Container, Row, Col } from 'reactstrap';
const axios = require('axios').default;

export class FloorView extends Component {
    constructor(){
        super();
        this.state = {
            alertFlag: "0",
            thermalImageURL: "https://occupancy-detection.herokuapp.com/public/thermal.png",
            roomData: [{
                Employee_Name: "",
                RFID_Number: ""
            },
             {
                Employee_Name: "",
                RFID_Number: ""
            }]
        }
    }
    componentDidMount(){
        setInterval(this.getData, 8000);
    }

    getData = () => {
        //Let's get outselves some data to refresh, oi!
        axios({
            method: 'post',
            url: 'http://localhost:5000/api/rfiddata/getroomdata',
            data: {
                Room_Number: "2",
                Floor: "1"
            }
        }).then((peopleInRoom) => {
            //console.log(peopleInRoom.data[0].Employee_Name);
            this.setState({
                roomData: [...peopleInRoom.data, peopleInRoom.data],
                thermalImageURL: "https://occupancy-detection.herokuapp.com/public/thermal.png"
            });
        })
        //Also update the Thermal Image card by passing it the URL again.. Going to look choppy?
        
    }

    render() {
        return (
        <container>
            <Row>
                <Col>
                    <FirstFloorOverlay></FirstFloorOverlay>
                    <FloorPlanSvg></FloorPlanSvg>
                 </Col>
                 <Col sm='3'>
                    <ThermalImageCard/>
                 </Col>
                 <Col >
                 </Col>
            </Row>
            <Row>
                <Col style = { employeeTableOffset }>
                <EmployeeTable roomDataPass={this.state.roomData}></EmployeeTable>
                </Col>
            </Row>
        </container>
        )
    }
}

const employeeTableOffset = {
    left: '20px'
}

const upper = {
    top: '10px'
}




export default FloorView
