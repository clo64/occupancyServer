import React, { Component } from 'react'
import { Button } from 'reactstrap';

export class FirstFloorOverlay extends Component {
    render() {
        return (
            <div>
                <Button 
                size="sm" 
                outline="true" 
                style={positioned} 
                color="primary">
                    Room 1
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

export default FirstFloorOverlay
