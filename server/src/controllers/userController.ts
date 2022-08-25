import e, { RequestHandler } from "express";
import { User } from "../models/user";

const users: User[] = [{id: 1, username: 'mreid21', password: '1234', role: 'BARTENDER'}]

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