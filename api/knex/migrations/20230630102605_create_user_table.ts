import { Knex } from 'knex';
import { User } from '../../src/models';

export const up = async (knex: Knex): Promise<void> => {
    await knex.schema.createTable(User.tableName, (table) => {
        table.increments('user_id').primary();
        table.string('name').notNullable();
        table.string('password').notNullable();
        table.string('email').notNullable();
        table.string('role').notNullable();
        table.string('phone_number').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('last_login_at').defaultTo(knex.fn.now()).notNullable();
        table.boolean('is_active').defaultTo(true).notNullable();
        table
            .integer('restaurant_id')
            .unsigned()
            .references('restaurant_id')
            .inTable('restaurants')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
};

export const down = async (knex: Knex): Promise<void> => {
    await knex.schema.dropTableIfExists(User.tableName);
};
