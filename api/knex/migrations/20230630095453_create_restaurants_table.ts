import { Knex } from 'knex';
import { Restaurant } from '../../src/models';

export const up = async (knex: Knex): Promise<void> => {
    await knex.schema.createTable(Restaurant.tableName, (table) => {
        table.increments('restaurant_id').primary();
        table.string('restaurant_name').notNullable();
        table.string('restaurant_address').notNullable();
        table.string('cuisine_type').notNullable();
        table.string('contact_number').notNullable();
        table.string('opening_time');
        table.string('closing_time');
        table.string('website');
        table.string('email');
        table.string('social_media_handles');
        table.string('description');
        table.float('rating');
        table.integer('seating_capacity');
        table.string('payment_methods');
        table.boolean('is_active').defaultTo(true).notNullable();
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
};

export const down = async (knex: Knex): Promise<void> => {
    await knex.schema.dropTableIfExists(Restaurant.tableName);
};
