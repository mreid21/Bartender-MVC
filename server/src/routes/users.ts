import express from "express";
import { login } from "../controllers/userController";

const usersRoute = express.Router();

usersRoute.get('/:username/:password', login)


export {usersRoute}