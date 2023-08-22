import { Model, Id, RelationMappings } from 'objection'
import Base from './base'
import { Chat } from './chat.model'

export class ChatMessage extends Base {
    static tableName = 'chat_messages'

    static get idColumn(): string {
        return 'message_id'
    }

    static get jsonSchema(): object {
        return {
            type: 'object',
            required: ['sender', 'timestamp', 'content', 'chat_id'],
            properties: {
                message_id: { type: 'integer' },
                sender: { type: 'string', enum: ['customer', 'chatbot'] },
                timestamp: { type: 'string', format: 'date-time' },
                content: { type: 'string', minLength: 1 },
                chat_id: { type: 'integer' },
            },
        }
    }

    readonly message_id!: Id
    sender!: 'customer' | 'chatbot'
    timestamp!: Date
    content!: string
    chat_id!: number

    static get relationMappings(): RelationMappings {
        return {
            chat: {
                relation: Model.BelongsToOneRelation,
                modelClass: Chat,
                join: {
                    from: 'chat_messages.chat_id',
                    to: 'chats.chat_id',
                },
            },
        }
    }
}