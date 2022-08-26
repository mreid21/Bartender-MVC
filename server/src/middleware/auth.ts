import 'dotenv/config'
import { config } from 'dotenv'
config({path: '../.env'})
import { RequestHandler } from 'express';
import jwt from 'jsonwebtoken';

const SECRET = process.env.SECRET as string

const authenticate: RequestHandler = (req, res, next) => {
    const authHeader = req.headers.authorization;
    
   
    if(authHeader){
        const authToken = authHeader.split(' ')[1];

        try {
            jwt.verify(authToken, SECRET);
            next();
        }
        catch(ex) {
            res.status(401).send({message: ex});
        }
    }
    else {
        res.status(401).send({status: 401, message: 'Invalid authorization header'})
    }
}

const getToken = (data: Object): string => jwt.sign(data, SECRET, {expiresIn: '1hr'})


export {authenticate, getToken};