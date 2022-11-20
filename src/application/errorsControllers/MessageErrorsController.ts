import errorMessageBusiness from '../../business/errorBusiness/ErrorMessageBusiness';
import {errorMessage} from '../../model/errorMessageModels';

/** This class is used to get the error message from the errorMessageBusiness class.
 * @property {string} errorCode
 * @returns {string} error message
*/
export default class MessageErrorsController {
  getErrorMessage(errorCode: any): errorMessage {
    console.log('error in UsersController:', errorCode?.code || errorCode?.message);
    return new errorMessageBusiness().requestErrorMessage(errorCode);
  }
}