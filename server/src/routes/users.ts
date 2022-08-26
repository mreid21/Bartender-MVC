import express from "express";
import { createBartender, login } from "../controllers/userController";

const usersRoute = express.Router();

usersRoute.get('/:username/:password', login)
usersRoute.post('/', createBartender)


export {usersRoute}