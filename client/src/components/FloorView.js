import React, { Component } from 'react'
import FloorPlanSvg from './FloorPlanSvg';
import ThermalImageCard from './ThermalImageCard';
import EmployeeTable from './EmployeeTable';
import FirstFloorOverlay from './FirstFloorOverlay'
import { Container, Row, Col } from 'reactstrap';

export class FloorView extends Component {
    constructor(){
        super();
        this.state = {
            alertFlag: "0",
            roomOne: [
                {
                    firstName: "Chuck",
                    lastName: "Owen",
                    RFID: "123",
                },
                {   
                    firstName: "Adam",
                    lastName: "Novak",
                    RFID: "789"
                }
            ]
        }
    }
    componentDidMount(){
        setInterval(this.getData, 5000);
    }
    getData = () => {
        //Let's get outselves some data to refresh, oi!
        this.setState({
            alertFlag: "0",
            roomOne: [
                {
                    firstName: "Chuck",
                    lastName: "Blowen",
                    RFID: "123",
                },
                {   
                    firstName: "Adam",
                    lastName: "Novak",
                    RFID: "789"
                }
            ]
        }
        );
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
                <EmployeeTable room={this.state.roomOne}></EmployeeTable>
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
