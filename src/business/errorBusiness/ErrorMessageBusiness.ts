import {errorMessagesData} from '../../data/errorMessageData/errorMessageData';
import {errorMessage} from '../../model/errorMessageModels';

export default class ErrorMessageBusiness {
  private errorMessagesObject = errorMessagesData;

  requestErrorMessage(errorCode: string): errorMessage{
    return this.errorMessagesObject[errorCode] ? this.errorMessagesObject[errorCode] : this.errorMessagesObject['genericError'];
  }
}