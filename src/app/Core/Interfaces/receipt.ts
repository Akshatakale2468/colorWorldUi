export class receiptClass {
    paymentId: number;
    customerId: number;
    saleId: 0;
    paymentMode:string;
    amount:number;
    naration:string;
    paymentDate: Date;
    billNo: string;
    invoiceNo: number;
    saleDate: string;
    customerName: string;
    mobileNo: string

    constructor(){
        this.paymentId = 0,
        this.customerId = 0,
        this.saleId = 0,
        this.paymentMode = '',
        this.amount = 0,
        this.naration = '',
        this.paymentDate = new Date(),
        this.billNo = '',
        this.invoiceNo = 0,
        this.saleDate = '',
        this.customerName = '',
        this.mobileNo = ''
    }
  }
