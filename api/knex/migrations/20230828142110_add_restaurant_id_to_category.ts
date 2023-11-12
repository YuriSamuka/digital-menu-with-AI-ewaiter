import { Knex } from 'knex'
import { Category, Restaurant } from '../../src/models'

export const up = async (knex: Knex): Promise<void> => {
    await knex.schema.table(Category.tableName, (table) => {
        table.integer('restaurant_id').unsigned().references('restaurant_id').inTable(Restaurant.tableName).onDelete('CASCADE')
    })
}

export const down = async (knex: Knex): Promise<void> => {
    await knex.schema.table(Category.tableName, (table) => {
        table.dropColumn('restaurant_id')
    })
}
