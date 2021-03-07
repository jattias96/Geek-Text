import { Router } from 'express'
import { Author } from '../models/authorModel.js'
import expressAzyncHandler from 'express-async-handler';
const router = Router();
// Handle get request
router.route('/').get((req, res)=>{
    Author.find()
    .then(authors => res.json(authors))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Handle post request
router.route('/add').post((req,res) => {
    
    const name = req.body.name;

    const newAuthor = new Author({
        name
    })

    newAuthor.save()
    .then(() => res.json('Author added!'))
    .catch(err => res.status(400).json('Error: ' + err));
});

// Handle get request for specific author
router.get('/:id', 
    expressAzyncHandler(async(req, res)=>{
    const json_author = await Author.findById(req.params.id);
    if (json_author){
        res.send({json_author});
    }
    else{
        res.status(404).send({message: 'Author Not Found'})
    }
}));

export default router;
