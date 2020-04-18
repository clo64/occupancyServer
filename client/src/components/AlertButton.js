import React, { Component } from 'react'
import { Button } from 'reactstrap';

export class AlertButton extends Component {
    alertButtonRender(){
        if(this.props.alertDataClearButton[0].Alert_Flag == "1"){
            return(
                <Button color="danger">Clear Alert</Button>
            )
        }
    }
    render() {
        return (
            <div>
            {this.alertButtonRender()}
            </div>
        )
    }
}

export default AlertButton
