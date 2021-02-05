import {IUserOrderDao} from './UserOrderDao';
import { ICakeOrder } from '@entities/CakeOrder';
import { CakeOrderItem } from './UserOrderItem';
import { ICookieOrder } from '@entities/CookieOrder';
import { CookieOrderItem } from './UserOrderItem';
import * as AWS from '../../aws';

class UserOrder implements IUserOrderDao {

    //(TODO) Get a signed url to put a new item in the bucket

    public async addCake(order: ICakeOrder): Promise<void> {
        
        const newBakeryOrder = await new CakeOrderItem({
            name: order.name,
            contactMethod: order.contactMethod,
            contactInfo: order.contactInfo,
            pickUpDate: new Date(order.pickUpDate),
            cakeSize: order.cakeSize,
            cakeFlavorAndFilling: order.cakeFlavorAndFilling,
            paymentMethod:  order.paymentMethod,
            cakeTheme:    order.cakeTheme,
            budget: order.budget,
            notes:  order.notes
        });
    
        let savedOrder;
        try {
            savedOrder = await newBakeryOrder.save();
        } catch (e) {
            throw e;
        }
    }

    public async addCookie(order: ICookieOrder): Promise<void> {
        
        const newBakeryOrder = await new CookieOrderItem({
            name: order.name,
            contactMethod: order.contactMethod,
            contactInfo: order.contactInfo,
            pickUpDate: new Date(order.pickUpDate),
            dozens: order.dozens,
            packageMethod: order.packageMethod,
            paymentMethod:  order.paymentMethod,
            cookieTheme:    order.cookieTheme,
            notes:  order.notes
        });
    
        let savedOrder;
        try {
            savedOrder = await newBakeryOrder.save();
        } catch (e) {
            throw e;
        }
    }
}

export default UserOrder;
