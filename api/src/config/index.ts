import * as dotenv from 'dotenv'

dotenv.config()

export enum NodeEnv {
  TEST = 'test',
  DEV = 'development',
  PROD = 'production'
}

interface PostgresConnection {
  host: string
  port: number
  database: string
  user: string
  password: string
}

interface Env {
  env: NodeEnv
  devConnection: PostgresConnection
  knexDebug: boolean
  port: number
  defaultPage: number
  defaultPageSize: number
}

export const config: Env = {
  env: (process.env.NODE_ENV as NodeEnv) || NodeEnv.DEV,
  devConnection: {
    host: process.env.DB_HOST || 'localhost',
    port: Number(process.env.DB_PORT) || 5432,
    database: process.env.DB_NAME as string,
    user: process.env.DB_USER as string,
    password: process.env.DB_PASSWORD as string,
  },
  knexDebug: process.env.KNEX_DEBUG === 'true',
  port: Number(process.env.APP_PORT) || 5000,
  defaultPage: 0,
  defaultPageSize: 10,
}

