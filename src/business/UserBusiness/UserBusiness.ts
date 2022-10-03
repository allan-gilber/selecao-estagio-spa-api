import UsersData from '../../data/UsersData/UsersData';
import {newUserBodyRequest, userModel} from '../../model/userModel';


export default class UsersBusiness {
  public async getUserList(): Promise<any>{
    return await new UsersData().getUsersList();
  }

  public async insertNewProduct(req: Request){

    const {userName, userEmail, userBirthday, userPhoneNumber}: any = req.body;

    if (!userName || !userEmail || !userBirthday || !userPhoneNumber) throw new Error('emptyParamtersForNewUser');

    if (isNaN(productPrice) && isNaN(parseFloat(productPrice)) || !productPrice.includes('.') || !(productPrice.split('.')[1].length === 2)) throw new Error('invalidParamterForProductPrice');
    if (Number.isInteger(productQty) && productQty > 0) throw new Error('invalidValueForQuantity');

    const productId = new IdGenerator().generateId();

    return await new ProductsData().insertNewProductsProducts(productId, productName, productPrice, productQty);
  }
}