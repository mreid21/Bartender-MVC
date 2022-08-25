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

    res.status(201).send(cocktails[cocktails.length - 1])
}



export {getCocktails, createCockTail}