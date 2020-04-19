import React, { Component } from 'react'
import { Button } from 'reactstrap';
const axios = require('axios').default;

export class AlertButton extends Component {
    constructor(){
        super();
        this.clearAlert = this.clearAlert.bind(this);
    }
    alertButtonRender(){
        if(this.props.alertDataClearButton[0].Alert_Flag == "1"){
            return(
                <Button color="danger" onClick={this.clearAlert}>Clear Alert</Button>
            )
        }
    }
    clearAlert() {
        axios({
            method: 'post',
            //http://localhost:5000/api/alert
            url: 'http://occupancy-detection.herokuapp.com/api/alert',
            data: {
                "Alert_Flag": "0"
            }
        });
        this.props.alertDataClearButton[0].Alert_Flag = "0";
        this.forceUpdate();
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
