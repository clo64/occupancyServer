class RoomController{
    constructor() {

    }
isRfidInRoom(requestData, roomData){
    for(let i = 0; i <= roomData[0].Occupant_RFID.length; i++){
        if(roomData[0].Occupant_RFID[i] == requestData.Rfid){
            return true;
        }
    }
    return false;
}
/*
insertIntoRoom(rfidNumber){

}
removeFromRoom(rfidNumber){

}
*/
}
module.exports = RoomController;