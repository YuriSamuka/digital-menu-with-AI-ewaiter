import { Model, Id } from 'objection'
import Base from './base'

export class Ingredient extends Base {
    static get tableName() {
        return 'ingredients'
    }

    static get idColumn() {
        return 'ingredient_id'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['name', 'exists'],
            properties: {
                ingredient_id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                description: { type: 'string' },
                exists: { type: 'boolean' },
            },
        }
    }

    readonly ingredient_id!: Id
    name!: string
    description?: string
    exists!: boolean
}