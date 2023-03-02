export class purchaseArray {
    dealerName: string;
    purchaseId: number;
    dealerId: number;
    purchaseDate: string;
    totalItems: number;
    toalInvoiceAmt: number;
    invoiceNo: number;

    constructor() {
        this.dealerName = '',
        this.purchaseId = 0,
        this.dealerId = 0,
        this.purchaseDate = '',
        this.totalItems = 0,
        this.toalInvoiceAmt = 0,
        this.invoiceNo = 0
   }
};

export class purchase {
    purchaseId: number;
    dealerId: number;
    purchaseDate: Date;
    totalItems: number;
    toalInvoiceAmt: number;
    invoiceNo: string;
    purchaseItemMasters: purchaseItem[];

    constructor() {
        this.purchaseId = 0,
        this.dealerId = 0,
        this.purchaseDate = new Date(),
        this.totalItems = 0,
        this.toalInvoiceAmt = 0,
        this.invoiceNo = '',
        this.purchaseItemMasters = []
    }
};

export class purchaseItem {
    purchaseItemId: number;
    purchaseId: number;
    expiryDate: string;
    itemId: number;
    quantity: number;
    rateReceived: number;
    batchCode: string;

    constructor() {
        this.purchaseItemId = 0,
        this.purchaseId = 0,
        this.expiryDate = '';
        this.itemId = 0,
        this.quantity = 0,
        this.rateReceived = 0;
        this.batchCode = ''
    }
}

