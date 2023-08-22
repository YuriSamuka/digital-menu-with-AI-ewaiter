import { Knex } from 'knex';
import { ChatMessage } from '../../src/models';

export const up = async (knex: Knex): Promise<void> => {
    await knex.schema.createTable(ChatMessage.tableName, (table) => {
        table.increments('message_id').primary();
        table.enum('sender', ['customer', 'chatbot']).notNullable();
        table.timestamp('timestamp').defaultTo(knex.fn.now()).notNullable();
        table.string('content').notNullable();
        table
            .integer('chat_id')
            .unsigned()
            .notNullable()
            .references('chat_id')
            .inTable('chats')
            .onDelete('CASCADE')
            .onUpdate('CASCADE');
    });
};

export const down = async (knex: Knex): Promise<void> => {
    await knex.schema.dropTableIfExists(ChatMessage.tableName);
};
