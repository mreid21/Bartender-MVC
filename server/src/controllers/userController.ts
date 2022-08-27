
import prisma  from '../prisma-init'
import bcrypt from 'bcrypt'
import { RequestHandler } from "express";
import { PrismaClientKnownRequestError } from "@prisma/client/runtime";
import { isBartender } from "../utils/typeguards";
import { getToken } from "../middleware/auth";


const login: RequestHandler = async (req, res) => {
    const reqParams = {username: req.params.username, password: req.params.password}
    const credentials = isBartender(reqParams) ? reqParams : undefined

    if(credentials){
        const {username, password} = credentials

        try {
            const bartender = await prisma.bartender.findUnique({
                where: {
                    username
                },
                select: {
                    username: true,
                    password: true
                }
            })
            if(bartender) {
                const isValidCredentials = await bcrypt.compare(password, bartender.password)
                isValidCredentials ? res.status(200).send(getToken({username})) : res.status(401).send({message: 'Invalid Credentials'})
            }
            else {
                res.status(404).send({message: 'user not found'})
            }
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

        const salt = await bcrypt.genSalt(10)
        const hash = await bcrypt.hash(password, salt)

        try {
            const newBartender = await prisma.bartender.create({
                data: {
                    username,
                    password: hash
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