import StatusCodes from 'http-status-codes';
import { Request, Response, Router } from 'express';
import UserOrder from '@daos/User/UserOrder';
import { paramMissingError, IRequest } from '@shared/constants';
import * as AWS from '../aws';

const router = Router();
const userOrder = new UserOrder();
const { BAD_REQUEST, CREATED, OK } = StatusCodes;



/******************************************************************************
 *                      Get all info - "GET /api/users/"
 ******************************************************************************/

router.get('/signed-url/:fileName', async (req: IRequest, res: Response) => {
    let { fileName } = req.params;
    const url = AWS.getPutSignedUrl(fileName);
    res.status(201).send({url: url});
});

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


router.post('/add/cake', async (req: IRequest, res: Response) => {
    console.log("received")
    console.log(req.body)
    const { cakeOrder } = req.body;
    if (!cakeOrder) {
        console.log("wrong message")
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    // add order to the database
    await userOrder.addCake(cakeOrder);
    console.log("item created in database")
    return res.status(CREATED).json({result:"created"});
});

router.post('/add/cookie', async (req: IRequest, res: Response) => {
    console.log(req.body)
    const { cookieOrder } = req.body;
    if (!cookieOrder) {
        return res.status(BAD_REQUEST).json({
            error: paramMissingError,
        });
    }
    // add order to the database
    await userOrder.addCookie(cookieOrder);
    console.log("item created in database")
    return res.status(CREATED).json({result:"created"});
});

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

export default router;
