import UsersData from '../../data/UsersData/UsersData';
import {Request} from 'express';
import {userModel, userModelDatabase} from '../../model/userModel';
import MessageErrorsController from '../../application/errorsControllers/MessageErrorsController';

export default class DataFilter {
  public async userPropertyNameHandler(arrayOfData: userModelDatabase[]): Promise<any>{
    let temporaryObjArray;
    try {
      temporaryObjArray = arrayOfData.map((user: userModelDatabase) => {
        return {
          userName: user.user_name,
          userEmail: user.user_email,
          userBirthday: user.user_birthday,
          userPhoneNumber: user.user_phone_number
        };
      });
    } catch (error: any){
      console.log('error in dataParsing:', error);

      throw new Error('genericError');
    }
    return temporaryObjArray;
  }

}