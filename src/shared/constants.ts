import { Request } from 'express';
import { ICakeOrder } from '@entities/CakeOrder';
import { ICookieOrder } from '@entities/CookieOrder';


export const paramMissingError = 'One or more of the required parameters was missing.';

export interface IRequest extends Request {
    body: {
        cakeOrder: ICakeOrder;
        cookieOrder: ICookieOrder;
    }
} 
