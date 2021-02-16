"use strict";
var __decorate = (this && this.__decorate) || function (decorators, target, key, desc) {
    var c = arguments.length, r = c < 3 ? target : desc === null ? desc = Object.getOwnPropertyDescriptor(target, key) : desc, d;
    if (typeof Reflect === "object" && typeof Reflect.decorate === "function") r = Reflect.decorate(decorators, target, key, desc);
    else for (var i = decorators.length - 1; i >= 0; i--) if (d = decorators[i]) r = (c < 3 ? d(r) : c > 3 ? d(target, key, r) : d(target, key)) || r;
    return c > 3 && r && Object.defineProperty(target, key, r), r;
};
var __metadata = (this && this.__metadata) || function (k, v) {
    if (typeof Reflect === "object" && typeof Reflect.metadata === "function") return Reflect.metadata(k, v);
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CookieOrderItem = exports.CakeOrderItem = void 0;
const sequelize_typescript_1 = require("sequelize-typescript");
let CakeOrderItem = class CakeOrderItem extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CakeOrderItem.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CakeOrderItem.prototype, "contactMethod", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CakeOrderItem.prototype, "contactInfo", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], CakeOrderItem.prototype, "pickUpDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CakeOrderItem.prototype, "cakeSize", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CakeOrderItem.prototype, "cakeFlavorAndFilling", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CakeOrderItem.prototype, "paymentMethod", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CakeOrderItem.prototype, "cakeTheme", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CakeOrderItem.prototype, "budget", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CakeOrderItem.prototype, "notes", void 0);
CakeOrderItem = __decorate([
    sequelize_typescript_1.Table
], CakeOrderItem);
exports.CakeOrderItem = CakeOrderItem;
let CookieOrderItem = class CookieOrderItem extends sequelize_typescript_1.Model {
};
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CookieOrderItem.prototype, "name", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CookieOrderItem.prototype, "contactMethod", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CookieOrderItem.prototype, "contactInfo", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Date)
], CookieOrderItem.prototype, "pickUpDate", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", Number)
], CookieOrderItem.prototype, "dozens", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CookieOrderItem.prototype, "packageMethod", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CookieOrderItem.prototype, "paymentMethod", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CookieOrderItem.prototype, "cookieTheme", void 0);
__decorate([
    sequelize_typescript_1.Column,
    __metadata("design:type", String)
], CookieOrderItem.prototype, "notes", void 0);
CookieOrderItem = __decorate([
    sequelize_typescript_1.Table
], CookieOrderItem);
exports.CookieOrderItem = CookieOrderItem;
