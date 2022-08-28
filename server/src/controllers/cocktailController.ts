import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { RequestHandler } from "express";
import prisma from '../prisma-init';
import { isCockTail } from '../utils/typeguards';


const getCocktails: RequestHandler = async (_, res) => {
    const menu = await prisma.cocktail.findMany({
        include: {
            img: {
                select: {
                    src: true,
                    alt: true
                }
            }
        }
    })

    res.status(200).send(menu)
}

const createCockTail: RequestHandler = async (req, res) => {
    
    const newCocktail = isCockTail(req.body) ? req.body : undefined

    if(newCocktail){
        const {name, price, img} = newCocktail
        const {src, alt} = img
        try {
            const cocktail = await prisma.cocktail.create({
                data: {
                    name,
                    price,
                    img: {
                        create: {
                            src,
                            alt
                        }
                    }
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

const deleteCocktail: RequestHandler = async (req, res) => {
    const id = parseInt(req.params.id)
    await prisma.cocktail.delete({where: {id}})

    res.sendStatus(203)
}



export {getCocktails, createCockTail, deleteCocktail}