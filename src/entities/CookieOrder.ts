export interface ICookieOrder {
    
    name: string;
    contactMethod: string;
    contactInfo: string;
    pickUpDate: string;
    dozens: number;
    packageMethod: string;
    paymentMethod:  string;
    cookieTheme:    string;
    notes:  string;
    // TODO: pics
}

class CookieOrder implements ICookieOrder {

    public name: string;
    public contactMethod: string;
    public contactInfo: string;
    public pickUpDate: string;
    public dozens: number;
    public packageMethod: string;
    public paymentMethod:  string;
    public cookieTheme:    string;
    public notes:  string;

    constructor(nameOrOrder: string | ICookieOrder, contactMethod?: string, contactInfo?: string,
        pickUpDate?: string, dozens?: number, packageMethod?: string, 
        paymentMethod?: string, cookieTheme?: string, notes?: string) {
        if (typeof nameOrOrder === 'string') {
            this.name = nameOrOrder;
            this.contactMethod = contactMethod || '';
            this.contactInfo = contactInfo || '';
            this.pickUpDate = pickUpDate || '';
            this.dozens = dozens || 0;
            this.packageMethod = packageMethod || '';
            this.paymentMethod = paymentMethod || '';
            this.cookieTheme = cookieTheme || '';
            this.notes = notes || '';
        } else {
            this.name = nameOrOrder.name;
            this.contactMethod = nameOrOrder.contactMethod;
            this.contactInfo = nameOrOrder.contactInfo;
            this.pickUpDate = nameOrOrder.pickUpDate;
            this.dozens = nameOrOrder.dozens;
            this.packageMethod = nameOrOrder.packageMethod;
            this.paymentMethod = nameOrOrder.paymentMethod;
            this.cookieTheme = nameOrOrder.cookieTheme;
            this.notes = nameOrOrder.notes;
        }
    }
}

export default CookieOrder;