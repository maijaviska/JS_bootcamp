import express from "express";
import checkEmail from "./checkEmail.js";

const router = express.Router();

router.post('/', (req, res) => {
    const name = req.body.name;
    const last_name = req.body.last_name;
    const email = req.body.email;
    const age = req.body.age;
    const nickname = req.body.nickname;

    //do validation
    const errors = [];
    if (typeof name !== 'string') {
        errors.push('name must be a string');
    }
    if (typeof last_name !== 'string') {
        errors.push('last_name must be a string');
    }
    if (typeof email !== 'string') {
        errors.push('email must be a string');
    }
    if (typeof age !== 'number') {
        errors.push('age must be a number');
    }
    if (typeof nickname !== 'string') {
        errors.push('nickname must be a string');
    }
    if (name  === '') {
        errors.push('name must not be empty');
    }
    if (last_name  === '') {
        errors.push('last_name must not be empty');
    }
    if (email  === '') {
        errors.push('email must not be empty');
    }
    if (!(checkEmail(email))) {
        errors.push('must be an email');
    }
    if (age  === null) {
        errors.push('age must not be empty');
    }
    if (age  <= 12) {
        errors.push('age must be above 12');
    }
    
        


    if(errors.length > 0) {
        return res.json({
            message : 'validation failed',
            errors:errors
        })
    }else res.json({message: 'user created'})
    
})


export default router;