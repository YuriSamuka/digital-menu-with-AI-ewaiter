import { Id, Model, RelationMappings } from 'objection';
import Base from './base';
import { Monster } from './monster.model';

export class Battle extends Base {
  id!: Id;
  monsterA!: Monster;
  monsterB!: Monster;
  winner!: Monster;

  static tableName = 'battle';

  static get relationMappings(): RelationMappings {
    return {
      monsterARelation:{
        relation: Model.BelongsToOneRelation,
        modelClass: Monster,
        join:{
          from: 'battle.monster_a_id',
          to: 'monster.id'
        }
      },
      monsterBRelation:{
        relation: Model.BelongsToOneRelation,
        modelClass: Monster,
        join:{
          from: 'battle.monster_b_id',
          to: 'monster.id'
        }
      },
      winnerRelation:{
        relation: Model.BelongsToOneRelation,
        modelClass: Monster,
        join:{
          from: 'battle.winner_id',
          to: 'monster.id'
        }
      },
    };
  }
}
