import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
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
        try {
            const cocktail = await prisma.cocktail.create({
                data: {
                    name,
                    price
                }
            })
            res.status(201).send(cocktail)
        }
        catch(e: unknown) {
            if(e instanceof PrismaClientKnownRequestError && e.code === 'P2002'){
                res.status(400).send({message: `Cocktail "${name}" already exists`})
            }
        }
    }
    else {
        res.status(400).send({message: 'Invalid Request'})
    }
}



export {getCocktails, createCockTail}