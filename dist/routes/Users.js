"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    Object.defineProperty(o, k2, { enumerable: true, get: function() { return m[k]; } });
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
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
const http_status_codes_1 = __importDefault(require("http-status-codes"));
const express_1 = require("express");
const UserOrder_1 = __importDefault(require("@daos/User/UserOrder"));
const constants_1 = require("@shared/constants");
const AWS = __importStar(require("../aws"));
const router = express_1.Router();
const userOrder = new UserOrder_1.default();
const { BAD_REQUEST, CREATED, OK } = http_status_codes_1.default;
/******************************************************************************
 *                      Get all info - "GET /api/users/"
 ******************************************************************************/
router.get('/signed-url/:fileName', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    let { fileName } = req.params;
    const url = AWS.getPutSignedUrl(fileName);
    res.status(201).send({ url: url });
}));
/******************************************************************************
 *                       Add One order - "POST /api/users/add"
 ******************************************************************************/
// router.post('/add', async (req: IRequest, res: Response) => {
//     const { user } = req.body;
//     if (!user) {
//         return res.status(BAD_REQUEST).json({
//             error: paramMissingError,
//         });
//     }
//     await userDao.add(user);
//     return res.status(CREATED).end();
// });
router.post('/add/cake', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log("received");
    console.log(req.body);
    const { cakeOrder } = req.body;
    if (!cakeOrder) {
        console.log("wrong message");
        return res.status(BAD_REQUEST).json({
            error: constants_1.paramMissingError,
        });
    }
    // add order to the database
    yield userOrder.addCake(cakeOrder);
    console.log("item created in database");
    return res.status(CREATED).json({ result: "created" });
}));
router.post('/add/cookie', (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    console.log(req.body);
    const { cookieOrder } = req.body;
    if (!cookieOrder) {
        return res.status(BAD_REQUEST).json({
            error: constants_1.paramMissingError,
        });
    }
    // add order to the database
    yield userOrder.addCookie(cookieOrder);
    console.log("item created in database");
    return res.status(CREATED).json({ result: "created" });
}));
/******************************************************************************
 *                       Update - "PUT /api/users/update"
 ******************************************************************************/
// router.put('/update', async (req: IRequest, res: Response) => {
//     const { user } = req.body;
//     if (!user) {
//         return res.status(BAD_REQUEST).json({
//             error: paramMissingError,
//         });
//     }
//     user.id = Number(user.id);
//     await userDao.update(user);
//     return res.status(OK).end();
// });
/******************************************************************************
 *                    Delete - "DELETE /api/users/delete/:id"
 ******************************************************************************/
// router.delete('/delete/:id', async (req: IRequest, res: Response) => {
//     const { id } = req.params;
//     await userDao.delete(Number(id));
//     return res.status(OK).end();
// });
/******************************************************************************
 *                                     Export
 ******************************************************************************/
exports.default = router;
