//import React from 'react';
import React, { Component } from 'react'
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
    setInterval(this.forceUpdate(), 5000);
}
  refreshImage(){
    const timestamp = Date.now();
    const imageURL = `https://occupancy-detection.herokuapp.com/public/thermal.png?t=${timestamp}`
    return <CardImg top width="100%" src={imageURL} alt="Card image cap" />
  }
  render() {
  return (
    <div>
      <Card style={positioned}>
        {this.refreshImage()}
        <CardBody>
          <CardTitle>Number of Occupants in here maybe</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
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
