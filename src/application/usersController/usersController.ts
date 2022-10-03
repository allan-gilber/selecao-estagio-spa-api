import UsersBusiness from '../../business/UserBusiness/UserBusiness';
import {Request, Response} from 'express';
import DataBase from '../../services/DataBase';
import MessageErrorsController from '../errorsControllers/MessageErrorsController';

/* This class is a controller for the Users table in the database. It has two methods: getUsersList and
insertNewUsers. The getUsersList method gets a list of users from the database and sends it to the
client. The insertNewUsers method inserts a new user into the database */

export class UsersController extends DataBase {
  async getUsersList(resp: Response){
    try {
      const usersList = await new UsersBusiness().getUserList();

      resp.statusCode = 201;
      resp.send({data: usersList});
    } catch (error: any){
      const errorMessage = new MessageErrorsController().getErrorMessage(error?.code || error?.message);
      resp.statusCode = errorMessage.status;

      resp.send({message: errorMessage.message});
    } finally {
      this.closeConnection();
    }
    return;
  }

  async insertNewUsers(req: Request, resp: Response){
    try {
      await new UsersBusiness().insertNewUser(req);

      resp.statusCode = 201;
      resp.send({message: new MessageErrorsController().getErrorMessage('successfullyInsertedNewUsers').message});
    } catch (error: any){
      console.log('555',error);
      console.log('error in UsersController:', error?.code || error?.message);

      const errorMessage = new MessageErrorsController().getErrorMessage(error?.code || error?.message);
      resp.statusCode = errorMessage.status;

      resp.send({message: errorMessage.message});
    } finally {
      this.closeConnection();
    }
    return;
  }
}