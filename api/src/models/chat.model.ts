import { Model, Id } from 'objection'
import Base from './base'

export class Chat extends Base {

    readonly chat_id!: Id
    phone_number!: string
    restaurant_id?: number

    static get tableName() {
        return 'chats'
    }

    static get idColumn() {
        return 'chat_id'
    }

    static get jsonSchema() {
        return {
            type: 'object',
            required: ['phone_number'],
            properties: {
                chat_id: { type: 'integer' },
                phone_number: { type: 'string', minLength: 1 },
                restaurant_id: { type: ['integer', 'null'] },
            },
        }
    }
}