// import {productPropertiesObject} from '../../model/ProductsModels';
import DataBase from '../../services/DataBase';

export default class UsersData extends DataBase {
  async checkIfProductExists(productName: string){
    return await this.connection().table('products').select('*').where({product_name: productName});
  }

  async getUsersList(){
    const response = await this.connection().table('users').select('user_name', 'user_email', 'user_birthday', 'user_phone_number').orderBy('user_id', 'asc');
    return response;
  }

  async insertNewUsersProducts(userName: string, userEmail: string, userBirthday: string, userPhoneNumber: string): Promise<any> {
    const response = await this.connection().table('users').insert({
      user_name: userName,
      user_email: userEmail,
      user_birthday: userBirthday,
      user_phone_number: userPhoneNumber
    });
    return response;
  }
}