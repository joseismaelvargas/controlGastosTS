import { getRadomiD } from "./util";

export enum CategoryEnum {
    expense = "Expense",
    income = "Income"
}


export interface Entry {
    id: number;               
    concept: string;         
    amount: number;           
    category: CategoryEnum;  
}
export interface Account{
    id:number;
    nombre:string;
    addEntry(entry:Entry):boolean;
    deleteEntry(id:number):boolean;
    getBalance():number;
    getEntries():Entry[]
}
export class Account implements Account {
    private entries:Entry [];
    private balance:number;

    constructor(account:Account={}as Account){
      this.id=account.id||getRadomiD();
      this.nombre=account.nombre||'nuevaCuenta';
      this.entries=account.entries||[];
      this.balance=account.balance||0
    }
    addEntry(entry: Entry): boolean {
         this.entries.push(entry);
         this.updateBalance();
         return true 
    }
    deleteEntry(id: number): boolean {
        const entriesFiltered=this.entries.filter((entry)=>entry.id!==id)
         this.entries=entriesFiltered;
         this.updateBalance();
         return true
        }
        getBalance(): number {
            return this.balance
        }
        getEntries(): Entry[] {
            return this.entries;
        }
    private updateBalance():void{
        const balance=this.entries.reduce((previusValues,currentEntry)=>{
            return previusValues + this.converAmounbyCategoria(currentEntry)
        },0)
        this.balance=balance
    }
    private converAmounbyCategoria(entry:Entry):number{
        const {category,amount}=entry;
        if(category===CategoryEnum.expense){
            return -amount
        }
        return amount
    }
}

export class Entry implements Entry{
    public id:number;
    constructor(
        public concept:string,
        public amount:number,
        public category:CategoryEnum){
            this.id=getRadomiD();
        }
    
}
