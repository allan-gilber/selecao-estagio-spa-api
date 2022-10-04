import PopulationBusiness from '../../business/migrationBusiness/populationBusiness';
import TableSchemaBusiness from '../../business/migrationBusiness/tableSchemaBusiness';
import DataBase from '../../services/dataBase';

/* It's a class that creates a table schema and populates it with data */
export class MigrationController extends DataBase {
  public async startMigration(){
    try {
      console.clear();
      await new TableSchemaBusiness().createUsersTableSchema()
        .then(() => {
          console.log('Table Schema successfully created!');
        });
      await new PopulationBusiness().populateUsersTable().then(() => {
        console.log('all tables has been successfully populated!');
        process.exit();
      });
    } catch (error: any){
      console.log('error in MigrationControlle-r:', error);
      process.exit();
    } finally {
      this.closeConnection();
    }
    return;
  }
}

new MigrationController().startMigration();