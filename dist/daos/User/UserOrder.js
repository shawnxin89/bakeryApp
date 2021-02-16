"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const UserOrderItem_1 = require("./UserOrderItem");
const UserOrderItem_2 = require("./UserOrderItem");
class UserOrder {
    //(TODO) Get a signed url to put a new item in the bucket
    addCake(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBakeryOrder = yield new UserOrderItem_1.CakeOrderItem({
                name: order.name,
                contactMethod: order.contactMethod,
                contactInfo: order.contactInfo,
                pickUpDate: new Date(order.pickUpDate),
                cakeSize: order.cakeSize,
                cakeFlavorAndFilling: order.cakeFlavorAndFilling,
                paymentMethod: order.paymentMethod,
                cakeTheme: order.cakeTheme,
                budget: order.budget,
                notes: order.notes
            });
            let savedOrder;
            try {
                savedOrder = yield newBakeryOrder.save();
            }
            catch (e) {
                throw e;
            }
        });
    }
    addCookie(order) {
        return __awaiter(this, void 0, void 0, function* () {
            const newBakeryOrder = yield new UserOrderItem_2.CookieOrderItem({
                name: order.name,
                contactMethod: order.contactMethod,
                contactInfo: order.contactInfo,
                pickUpDate: new Date(order.pickUpDate),
                dozens: order.dozens,
                packageMethod: order.packageMethod,
                paymentMethod: order.paymentMethod,
                cookieTheme: order.cookieTheme,
                notes: order.notes
            });
            let savedOrder;
            try {
                savedOrder = yield newBakeryOrder.save();
            }
            catch (e) {
                throw e;
            }
        });
    }
}
exports.default = UserOrder;
