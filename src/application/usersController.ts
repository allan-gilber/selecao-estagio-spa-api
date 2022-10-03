import UsersBusiness from '../business/UserBusiness/UserBusiness';
import {Response} from 'express';
import DataBase from '../services/DataBase';
import MessageErrorsController from './errorsControllers/MessageErrorsController';

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

  // async insertNewUsers(req: Request, resp: Response){
  //   try {
  //     await new UsersBusiness().insertNewUsers(req);

  //     resp.statusCode = 201;
  //     resp.send({message: new MessageErrorsController().getErrorMessage('successfullyInsertedNewUsers').message});
  //   } catch (error: any){
  //     console.log('error in UsersController:', error?.code || error?.message);

  //     const errorMessage = new MessageErrorsController().getErrorMessage(error?.code || error?.message);
  //     resp.statusCode = errorMessage.status;

  //     resp.send({message: errorMessage.message});
  //   } finally {
  //     this.closeConnection();
  //   }
  //   return;
  // }

}