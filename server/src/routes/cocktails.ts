import express from "express";
import { authenticate } from "../middleware/auth";
import { createCockTail, getCocktails } from "../controllers/cocktailController";

const cocktailRoute = express.Router();

cocktailRoute.get('/', getCocktails)
cocktailRoute.post('/', createCockTail)

export {cocktailRoute}
