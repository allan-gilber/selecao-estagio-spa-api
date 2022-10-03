import DataBase from '../../../services/DataBase';

export default class UsersTableData extends DataBase {
  public async createUsersTable(){
    return await this.connection().schema.createTable('users', (table: any) => {
      table.increments('user_id').primary();
      table.string('user_name').notNullable();
      table.string('user_email').notNullable().unique();
      table.date('user_birthday').notNullable();
      table.string('user_phone_number', 11).notNullable();
    }).then(() => console.log('Table "users" successful created!'));
  }

  async populateUsersTable(){
    const userMockData =  {
      'user_name': 'Fulano Beltrano de Oliveira da Silva',
      'user_email': 'fulanobos@gmail.com',
      'user_birthday': '1995/10/13',
      'user_phone_number': '31996661111'
    };

    return await this.connection().table('users').insert(userMockData).then(() => console.log('Table "users" successful populated!'));
  }
}