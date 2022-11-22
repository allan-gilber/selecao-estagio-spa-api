import PopulationBusiness from '../../business/migrationBusiness/PopulationBusiness';
import TableSchemaBusiness from '../../business/migrationBusiness/tableSchemaBusiness';
import DataBase from '../../services/DataBase';
import MessageErrorsController from '../MessageErrorsController/MessageErrorsController';

/* It's a class that creates a table schema and populates it with data */
export class MigrationController extends DataBase {
  public async startMigration(){
    try {
      console.clear();
      // Creating Table Schema
      const tableSchemaBuilder = new TableSchemaBusiness();
      await tableSchemaBuilder.createRocketsTableSchema()
        .then(async () => {
          return await tableSchemaBuilder.createLaunchsTableSchema();
        })
        .then(() => {
          console.log('Table Schema successfully created!');
        });

      // Populating tables
      const populator = new PopulationBusiness();
      await  populator.populateRocketsTable()
        .then(async () => {
          console.log('chegou');
          await populator.populateLaunchsTable().then(() => {
            console.log('Table Schema successfully created!');
          });
        })
        .then(() => {
          console.log('all tables has been successfully populated!');
          process.exit();
        });
    } catch (error: any){
      const messageCotroller = new MessageErrorsController();
      console.log('333', error);
      if (error?.code === 'ER_DUP_ENTRY') return console.log(`Error in PopulationBusiness: ${error.sqlMessage}\n`, messageCotroller.getErrorMessage('ER_DUP_ENTRY_FOR_POPULATING_ROCKETS_TABLE').message);
      console.log('Error in MigrationController: ', messageCotroller.getErrorMessage(error.code).message);
      process.exit();
    } finally {
      this.closeConnection();
    }
    return;
  }
}

new MigrationController().startMigration();