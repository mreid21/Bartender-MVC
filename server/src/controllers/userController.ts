import e, { RequestHandler } from "express";
import { Bartender } from "../models/user";

const users: Bartender[] = [{id: 1, username: 'mreid21', password: '1234'}]

const login: RequestHandler = (req, res) => {
    const user = users.find((user) => user.username === req.params.username)

    if(user){
        res.status(200).send({token: 'weojrwoien328h9hgha20'})
    }
    else {
        res.sendStatus(404)
    }
}


export {login}