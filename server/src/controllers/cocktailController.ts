import { RequestHandler } from "express";
import prisma from '../prisma-init';
import { isCockTail } from '../utils/typeguards';


const getCocktails: RequestHandler = async (_, res) => {
    const menu = await prisma.cocktail.findMany({
        select: {
            id: true,
            name: true,
            price: true
        }
    })

    res.status(200).send(menu)
}

const createCockTail: RequestHandler = async (req, res) => {
    
    const newCocktail = isCockTail(req.body) ? req.body : undefined

    if(newCocktail){
        const {name, price} = newCocktail
        const cocktail = await prisma.cocktail.create({
            data: {
                name,
                price
            }
        })
        res.status(201).send(cocktail)
    }
    else {
        res.status(400).send({message: 'Invalid Request'})
    }
}



export {getCocktails, createCockTail}