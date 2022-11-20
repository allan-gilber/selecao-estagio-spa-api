import MessageErrorsController from '../../../application/errorsControllers/MessageErrorsController';
import {rocketDataInfo} from '../../../model/RocketsInfoModels';
import {AxiosServices} from '../../../services/AxiosServices';
import DataBase from '../../../services/DataBase';

export default class RocketsTableData extends DataBase {
  public async createRocketsTable(){
    try {
      return await this.connection().schema.createTable('rockets', (table: any) => {
        table.string('rocket_id').primary();
        table.string('rocket_name').notNullable();
      }).then(() => console.log('Table "rockets" successful created!'));
    }
    catch (error: any){
      if (error.code === 'ER_TABLE_EXISTS_ERROR') console.log('Error in createRocketsTable: failure to created new table (table already exists). Proceeding to populationbusiness of the table...');
      else {
        throw `Error in createRocketsTable: ${error?.code || error?.message}`;
      }
    }
  }

  public async populateRocketsTable(){
    const rocketData = await new AxiosServices().getRocketsData();
    if (!rocketData) return new MessageErrorsController().getErrorMessage('genericError');

    console.log('teste: ', rocketData);
    this.inserNewRockets(rocketData);
  }

  public async inserNewRockets(rocketData: rocketDataInfo[]){
    try {
      return await this.connection().table('rockets').insert(rocketData).then(() => console.log('Table "users" successful populated!'));
    } catch (error: any){
      console.log('error in insertNewRockets: ', error?.code || error?.message);
      throw 'genericError';
    }
  }
}