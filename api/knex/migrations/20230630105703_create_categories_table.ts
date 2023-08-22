import { Knex } from 'knex';
import { Category } from '../../src/models';

export const up = async (knex: Knex): Promise<void> => {
    await knex.schema.createTable(Category.tableName, (table) => {
        table.increments('category_id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.integer('display_order').notNullable();
        table.string('image_url').nullable();
        table.timestamps(true, true);
    });
};

export const down = async (knex: Knex): Promise<void> => {
    await knex.schema.dropTableIfExists(Category.tableName);
};
