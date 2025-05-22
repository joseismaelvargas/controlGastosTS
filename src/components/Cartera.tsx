import { Account,Entry,CategoryEnum } from "../helpers/Account"
import React,{useState,useEffect} from "react"
import "../components/style/gestor.css"


export const Cartera = () => {
    const [cash,setCash]=useState<Account|null>(null)
  useEffect(()=>{
    let account:Account;
   const InitialAccount=getAccountFronStorage();

   if(InitialAccount){
     account=new Account(InitialAccount as Account)
     
   }else{
    account=createInitialAccount();
    setAccountToStorage(account)

   }
   console.log(account)
   setCash(account)
},[])
   console.log(cash)
    function createInitialAccount():Account{
         const septupaccount=new Account()

         const exampleejemplo=new Entry('Ejemplo de gasto',180,CategoryEnum.expense)
         const Incomejemplo=new Entry('Ejemplo de ingreso',200,CategoryEnum.income)
         septupaccount.addEntry(exampleejemplo)
         septupaccount.addEntry(Incomejemplo)
           return septupaccount
        }

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
                    cash?<p className="money">{cash.balance}$</p>:<p>....cargando </p>
                }
               </div>
        </div>
    )
}
