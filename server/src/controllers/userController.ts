import { isBartender } from "../utils/typeguards";
import { RequestHandler } from "express";


const login: RequestHandler = (req, res) => {
    const credentials = isBartender(req.body) ? req.body : undefined

    if(credentials){
        const {username, password} = credentials
    }
}


export {login}