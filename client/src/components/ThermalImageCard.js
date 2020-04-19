//import React from 'react';
import React, { Component } from 'react'
import AlertButton from './AlertButton';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

export class ThermalCard extends Component {
  constructor(){
    super();
    this.state = {
      dum: ""
    }
  }
  componentDidMount(){
    setInterval(this.forceUpdate(), 2000);
}
  refreshImage(){
    const timestamp = Date.now();
    const imageURL = `https://occupancy-detection.herokuapp.com/public/thermal.png?t=${timestamp}`
    return <CardImg top width="100%" src={imageURL} alt="Card image cap" />
  }
  trackingIdent(num){
    return 
  }
  render() {
  return (
    <div>
      <Card style={positioned}>
        {this.refreshImage()}
        <CardBody>
          <CardTitle>Number of Occupants:</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
          <AlertButton alertDataClearButton={this.props.alertDataThermalCard}></AlertButton>
        </CardBody>
      </Card>
    </div>
  );
};
}

const positioned = {
    top: '58px',
    left: '20px'
}

export default ThermalCard;
