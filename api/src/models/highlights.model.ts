import { Model, Id } from 'objection'
import Base from './base'

export class Highlight extends Base {

    readonly highlight_id!: Id
    name!: string
    description!: string
    start_date!: string
    end_date!: string
    priority!: number
    restaurant_id?: number

    static get tableName() {
        return 'highlights'
    }

    static get idColumn() {
        return 'highlight_id'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'description', 'start_date', 'end_date', 'priority'],
            properties: {
                highlight_id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                description: { type: 'string', minLength: 1 },
                start_date: { type: 'string', format: 'date' },
                end_date: { type: 'string', format: 'date' },
                priority: { type: 'integer', minimum: 0 },
                restaurant_id: { type: ['integer', 'null'] },
            },
        }
    }
}