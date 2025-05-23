import { Account,Entry,CategoryEnum } from "../helpers/Account"
import {useState,useEffect} from "react"
import "../components/style/gestor.css"


export const Cartera = () => {
    const [cash,setCash]=useState<Account|null>(null)
 
  useEffect(()=>{
    let account:Account;
   const InitialAccount=getAccountFronStorage();

   if(InitialAccount){
     account=new Account(InitialAccount as Account)
     
   }else{

    setAccountToStorage(account)

   }

   setCash(account)
},[])

   

        function getAccountFronStorage():Account|boolean{
          
            const accountFromStorage=localStorage.getItem('account')
            return accountFromStorage?JSON.parse(accountFromStorage):false;
        } 
        function setAccountToStorage(account:Account):void{
            localStorage.setItem('account',JSON.stringify(account))
        }
   
     
    return (
        <div className="cash">
               <i className="bi bi-cash-stack text-white"></i>
               <div className="money">
                {
                    cash?<p className="money">{cash.getBalance().toFixed(2)}$</p>:<p>....cargando </p>
                }
               </div>
        </div>
    )
}
