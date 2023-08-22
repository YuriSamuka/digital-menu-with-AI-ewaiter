import { Model, Id } from 'objection'
import Base from './base'

export class Category extends Base {
    static get tableName() {
        return 'categories'
    }

    static get idColumn() {
        return 'category_id'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'description', 'display_order'],
            properties: {
                category_id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                description: { type: 'string', minLength: 1 },
                display_order: { type: 'integer', minimum: 0 },
                image_url: { type: ['string', 'null'] },
            },
        }
    }

    readonly category_id!: Id
    name!: string
    description!: string
    display_order!: number
    image_url?: string | null
}