// import {productPropertiesObject} from '../../model/ProductsModels';
import DataBase from '../../services/DataBase';

export default class UsersData extends DataBase {
  async checkIfProductExists(productName: string){
    return await this.connection().table('products').select('*').where({product_name: productName});
  }

  async getUsersList(){
    return await this.connection().table('users').select('user_name', 'user_email', 'user_birthday', 'user_phone_number').orderBy('user_id', 'asc');
  }

  // async insertNewUsersProducts(productId: string, usersName: string, productPrice: number, productQty: number): Promise<any> {
  //   return await this.connection().table('products').insert({
  //     product_id: productId,
  //     product_name: productName,
  //     product_price: +productPrice,
  //     product_qty_stock: +productQty
  //   });
  // }
}