"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.sequelize = void 0;
const config_1 = require("./config/config");
const sequelize_typescript_1 = require("sequelize-typescript");
const c = config_1.config.dev;
exports.sequelize = new sequelize_typescript_1.Sequelize(c.database, c.username, c.password, {
    host: c.host,
    dialect: "mysql",
});
