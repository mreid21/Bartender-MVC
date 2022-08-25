import { RequestHandler } from "express";
import { Cocktail } from "../models/cocktail";

//change to db later
let cocktails: Cocktail[] = []
let counter = 1

const getCocktails: RequestHandler = (_, res) => {
    res.status(200).send(cocktails)
}

const createCockTail: RequestHandler = (req, res) => {
    const {name, price} = req.body

    cocktails.push({id: counter++, name, price})

    //send new cocktail after db
    res.sendStatus(201)
}



export {getCocktails, createCockTail}