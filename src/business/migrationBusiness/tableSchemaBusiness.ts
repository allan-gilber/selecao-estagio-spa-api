import RocketsTableData from '../../data/migrationData/tablesSchema/RocketsTableData';

export default class TableSchemaBusiness {
  public async createRocketsTableSchema(){
    return await new RocketsTableData().createRocketsTable();
  }

  public async createLaunchsTableSchema(){
    return await new RocketsTableData().createLaunchsTable();
  }
}