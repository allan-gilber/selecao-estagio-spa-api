import {errorMessageObject} from '../../model/errorMessageModels';

export const errorMessagesData: errorMessageObject  = {
  genericError: {status: 500, message:'oops, something went wrong!'},
  // empty/incomplete
  emptyParamtersForNewUser: {status: 400, message:'please, provide a valid paramters. [name: string (length <= 3), email: string, birthday: date, phonenumber: string]'},
  // invalid
  invalidParamterForUser: {status: 400, message:'please, provide a valid phone number for the user. (max length: 11)'},
  invalidParamterForBirthday: {status: 400, message:'please, provide a valid date for birthday. (YYYY-MM-DD)'},
  invalidPhoneNumber: {status: 400, message:'please, provide valid phone number. (string, length = 11)'},
  invalidParamterForEmail: {status: 400, message:'please, provide valid email.'},
  // successful
  successfullyInsertedNewUsers: {status: 201, message: 'succesfully registered new User!'},
  // database errors
  ER_DUP_ENTRY: {status:400,message:'Email already in use.'}
};