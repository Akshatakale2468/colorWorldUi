export class ledgerClass{
    id:number;
    type:string;
    date: string;
    creditAmt:number;
    description:string;
    debit_amount: number

    constructor(){
        this.id = 0,
        this.type = '',
        this.date = '',
        this.creditAmt = 0,
        this.description = '',
        this.debit_amount = 0
    }
}