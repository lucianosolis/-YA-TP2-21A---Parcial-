import TransaccionMemModel from "./DAO/transaccion.models.mem.js"


class Factory{

    static get(persistence){
        switch(persistence){

            case "MEM":
                console.log("Persistiendo en la memoria del servidor")
                return new TransaccionMemModel();
            default:
                console.log("Persistiendo en la memoria del servidor por default")
                return new TransaccionMemModel();
        }

    }



}

export default Factory