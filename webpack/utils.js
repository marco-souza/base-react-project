import path from 'path'
import { config } from 'dotenv'

// Load .env
const prod = process.env.NODE_ENV === 'production'

config({ path: './config/.dev.env' })
prod && config({ path: './config/.prod.env' }) // overwrite dev configs

export function getVarEnv (variable) {
  const value = process.env[variable]
  if (!value) return ''

  return path.resolve(value)
}
