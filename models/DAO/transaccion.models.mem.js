class TransaccionMemModel{

    constructor(){
        this.transacciones=[]
    }

    getTransacciones=async()=>{
        if(this.transacciones.length>0){
            return this.transacciones.map(({ id, ...resto }) => resto);
        }else{

            return "la lista de transacciones esta vacia,no hay datos para mostrar"
        }
        
    }

    postTransacciones=async(data)=>{
        if(this.transacciones.length>0){
            data.id=this.transacciones[this.transacciones.length -1].id +1
            
            
        }else{
            data.id=1
            
        }
        this.transacciones.push(data)
        return data
    }

    getCantidadTransacciones=async()=>{

        return "Cantidad de transacciones en cuenta: "+this.transacciones.length
    }

    deleteTransacciones=async(id)=>{
        try{
            const index=this.transacciones.findIndex((e)=>e.id==id)
            if(index==-1){
                throw new Error("el indice no existe")
            }
            this.transacciones.splice(index,1)
            return "La transaccion se ha eliminado"
        }catch(error){
            console.error("Ha ocurrido un error en la operacion delete")
            return error.message
        }
        
    }
}

export default TransaccionMemModel