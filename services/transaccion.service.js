import Factory from "../models/Factory.js";

class TransaccionService{

    constructor(){
        this.model=Factory.get("MEM")
    }

    getTransacciones=async()=>{
        const datos=await this.model.getTransacciones()
        return datos
    }

    postTransacciones=async(data)=>{
        const newDato=await this.model.postTransacciones(data)
        return newDato
    }
    getCantidadTransacciones=async()=>{

        const dato=await this.model.getCantidadTransacciones()
        return dato
    }
    deleteTransacciones=async(id)=>{
        const dato=await this.model.deleteTransacciones(id)
        return dato
    }
}

export default TransaccionService