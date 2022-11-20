import RocketsTableData from '../../data/migrationData/tablesSchema/RocketsTableData';


export default class PopulationBusiness {
  public async populateRocketsTable(){
    return await new RocketsTableData().populateRocketsTable();
  }
}