export interface ICakeOrder {
    
    name: string;
    contactMethod: string;
    contactInfo: string;
    pickUpDate: string;
    cakeSize: string;
    cakeFlavorAndFilling: string;
    paymentMethod:  string;
    cakeTheme:    string;
    budget: string;
    notes:  string;
    // TODO: pics
}

class CakeOrder implements ICakeOrder {

    public name: string;
    public contactMethod: string;
    public contactInfo: string;
    public pickUpDate: string;
    public cakeSize: string;
    public cakeFlavorAndFilling: string;
    public paymentMethod:  string;
    public cakeTheme:    string;
    public budget: string;
    public notes:  string;

    constructor(nameOrOrder: string | ICakeOrder, contactMethod?: string, contactInfo?: string,
        pickUpDate?: string, cakeSize?: string, cakeFlavorAndFilling?: string, 
        paymentMethod?: string, cakeTheme?: string, budget?: string, notes?: string) {
        if (typeof nameOrOrder === 'string') {
            this.name = nameOrOrder;
            this.contactMethod = contactMethod || '';
            this.contactInfo = contactInfo || '';
            this.pickUpDate = pickUpDate || '';
            this.cakeSize = cakeSize || '';
            this.cakeFlavorAndFilling = cakeFlavorAndFilling || '';
            this.paymentMethod = paymentMethod || '';
            this.cakeTheme = cakeTheme || '';
            this.budget = budget || '';
            this.notes = notes || '';
        } else {
            this.name = nameOrOrder.name;
            this.contactMethod = nameOrOrder.contactMethod;
            this.contactInfo = nameOrOrder.contactInfo;
            this.pickUpDate = nameOrOrder.pickUpDate;
            this.cakeSize = nameOrOrder.cakeSize;
            this.cakeFlavorAndFilling = nameOrOrder.cakeFlavorAndFilling;
            this.paymentMethod = nameOrOrder.paymentMethod;
            this.cakeTheme = nameOrOrder.cakeTheme;
            this.budget = nameOrOrder.budget;
            this.notes = nameOrOrder.notes;
        }
    }
}

export default CakeOrder;