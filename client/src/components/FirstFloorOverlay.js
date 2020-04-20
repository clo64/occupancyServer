import React, { Component } from 'react'
import { Button } from 'reactstrap';

export class FirstFloorOverlay extends Component {
    colorToRenderButton(){
        if(this.props.alertDataButtonPass[0].Alert_Flag == "0"){
            return  (
            <div>
            <Button 
            size="sm" 
            outline="true" 
            style={positioned} 
            color="primary">
                Room 1
            </Button>{' '}
            </div>
            );
        }
        if(this.props.alertDataButtonPass[0].Alert_Flag == "1"){
            return  (
                <div>
                <Button 
                size="sm" 
                outline="true" 
                style={positioned} 
                color="danger">
                    Room 1
                </Button>{' '}
                </div>
                );
        }
    }
    render() {
        return (
            <div>
            {this.colorToRenderButton()}
            <Button 
            size="sm" 
            outline="true" 
            style={positionB2} 
            color="primary">
                Room 2
            </Button>{' '}
            </div>
        )
    }
}

//CSS for positioning element
const positioned = {
    position: 'absolute',
    top: '118px',
    left: '115px'
}
const positionB2 = {
    position: 'absolute',
    top: '118px',
    left: '485px'
}

export default FirstFloorOverlay
