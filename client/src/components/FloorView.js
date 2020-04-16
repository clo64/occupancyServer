import React, { Component } from 'react'
import FloorPlanSvg from './FloorPlanSvg';
import ThermalImageCard from './ThermalImageCard';
import EmployeeTable from './EmployeeTable';
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
                    <p style = { positioned } >Hello</p>
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

const positioned = {
    position: 'absolute',
    top: '130px',
    left: '130px'
}

const employeeTableOffset = {
    left: '20px'
}




export default FloorView
