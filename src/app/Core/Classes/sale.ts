export interface saleInterface {
    saleId: 0;
    customerId: number;
    saleDate: string;
    totalInvoiceAmt: number;
    totalItems: number;
    invoiceNo: number;
    naration: string;
    customerName: string;
    mobileNo: string;
    discount : number;
    advancePaid : number;
}

export class sale {
    name: string;
    mobileNo: string;
    aadharNo: string;
    altMobNo: string;
    city: string;
    address: string;
    refrence: string;
    saleId: 0;
    customerId: 0;
    saleDate: string;
    totalInvoiceAmt: string;
    totalItems: number;
    invoiceNo: string;
    naration: string;
    outStandingAmount : number;
    discount : string;
    advancePaid : number;
    saleItemMasters: saleItem[]

    constructor() {
        this.name = '',
        this.mobileNo = '',
        this.aadharNo = '',
        this.altMobNo = '',
        this.city = '',
        this.address = '',
        this.refrence = '',
        this.saleId = 0;
        this.customerId = 0;
        this.saleDate = '',
        this.totalInvoiceAmt = '';
        this.totalItems = 0;
        this.invoiceNo = '',
        this.naration = '',
        this.discount = '',
        this.advancePaid = 0,
        this.outStandingAmount = 0,
        this.saleItemMasters =[]
    }
};

export class saleItem {
    saleItemId: number;
    itemId : number;
    quantity : number;
    saleId : number;
    rate : number;

    constructor(){
        this.saleItemId = 0,
        this.itemId = 0,
        this.quantity = 0,
        this.saleId = 0,
        this.rate = 0
    }
}

    