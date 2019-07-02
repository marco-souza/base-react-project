import path from 'path'
import fs from 'fs'
import { config } from 'dotenv'

// Load .env
const prod = process.env.NODE_ENV === 'production'

config({ path: './config/.dev.env' })
prod && config({ path: './config/.prod.env' }) // overwrite dev configs

export function getVarEnv (variable) {
  const value = process.env[variable]
  const result = path.resolve(value)

  if (!value) return ''
  // check if result exists before return it
  if (!fs.existsSync(result)) return value

  return result
}
