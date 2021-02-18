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
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const cookie_parser_1 = __importDefault(require("cookie-parser"));
const morgan_1 = __importDefault(require("morgan"));
const path_1 = __importDefault(require("path"));
const helmet_1 = __importDefault(require("helmet"));
const express_1 = __importDefault(require("express"));
const http_status_codes_1 = __importDefault(require("http-status-codes"));
require("express-async-errors");
const routes_1 = __importDefault(require("./routes"));
const Logger_1 = __importDefault(require("@shared/Logger"));
const sequelize_1 = require("./sequelize");
const UserOrderItem_1 = require("./daos/User/UserOrderItem");
const UserOrderItem_2 = require("./daos/User/UserOrderItem");
var cors = require('cors');
require('dotenv').config();
const app = express_1.default();
const { BAD_REQUEST } = http_status_codes_1.default;
/************************************************************************************
 *                              Set basic express settings
 ***********************************************************************************/
(() => __awaiter(void 0, void 0, void 0, function* () {
    yield sequelize_1.sequelize.addModels([UserOrderItem_1.CakeOrderItem, UserOrderItem_2.CookieOrderItem]);
    yield sequelize_1.sequelize.sync();
    app.use(cors());
    app.options('*', cors());
    app.use(express_1.default.json());
    app.use(express_1.default.urlencoded({ extended: true }));
    app.use(cookie_parser_1.default());
    // Show routes called in console during development
    if (process.env.NODE_ENV === 'development') {
        app.use(morgan_1.default('dev'));
    }
    // Security
    if (process.env.NODE_ENV === 'production') {
        app.use(helmet_1.default());
    }
    // Add APIs
    app.use('/api', routes_1.default);
    // Print API errors
    // eslint-disable-next-line @typescript-eslint/no-unused-vars
    app.use((err, req, res, next) => {
        Logger_1.default.err(err, true);
        return res.status(BAD_REQUEST).json({
            error: err.message,
        });
    });
}))();
/************************************************************************************
 *                              Serve front-end content
 ***********************************************************************************/
const viewsDir = path_1.default.join(__dirname, 'views');
app.set('views', viewsDir);
const staticDir = path_1.default.join(__dirname, 'public');
app.use(express_1.default.static(staticDir));
app.get('', (req, res) => {
    res.sendFile('index.html', { root: viewsDir });
});
app.get('/index.html', (req, res) => {
    res.sendFile('index.html', { root: viewsDir });
});
app.get('/cake.html', (req, res) => {
    res.sendFile('cake.html', { root: viewsDir });
});
app.get('/cookie.html', (req, res) => {
    res.sendFile('cookie.html', { root: viewsDir });
});
// Export express instance
exports.default = app;
