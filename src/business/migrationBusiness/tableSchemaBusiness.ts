import UsersTableData from '../../data/migrationData/tablesSchema/usersTableData';

export default class TableSchemaBusiness {
  public async createUsersTableSchema(){
    return await new UsersTableData().createUsersTable();
  }
}