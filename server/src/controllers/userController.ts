import { isBartender } from "../utils/typeguards";
import { RequestHandler } from "express";
import prisma  from '../prisma-init'
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";


const login: RequestHandler = async (req, res) => {
    const reqParams = {username: req.params.username, password: req.params.password}
    const credentials = isBartender(reqParams) ? reqParams : undefined

    if(credentials){
        const {username, password} = credentials

        try {
            const bartender = await prisma.bartender.findUnique({where: {username}})

            res.status(200).send(bartender)
        }
        catch(e: unknown) {
            if(e instanceof PrismaClientKnownRequestError) {
                res.status(500).send({message: `error: ${e.code}`})
            }
        }

    }
}

const createBartender: RequestHandler = async (req, res) => {
    const credentials = isBartender(req.body) ? req.body : undefined

    if(credentials){
        const {username, password} = credentials

        try {
            const newBartender = await prisma.bartender.create({
                data: {
                    username,
                    password
                }
            })

            res.status(201).send({username: newBartender.username})
        }
        catch (e: unknown) {
            if(e instanceof PrismaClientKnownRequestError && e.code === 'P2002'){
                res.status(400).send({message: `bartender with username: ${username} already exists`})
            }
        }
    }
    else {
        res.status(400).send({message: 'Invalid Request'})
    }
}


export {login, createBartender}