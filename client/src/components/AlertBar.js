import React, { Component } from 'react'
import { Alert } from 'reactstrap';

export class AlertBar extends Component {
    alertBarRender(){
        if(this.props.alertDataBarPass[0].Alert_Flag == "1" && this.props.alertDataBarPass[0].Alert_Type == "RFID"){
        return(
        <Alert color="danger" fade="true">
          Alert: Unauthorized RFID access. Floor: {this.props.alertDataBarPass[0].Floor}   Room: {this.props.alertDataBarPass[0].Room_Number}   RFID: {this.props.alertDataBarPass[0].RFID_Number}
        </Alert>
        )
        }
        if(this.props.alertDataBarPass[0].Alert_Flag == "1" && this.props.alertDataBarPass[0].Alert_Type == "Thermal"){
            return(
            <Alert color="danger" fade="true">
            Alert: Person in distress. Floor: {this.props.alertDataBarPass[0].Floor}   Room: {this.props.alertDataBarPass[0].Room_Number}
            </Alert>
            )
            } 
        }
        
    render() {
        return (
            <div>
            {this.alertBarRender()}
            </div>
        )
    }
}

export default AlertBar
