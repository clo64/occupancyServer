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
            alertFlag: "0"
        }
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
                <EmployeeTable></EmployeeTable>
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
