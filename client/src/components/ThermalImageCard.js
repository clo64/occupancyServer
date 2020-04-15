import React from 'react';
import {
  Card, CardImg, CardText, CardBody,
  CardTitle, CardSubtitle, Button
} from 'reactstrap';

const ThermalImageCard = (props) => {
  return (
    <div>
      <Card style={positioned}>
        <CardImg top width="100%" src="https://occupancy-detection.herokuapp.com/public/thermal.png" alt="Card image cap" />
        <CardBody>
          <CardTitle>Number of Occupants in here maybe</CardTitle>
          <CardSubtitle></CardSubtitle>
          <CardText></CardText>
        </CardBody>
      </Card>
    </div>
  );
};

const positioned = {
    position: 'absolute',
    top: '58px',
    left: '20px'
}

export default ThermalImageCard;
