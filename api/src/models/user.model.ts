import { Id } from 'objection';
import Base from './base';

export class User extends Base {
    user_id!: Id;
    name!: string;
    password!: string;
    email!: string;
    role!: string;
    phone_number!: string;
    created_at!: Date;
    last_login_at!: Date;
    is_active!: boolean;
    restaurant_id?: Id;

    static tableName = 'users';

    static get idColumn(): string {
        return 'user_id';
    }

    static get jsonSchema(): object {
        return {
            type: 'object',
            required: ['name', 'password', 'email', 'role', 'phone_number'],
            properties: {
                user_id: { type: 'integer' },
                name: { type: 'string', minLength: 1 },
                password: { type: 'string', minLength: 1 },
                email: { type: 'string' },
                role: { type: 'string', minLength: 1 },
                phone_number: { type: 'string', minLength: 1 },
                created_at: { type: 'string' },
                last_login_at: { type: 'string' },
                is_active: { type: 'boolean' },
                restaurant_id: { type: ['integer', 'null'] },
            },
        };
    }
}