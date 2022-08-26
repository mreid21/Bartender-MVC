import { isBartender } from "@App/utils/typeguards";
import e, { RequestHandler } from "express";
import { Bartender } from "../models/bartender";


const login: RequestHandler = (req, res) => {
    const credentials = isBartender(req.body) ? req.body : undefined

    if(credentials){
        const {username, password} = credentials
    }
}


export {login}