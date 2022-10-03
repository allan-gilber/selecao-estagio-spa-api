import errorMessageBusiness from '../../business/errorBusiness/ErrorMessageBusiness';
import {errorMessage} from '../../model/errorMessageModels';

export default class MessageErrorsController {
  getErrorMessage(errorCode: any): errorMessage {
    console.log('error in UsersController:', errorCode?.code || errorCode?.message);
    return new errorMessageBusiness().requestErrorMessage(errorCode);
  }
}