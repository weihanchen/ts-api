import { Router, Request, Response, NextFunction } from 'express';
import login from './login';
const users = Router();

users.use('/users', login);

export default users;
