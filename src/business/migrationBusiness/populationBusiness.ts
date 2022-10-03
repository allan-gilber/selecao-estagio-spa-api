import UsersTableData from '../../data/migrationData/tablesSchema/usersTableData';


export default class PopulationBusiness {
  public async populateUsersTable(){
    return await new UsersTableData().populateUsersTable();
  }
}