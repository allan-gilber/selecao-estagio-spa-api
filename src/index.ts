import {Request, Response} from 'express';
import {UsersController} from './application/usersController';
import app from './business/applicationBusiness/ApplicationLogic';


app.get('/', (req: Request,res: Response) => res.status(200).send({message: 'server online.'}));
app.get('/users', async (req: Request,res: Response) => await new UsersController().getUsersList(res));

app.post('/users', async (req: Request,res: Response) => await new UsersController().insertNewUsers(req, res));