import TransaccionService from "../services/transaccion.service.js"

class TransaccionController{

    constructor(){

        this.service=new TransaccionService()
    }

    getTransacciones=async(req,res)=>{

        const datos=await this.service.getTransacciones()
        res.send(datos)
    }

    postTransacciones=async(req,res)=>{
        const data=req.body
        try{
            if(JSON.stringify(req.body)=="{}"){

                throw new Error("El objeto no tiene los parametros validos")
                
            }
            const newTransaccion=await this.service.postTransacciones(data)
            res.send(newTransaccion)

        }catch(error){

            console.error("Ha ocurrido en un error en la operacion post")
            res.send(error.message)
        }
        
    }
    getCantidadTransacciones=async(req,res)=>{
        const dato= await this.service.getCantidadTransacciones()
        res.send(dato)

    }

    deleteTransacciones=async(req,res)=>{

        const {id}=req.params
        const dato=await this.service.deleteTransacciones(id)
        res.send(dato)


    }
}

export default TransaccionController