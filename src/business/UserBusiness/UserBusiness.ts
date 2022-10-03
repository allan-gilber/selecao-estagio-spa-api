import UsersData from '../../data/UsersData/UsersData';
import {Request} from 'express';
import DataFilter from '../dataFilter/DataFilter';
export default class UsersBusiness {
  public async getUserList(): Promise<any>{
    const databaseQuery = await new UsersData().getUsersList();
    console.log('666', databaseQuery);
    const parsedData = new DataFilter().userPropertyNameHandler(databaseQuery);
    return parsedData;
  }

  public async insertNewUser(req: Request){

    const {userName, userEmail, userBirthday, userPhoneNumber}: any = req.body;
    const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;

    if (!userName || userName.length <= 3 || !userEmail || !userBirthday || !userPhoneNumber) throw new Error('emptyParamtersForNewUser');
    // 1997-out-13
    if (!Date.parse(userBirthday) || userBirthday.length === 11) throw new Error('invalidParamterForBirthday');
    if (!emailRegex.test(userEmail)) throw new Error('invalidParamterForEmail');
    if (!(userPhoneNumber.length === 11)) throw new Error('invalidPhoneNumber');

    const databaseQuery = await new UsersData().insertNewUsersProducts(userName, userEmail, userBirthday, userPhoneNumber);
    return databaseQuery;
  }
}