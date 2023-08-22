import { Knex } from 'knex';
import { Product } from '../../src/models';

export const up = async (knex: Knex): Promise<void> => {
    await knex.schema.createTable(Product.tableName, (table) => {
        table.increments('product_id').primary();
        table.string('name').notNullable();
        table.string('description').notNullable();
        table.decimal('price', 10, 2).notNullable();
        table.integer('category_id').unsigned().notNullable();
        table.foreign('category_id').references('categories.category_id');
        table.integer('restaurant_id').unsigned().notNullable();
        table.foreign('restaurant_id').references('restaurants.restaurant_id');
        table.boolean('availability').notNullable().defaultTo(true);
        table.string('ingredients');
        table.string('preparation_time');
        table.string('special_notes');
        table.string('product_image_url');
        table.timestamp('created_at').defaultTo(knex.fn.now()).notNullable();
        table.timestamp('updated_at').defaultTo(knex.fn.now()).notNullable();
    });
};

export const down = async (knex: Knex): Promise<void> => {
    await knex.schema.dropTableIfExists(Product.tableName);
};
