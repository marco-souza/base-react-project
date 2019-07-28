import path from 'path'
import fs from 'fs'

export function getVarEnv (variable) {
  const value = process.env[variable]
  const result = path.resolve(value)

  if (!value) return ''
  // check if result exists before return it
  if (!fs.existsSync(result)) return value

  return result
}
