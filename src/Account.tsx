

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