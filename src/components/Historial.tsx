import { Account,Entry,CategoryEnum} from "../helpers/Account"
import {useState,useEffect} from "react"

import "./style/gestor.css"
const Historial = () => {

  const [gasto,setGasto]=useState<Entry[]>([]);

useEffect(()=>{
 let storageaccount=localStorage.getItem('account')
 if(storageaccount){
   const pasedaccount=JSON.parse(storageaccount)
   const accounte= new Account(pasedaccount); 
      setGasto(accounte.getEntries() || []);
 }
  

},[])
const eliminargasto=(id:number):void=>{
  const eliminar=gasto.filter((item)=>item.id!==id)
  setGasto(eliminar)
  const storage=localStorage.getItem('account')
  if(storage){
    const parse=JSON.parse(storage)
    const account=new Account(parse)
    account.deleteEntry(id)
    localStorage.setItem('account',JSON.stringify(account))
    setGasto(account.getEntries())
    location.reload()
  }
}
const eliminaringreso=(id:number):void=>{
const  eliminar=gasto.filter((item)=>item.id!==id)
setGasto(eliminar)
const storage=localStorage.getItem('account')

if(storage){
  const parseada=JSON.parse(storage)
  const account=new Account(parseada)
 account.deleteEntry(id)
 localStorage.setItem('account',JSON.stringify(account))
 setGasto(account.getEntries())
 location.reload()
}
     
}
const filtergasto=gasto.filter((item)=>item.category===CategoryEnum.expense)
const filteringreso=gasto.filter((item)=>item.category===CategoryEnum.income)

  return (
      <div className="container">
            <h4>Historial</h4>
            {
              filtergasto.map((entry,index)=>(
                <div key={index} className="h-gasto"><p className="p-g">{entry.concept}</p> <p className="money-g">{entry.amount.toFixed(2)}$ </p> <i className="bi bi-x-octagon" onClick={()=>eliminargasto(entry.id)}></i></div>
              ))
            }
               {
             filteringreso.map((entry,index)=>(
               <div className="h-gasto" key={index}><p className="p-g">{entry.concept}</p> <p className="money-i">{entry.amount.toFixed(2)}$</p> <i className="bi bi-x-octagon"  onClick={()=>eliminaringreso(entry.id)}></i></div>
              ))
            }
            
           
        </div>
  )
}

export default Historial
