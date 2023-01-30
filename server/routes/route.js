
import express, { Router } from 'express';

const router = express.Router();

router.post('/add' , ()=> {
    console.log('Hello');
})

export default Router;