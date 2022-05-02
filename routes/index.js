import { Router } from "express";
import Results from '../models/result.js';

const router = Router();

router.get('/', async (req, res) => {
    
    try{

        const data = await Results.find();
        res.status(200).json(data);

    } catch (e) {
        console.log(e.message);
        res.status(500).json("Internal Server Error");
    }

});



router.get('/search', async (req, res) => {

    try{    

        let query;

        if(req.query.name != null && req.query.name != ''){
            query = req.query.name;

            const data = await Results.findOne({name: query});
            return res.status(200).json(data);
        }

        else if(req.query.id != null && req.query.id != ""){
            query = req.query.id;

            const data = await Results.findOne({id: query});
            return res.status(200).json(data);

        }

        else{
            throw new Error("Error in performing operation");
        }


    } catch(e) {
        console.log(e.message);
        res.status(500).json("Internal Server Error");
    }


})



router.post('/', async (req, res) => {

    try{

        const { name, id, sclass, section, marks } = req.body;

        const details = {
            name, 
            id, 
            sclass,
            section, 
            marks
        }

        const data = await Results.create(details);

        res.json(data);


    } catch(e){
        res.json("Error in saving to database");
        console.error(e.message);
    }

});


export default router;