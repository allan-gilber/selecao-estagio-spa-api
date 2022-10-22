import {Request, Response} from 'express';
import {UsersController} from './application/usersController/usersController';
import app from './business/applicationBusiness/applicationLogic';

// GET
/* Simple endpoint to verify if server is online */
app.get('/', (req: Request,res: Response) => res.status(200).send({message: 'server online.'}));
/* Returns all users. */
app.get('/users', async (req: Request,res: Response) => await new UsersController().getUsersList(res));

// POST
/* Create new user. */
app.post('/users', async (req: Request,res: Response) => await new UsersController().insertNewUsers(req, res));