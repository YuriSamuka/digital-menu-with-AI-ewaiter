import { Model, Id, RelationMappings } from 'objection'
import Base from './base'
import { Category } from './category.model'
import { Highlight } from './highlights.model'
import { Ingredient } from './ingredient.model'

export class Product extends Base {
  readonly product_id!: Id
  name!: string
  description!: string
  price!: number
  category_id!: number
  product_image_url?: string
  availability?: boolean
  ingredients?: string
  preparation_time?: string
  special_notes?: string
  restaurant_id?: number

  static tableName = 'products'

  static get idColumn(): string {
    return 'product_id'
  }

  static get jsonSchema(): object {
    return {
      type: 'object',
      required: ['name', 'description', 'price', 'category_id'],
      properties: {
        product_id: { type: 'integer' },
        name: { type: 'string', minLength: 1 },
        description: { type: 'string', minLength: 1 },
        price: { type: 'number', minimum: 0 },
        category_id: { type: 'integer' },
        product_image_url: { type: 'string' },
        availability: { type: 'boolean' },
        ingredients: { type: 'string' },
        preparation_time: { type: 'string' },
        special_notes: { type: 'string' },
        restaurant_id: { type: ['integer', 'null'] },
      },
    }
  }

  static get relationMappings(): RelationMappings {
    return {
      category: {
        relation: Model.BelongsToOneRelation,
        modelClass: Category,
        join: {
          from: 'products.category_id',
          to: 'categories.category_id',
        },
      },
      highlights: {
        relation: Model.ManyToManyRelation,
        modelClass: Highlight,
        join: {
          from: 'products.product_id',
          through: {
            from: 'product_highlight.product_id',
            to: 'product_highlight.highlight_id',
          },
          to: 'highlights.highlight_id',
        },
      },
      ingredients: {
        relation: Model.ManyToManyRelation,
        modelClass: Ingredient,
        join: {
          from: 'products.product_id',
          through: {
            from: 'product_ingredient.product_id',
            to: 'product_ingredient.ingredient_id',
          },
          to: 'ingredients.ingredient_id',
        },
      },
    }
  }
}