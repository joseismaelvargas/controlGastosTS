import { Account,Entry,CategoryEnum} from "../helpers/Account"
import React,{useState,useEffect} from "react"
import "./style/gestor.css"
const Historial = () => {

  const [gasto,setGasto]=useState<Entry[]>([]);
   console.log(gasto)
useEffect(()=>{
 let storageaccount=localStorage.getItem('account')
 if(storageaccount){
   const pasedaccount=JSON.parse(storageaccount)
   const accounte= new Account(pasedaccount); // si necesitas convertirlo en una instancia real
      setGasto(accounte.entries || []);
 }
  

},[])
let filtergasto=gasto.filter((item)=>item.category===CategoryEnum.expense)
let filteringreso=gasto.filter((item)=>item.category===CategoryEnum.income)

  return (
      <div className="container">
            <h4>Historial</h4>
            {
              filtergasto.map((entry,index)=>(
                <div key={index} className="h-gasto"><p className="p-g">{entry.concept}</p> <p className="money-g">{entry.amount}$</p></div>
              ))
            }
               {
             filteringreso.map((entry,index)=>(
               <div className="h-gasto" key={index}><p className="p-g">{entry.concept}</p> <p className="money-i">{entry.amount}$</p></div>
              ))
            }
            
           
        </div>
  )
}

export default Historial
