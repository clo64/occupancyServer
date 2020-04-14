
class RoomController{
    constructor() {
    }
isRfidInRoom(queryRfid, roomData){
    for(let i = 0; i <= roomData[0].Occupant_RFID.length; i++){
        if(roomData[0].Occupant_RFID[i] == queryRfid){
            return true;
        }
    }
    return false;
}
removeElementFromRfidArray(requestData, roomData){
    for(let i = 0; i <= roomData[0].Occupant_RFID.length; i++){
        if(roomData[0].Occupant_RFID[i] == requestData.Rfid){
            //Remove element via splice
            roomData[0].Occupant_RFID.splice(i, 1);
            //Return the updated array
            return roomData[0].Occupant_RFID;
        }
    }
}   
writeEditedRfidArrayToDatabase(requestData, updatedOccupantRfidArray, Room){
    return Room.findOneAndUpdate({Room_Number: requestData.Room_Number, Floor: requestData.Floor}, {Occupant_RFID: updatedOccupantRfidArray});
}
isRfidAssigned(requestData, Employee){
    return Employee.find({RFID_Number: requestData.Rfid}).then(rfidValidityFlag => {
            if(typeof rfidValidityFlag[0] === "undefined"){
                return 'invalid';
            }
                return 'valid';
     }).catch(error => { return 'invalid'});
}
checkIfAuthorized(requestData, Employee){
    return Employee.find({RFID_Number: requestData.Rfid})
    .then(employeeData => {
        console.log(employeeData[0].Floor_Authorization);
        for(let i = 0; i < employeeData[0].Floor_Authorization.length; i++){     
            if(employeeData[0].Floor_Authorization[i] == requestData.Floor){
                for(let j = 0; j < employeeData[0].Room_Authorization.length; j++){
                    if(employeeData[0].Room_Authorization[j] == requestData.Room_Number){
                        return 1;
                    } 
                } 
            }   
        } 
        return 0;   
    }); 
}
addRfidToRoomArray(roomData, requestData, Room){
    roomData[0].Occupant_RFID.push(requestData.Rfid);
    console.log(roomData[0].Occupant_RFID);
    return Room.findOneAndUpdate({Room_Number: requestData.Room_Number, Floor: requestData.Floor}, {Occupant_RFID: roomData[0].Occupant_RFID});
}
}

module.exports = RoomController;