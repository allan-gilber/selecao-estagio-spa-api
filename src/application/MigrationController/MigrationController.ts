import PopulationBusiness from '../../business/migrationBusiness/PopulationBusiness';
import TableSchemaBusiness from '../../business/migrationBusiness/tableSchemaBusiness';
import DataBase from '../../services/DataBase';

/* It's a class that creates a table schema and populates it with data */
export class MigrationController extends DataBase {
  public async startMigration(){
    try {
      console.clear();
      await new TableSchemaBusiness().createRocketsTableSchema()
        .then(() => {
          console.log('Table Schema successfully created!');
        });
      await new PopulationBusiness().populateRocketsTable().then(() => {
        console.log('all tables has been successfully populated!');
        process.exit();
      });
    } catch (error: any){
      console.log('error in MigrationController:', error);
      process.exit();
    } finally {
      this.closeConnection();
    }
    return;
  }
}

new MigrationController().startMigration();