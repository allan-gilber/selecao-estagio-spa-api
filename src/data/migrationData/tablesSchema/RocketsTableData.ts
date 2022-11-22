import MessageErrorsController from '../../../application/MessageErrorsController/MessageErrorsController';
import {rocketDataInfo} from '../../../model/rocketsInfoModels';
import {AxiosServices} from '../../../services/AxiosServices';
import DataBase from '../../../services/DataBase';

export default class RocketsTableData extends DataBase {
  // Rockets methods
  public async createRocketsTable(){
    try {
      return await this.connection().schema.createTable('rockets', (table: any) => {
        table.string('rocket_id').primary();
        table.string('rocket_name').notNullable();
      }).then(() => console.log('Table "rockets" successful created!'));
    }
    catch (error: any){
      if (error.code === 'ER_TABLE_EXISTS_ERROR') console.log( new MessageErrorsController().getErrorMessage('ROCKETS_TABLE_ALREADY_EXISTS').message);
      else {
        throw `createRocketsTable: ${error?.code || error?.message}`;
      }
    }
  }

  public async populateRocketsTable(){
    const rocketData = await new AxiosServices().getRocketsData();
    if (!rocketData) return new MessageErrorsController().getErrorMessage('EMPTY_RESPONSE_FOR_ROCKETS_DATA_GRAB');
    await this.insertNewRockets(rocketData);
  }

  private async insertNewRockets(rocketData: rocketDataInfo[]){
    return await this.connection().table('rockets').insert(rocketData).then(() => console.log('Table "rockets" successful populated!'));
  }

  // Launch methods

  public async createLaunchsTable(){
    const boolean = [false, true];
    try {
      return await this.connection().schema.createTable('launchs', (table: any) => {
        table.string('launch_id').primary();
        table.string('launch_library_id');
        table.string('launch_rocket_id');
        table.string('fairings');
        table.string('links', 500);
        table.string('static_fire_date_utc');
        table.string('static_fire_date_unix');
        table.enu('net', boolean);
        table.integer('window');
        table.enu('success', boolean);
        table.string('failures');
        table.string('details');
        table.string('crew');
        table.string('ships');
        table.string('capsules');
        table.string('payloads');
        table.string('launchpad');
        table.integer('flight_number');
        table.string('launch_misson_name');
        table.string('date_utc');
        table.string('date_unix');
        table.string('date_local');
        table.string('date_precision');
        table.enu('upcoming', boolean);
        table.string('cores');
        table.enu('auto_update', boolean);
        table.enu('tbd', boolean);
      }).then(() => console.log('Table "launchs" successful created!'));
    }
    catch (error: any){
      if (error.code === 'ER_TABLE_EXISTS_ERROR') return console.log( new MessageErrorsController().getErrorMessage('LAUNCHS_TABLE_ALREADY_EXISTS').message);
      throw `Error in createLaunchsTable: ${error?.code || error?.message}`;
    }
  }

  public async populateLaunchsTable() {
    return await new AxiosServices().getLaunchsData().then(async (launchData: any) => {
      console.log('return: ', launchData[0].length);
      if (!launchData[0]) return new MessageErrorsController().getErrorMessage('EMPTY_RESPONSE_FOR_LAUNCHS_DATA_GRAB');

      return await this.insertNewLaunchs(launchData[0]);
    });
  }

  private async insertNewLaunchs(rocketData: any){
    console.log('block2', rocketData.length);
    await Promise.all([ await rocketData.forEach( async (data: any) => {
      console.log(' data:', data);
      return await this.connection().table('launchs').insert(data);}) ])
      .then(a => console.log('Table "launchs" successful populated!', a));
  }
}