const express = require('express');
const {getAll,get,add,replace,remove}=require('../data/event');
const {isValidText, isValidDate,isValidImageUrl}=require('../util/validation');

const router = express.Router();
router.get('/',async (req,res,next)=>{
    try {
        const events = await getAll();
       
        res.json({events : events})
    } catch (error) {
        next(error);
    }
})

router.get('/:id', async (req,res,next)=>{
    try {
        const event = await get(req.params.id);
        res.json({event : event})
    } catch (error) {
        next(error);
    }
})

router.post('/', async (req,res,next)=>{
    const data = req.body;
    console.log("New Data : " + data);
    let errors = {};
    if(!isValidText(data.title)) {
        errors.title = 'Invalid Title';
    }
    if(!isValidText(data.description)) {
        errors.description = 'Invalid Description';
    }
    if(!isValidDate(data.date)) {
        errors.date = 'Invalid Date';
    }
    if(!isValidImageUrl(data.image)) {
        errors.image = 'Invalid Image';
    }
    if(Object.keys(errors).length>0) {
        return res.status(422).json({
            message : 'Adding Events field',
            errors,
        })
    }

    try {
        await add(data);
        res.status(201).json({
            message : 'Events Save',
            event : data,
        })
    } catch (error) {
        next(error);
    }
})

router.patch('/:id', async (req,res,next)=>{
    const data = req.body;
    let errors = {};
    if(!isValidText(data.title)) {
        errors.title = 'Invalid Title';
    }
    if(!isValidText(data.description)) {
        errors.description = 'Invalid Description';
    }
    if(!isValidDate(data.date)) {
        errors.date = 'Invalid Date';
    }
    if(!isValidImageUrl(data.image)) {
        errors.image = 'Invalid Image';
    }
    if(Object.keys(errors).length>0) {
        return res.status(422).json({
            message : 'Adding Events field',
            errors,
        })
    }

    try {
        await replace(req.params.id,data);
        res.status(201).json({
            message : 'Events Save',
            event : data,
        })
    } catch (error) {
        next(error);
    }
})

router.delete('/:id', async (req,res,next)=>{
    try {
        await remove(req.params.id);
        res.json({message : 'Event Deleted'});
    } catch (error) {
        next(error);
    }
})

module.exports=router;