import {Router}   from 'express';
//import {AccountManager}   from '../../Controller/AccountManager/AccountManager';
import {AccountManager}   from '../../Controller/AccountManager/AccountManager.js';
//import {isAuthenticated} from '../../Middlewares/isAuthenticated/isAuthenticated'
import {isAuthenticated} from '../../Middlewares/isAuthenticated/isAuthenticated.js';


const router = Router ();
const Controller = new AccountManager();

router.post('/api/personal-info', isAuthenticated,(request,response) =>{
    Controller.UpdateUserInfo(request,response)
})

export default router