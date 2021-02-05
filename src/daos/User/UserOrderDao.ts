import { ICakeOrder } from '@entities/CakeOrder';
import { ICookieOrder } from '@entities/CookieOrder';


export interface IUserOrderDao {
    addCake: (order: ICakeOrder) => Promise<void>;
    addCookie: (order: ICookieOrder) => Promise<void>;
}
