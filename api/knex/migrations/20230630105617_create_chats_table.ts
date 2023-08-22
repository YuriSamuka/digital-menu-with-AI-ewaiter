import { Knex } from 'knex';
import { Chat } from '../../src/models';

export const up = async (knex: Knex): Promise<void> => {
  await knex.schema.createTable(Chat.tableName, (table) => {
    table.increments('chat_id').primary();
    table.string('phone_number').notNullable();
    table.integer('restaurant_id').unsigned().nullable();

    table.foreign('restaurant_id').references('restaurant_id').inTable('restaurants').onDelete('SET NULL');

    table.timestamps(true, true);
  });
};

export const down = async (knex: Knex): Promise<void> => {
  await knex.schema.dropTableIfExists(Chat.tableName);
};