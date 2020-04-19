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
import AlertBar from './AlertBar';
const axios = require('axios').default;

export class FloorView extends Component {
    constructor(){
        super();
        this.state = {
            thermalImageURL: "http://occupancy-detection.herokuapp.com/public/thermal.png",
            alertData: [{
                Alert_Type: "RFID",
                RFID_Number: "123",
                Floor: "1",
                Room_Number: "1"
            }
            ],
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
            //http://localhost:5000/api/rfiddata/getroomdata
            url: 'http://occupancy-detection.herokuapp.com/api/rfiddata/getroomdata',
            data: {
                Room_Number: "1",
                Floor: "1"
            }
        }).then((peopleInRoom) => {
            //console.log(peopleInRoom.data[0].Employee_Name);
            this.setState({
                roomData: [...peopleInRoom.data, peopleInRoom.data],
                thermalImageURL: "http://occupancy-detection.herokuapp.com/public/thermal.png"
            });
        })
        //Also update the Thermal Image card by passing it the URL again.. Going to look choppy?
        axios({
            method: 'get',
            //http://localhost:5000/api/alert
            url: 'http://occupancy-detection.herokuapp.com/api/alert'
        }).then((alertRes) => {
            this.setState({
                alertData: [alertRes.data]
            })
        });
        console.log(this.state.alertData[0].Alert_Flag);
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
                    <ThermalImageCard alertDataThermalCard={this.state.alertData}/>
                 </Col>
                 <Col >
                 </Col>
            </Row>
            <Row>
                <Col style = { employeeTableOffset }>
                <AlertBar alertDataBarPass={this.state.alertData}></AlertBar>
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
