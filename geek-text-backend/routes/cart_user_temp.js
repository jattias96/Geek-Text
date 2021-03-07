//! THESE ROUTES ARE ONLY TEMPORAL

import { Router } from 'express'
import { user } from '../models/userModel.js'
import expressAzyncHandler from 'express-async-handler';


const router = Router();
// Handle get request (all temp users)
router.route('/').get(async(req, res)=>{
    await user.find()
    .then(userc => res.json(userc))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Handle post request (data population)
router.route('/add').post((req,res) => {
    const newTempUser = new user(req.body)
    newTempUser.save()
    .then(() => res.json('TempUser added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Handle get request (only temp user with id)
router.get('/:id', 
    expressAzyncHandler(async(req, res)=>{
    const json_user = await user.findById(req.params.id);
    if (json_user){
        res.send({json_user});

    }
    else{
        res.status(404).send({message: 'Book Not Found'})
    }
}));


export default router;


