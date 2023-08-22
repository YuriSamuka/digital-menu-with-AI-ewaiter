import { Knex } from 'knex';
import { Ingredient } from '../../src/models';

export const up = async (knex: Knex): Promise<void> => {
    await knex.schema.createTable(Ingredient.tableName, (table) => {
        table.increments('ingredient_id').primary();
        table.string('name').notNullable();
        table.string('description');
        table.boolean('exists').notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
};

export const down = async (knex: Knex): Promise<void> => {
    await knex.schema.dropTableIfExists(Ingredient.tableName);
};
