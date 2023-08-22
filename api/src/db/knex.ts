import { config } from '../config'
import { NodeEnv } from '../config'
import Knex from 'knex'
import knexConfig from '../../knexfile'

const envConnection = config.env === NodeEnv.DEV ? knexConfig[NodeEnv.DEV] : knexConfig[NodeEnv.PROD]
export default Knex(envConnection)