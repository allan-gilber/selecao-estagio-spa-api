import {userModelDatabase} from '../../model/userModel';

/* It takes an array of objects and returns an array of objects with the same data but with different */
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