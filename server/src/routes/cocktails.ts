import express from "express";
import { authenticate } from "../middleware/auth";
import { createCockTail, getCocktails, deleteCocktail } from "../controllers/cocktailController";

const cocktailRoute = express.Router();

cocktailRoute.get('/', getCocktails)
cocktailRoute.post('/', createCockTail)
cocktailRoute.delete('/:id', deleteCocktail)

export {cocktailRoute}
