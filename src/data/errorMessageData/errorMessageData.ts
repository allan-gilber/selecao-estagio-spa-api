import {errorMessageObject} from '../../model/errorMessageModels';

export const errorMessagesData: errorMessageObject  = {
  genericError: {status: 500, message:'oops, something went wrong!'},
  // empty/incomplete
  emptyParamtersForNewUser: {status: 400, message:'please, provide a valid paramters. [name: string, email: string, birthday: date, phonenumber: string]'},
  // invalid
  invalidParamterForUser: {status: 400, message:'please, provide a valid phone number for the user (max length: 11).'},
  invalidUserName: {status: 400, message:'please, provide valid User name to be modified.'},
  // successful
  successfullyInsertedNewUser: {status: 201, message: 'succesfully inserted new User!'},
  // database errors
  ER_DUP_ENTRY: {status:400,message:'Email already in use.'}
};