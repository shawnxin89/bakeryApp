"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CakeOrder {
    constructor(nameOrOrder, contactMethod, contactInfo, pickUpDate, cakeSize, cakeFlavorAndFilling, paymentMethod, cakeTheme, budget, notes) {
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
        }
        else {
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
exports.default = CakeOrder;
