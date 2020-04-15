import React, { Component } from 'react'
import FloorPlanSvg from './FloorPlanSvg';
import ThermalImageCard from './ThermalImageCard';
import { Container, Row, Col } from 'reactstrap';

export class FloorView extends Component {
    render() {
        return (
        <container>
            <Row>
                <Col>
                        <p style = {positioned} >Hello</p>
                        <FloorPlanSvg></FloorPlanSvg>
                 </Col>
                 <Col sm='3'>
                        <ThermalImageCard/>
                 </Col>
                 <Col>
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

export default FloorView
