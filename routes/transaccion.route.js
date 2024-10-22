import TransaccionController from "../controllers/transaccion.controller.js";
import express from "express"

class TransaccionRoutes{

    constructor(){
        this.router=express.Router()
        this.controller=new TransaccionController()
    }

    start(){

        this.router.get("/transacciones",this.controller.getTransacciones)
        this.router.post("/transacciones",this.controller.postTransacciones)
        this.router.get("/transacciones/cantidad",this.controller.getCantidadTransacciones)
        this.router.delete("/transacciones/delete/:id",this.controller.deleteTransacciones)
        return this.router
    }
}

export default TransaccionRoutes