"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
class CookieOrder {
    constructor(nameOrOrder, contactMethod, contactInfo, pickUpDate, dozens, packageMethod, paymentMethod, cookieTheme, notes) {
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
        }
        else {
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
exports.default = CookieOrder;
