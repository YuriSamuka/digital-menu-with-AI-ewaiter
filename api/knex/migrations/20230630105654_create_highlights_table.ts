import { Knex } from 'knex';
import { Highlight } from '../../src/models';

export const up = async (knex: Knex): Promise<void> => {
    await knex.schema.createTable(Highlight.tableName, (table) => {
        table.increments('highlight_id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.date('start_date').notNullable();
        table.date('end_date').notNullable();
        table.integer('priority').notNullable();
        table
            .integer('restaurant_id')
            .unsigned()
            .notNullable()
            .references('restaurant_id')
            .inTable('restaurants');
        table.timestamps(true, true);
    });
};

export const down = async (knex: Knex): Promise<void> => {
    await knex.schema.dropTableIfExists(Highlight.tableName);
};
