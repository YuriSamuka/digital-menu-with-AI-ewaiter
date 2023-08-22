import { Model, Id, RelationMappings } from 'objection'
import Base from './base'
import { User } from './user.model'
import { Product } from './product.model'
import { Highlight } from './highlights.model'
import { Chat } from './chat.model'

export class Restaurant extends Base {

    readonly restaurant_id!: Id
    restaurant_name!: string
    restaurant_address!: string
    cuisine_type!: string
    contact_number!: string
    opening_time?: string
    closing_time?: string
    website?: string
    email?: string
    social_media_handles?: string
    description?: string
    rating?: number
    seating_capacity?: number
    payment_methods?: string

    static tableName = 'restaurants'

    static get idColumn(): string {
        return 'restaurant_id'
    }

    static get jsonSchema(): object {
        return {
            type: 'object',
            required: ['restaurant_name', 'restaurant_address', 'cuisine_type', 'contact_number'],
            properties: {
                restaurant_id: { type: 'integer' },
                restaurant_name: { type: 'string', minLength: 1 },
                restaurant_address: { type: 'string', minLength: 1 },
                cuisine_type: { type: 'string', minLength: 1 },
                contact_number: { type: 'string', minLength: 1 },
                opening_time: { type: 'string' },
                closing_time: { type: 'string' },
                website: { type: 'string' },
                email: { type: 'string' },
                social_media_handles: { type: 'string' },
                description: { type: 'string' },
                rating: { type: 'number', minimum: 0, maximum: 5 },
                seating_capacity: { type: 'integer', minimum: 0 },
                payment_methods: { type: 'string' },
            },
        }
    }

    static get relationMappings(): RelationMappings {
        return {
            users: {
                relation: Model.HasManyRelation,
                modelClass: User,
                join: {
                    from: 'restaurants.restaurant_id',
                    to: 'users.restaurant_id',
                },
            },
            products: {
                relation: Model.HasManyRelation,
                modelClass: Product,
                join: {
                    from: 'restaurants.restaurant_id',
                    to: 'products.restaurant_id',
                },
            },
            highlights: {
                relation: Model.HasManyRelation,
                modelClass: Highlight,
                join: {
                    from: 'restaurants.restaurant_id',
                    to: 'highlights.restaurant_id',
                },
            },
            chats: {
                relation: Model.HasManyRelation,
                modelClass: Chat,
                join: {
                    from: 'restaurants.restaurant_id',
                    to: 'chats.restaurant_id',
                },
            },
        };
    }
}
