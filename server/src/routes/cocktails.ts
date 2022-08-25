import express from "express";
import { createCockTail, getCocktails } from "../controllers/cocktailController";

const cocktailRoute = express.Router();

cocktailRoute.get('/', getCocktails)
cocktailRoute.post('/', createCockTail)
