import "../components/style/gestor.css"
import { useState } from "react"
import { Account, CategoryEnum, Entry } from "../helpers/Account"
export const NuevaEntrada = () => {
    const [concepto,setconcepto]=useState<string>("")
     const [cantidad,setCantidad]=useState<string>()
     const añadirIngreso=()=>{
      const storage=localStorage.getItem('account')
      if(storage){
        const parse=new Account(JSON.parse(storage))
         console.log(parse)
      const nuevaCuenta:Entry={
        id:Date.now(),
        concept:concepto,
        amount:Number(cantidad),
        category:CategoryEnum.income
      }
      parse.addEntry(nuevaCuenta)
      
localStorage.setItem("account", JSON.stringify(parse));
location.reload()
   setCantidad("")
     setconcepto("")
   }

   
     }
     const añadirGasto=()=>{
         const storage=localStorage.getItem('account')
       if(storage){
        const parse=new Account(JSON.parse(storage))
         console.log(parse)
      const nuevaCuenta:Entry={
        id:Date.now(),
        concept:concepto,
        amount:Number(cantidad),
        category:CategoryEnum.expense
      }
      parse.addEntry(nuevaCuenta)
      
localStorage.setItem("account", JSON.stringify(parse));
location.reload()
     setCantidad("")
     setconcepto("")
   }
   }
    return (
        <div className="container">
            <h4>Nueva Entrada</h4>
                <input  type="text" placeholder="Introduce un Concepto"   value={concepto} onChange={(e)=>setconcepto(e.target.value)} />
                <input type="number" placeholder="Introduce una Cantida"  value={cantidad} onChange={(e)=>setCantidad(e.target.value)}/>
            <div className="opciones">
             <button className="ingreso" onClick={añadirIngreso}>Añadir ingreso</button>
             <button className="gasto" onClick={añadirGasto}>Añadir gasto</button>
            </div>
        </div>
    )
}
