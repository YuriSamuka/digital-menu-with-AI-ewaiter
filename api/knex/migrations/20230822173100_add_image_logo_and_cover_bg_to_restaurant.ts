import { Knex } from 'knex'
import { Restaurant } from '../../src/models'

export const up = async (knex: Knex): Promise<void> => {
    await knex.schema.table(Restaurant.tableName, (table) => {
        table.string('image_logo_url')
        table.string('cover_bg_url')
    })
}

export const down = async (knex: Knex): Promise<void> => {
    await knex.schema.table(Restaurant.tableName, (table) => {
        table.dropColumn('image_logo_url')
        table.dropColumn('cover_bg_url')
    })
}