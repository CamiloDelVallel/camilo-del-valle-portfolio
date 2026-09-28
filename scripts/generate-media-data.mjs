import { mkdirSync, readFileSync, writeFileSync } from 'node:fs'
import { dirname, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const root = resolve(dirname(fileURLToPath(import.meta.url)), '..')
const assets = [
  ['portrait', 'image/jpeg', 'source-media/camilo-linkedin.jpg'],
  ['operationsDashboard', 'image/webp', 'source-media/dashboard-operations.webp'],
  ['learningDashboard', 'image/webp', 'source-media/dashboard-learning.webp'],
  ['cvSpanish', 'application/pdf', 'source-media/Camilo-Del-Valle-CV-ES.pdf'],
  ['cvEnglish', 'application/pdf', 'source-media/Camilo-Del-Valle-CV-EN.pdf'],
]

const mediaDirectory = resolve(root, 'src/media')
mkdirSync(mediaDirectory, { recursive: true })

for (const [name, mime, path] of assets) {
  const base64 = readFileSync(resolve(root, path)).toString('base64')
  writeFileSync(
    resolve(mediaDirectory, `${name}.js`),
    `export default 'data:${mime};base64,${base64}'\n`,
    'utf8',
  )
}

const index = assets
  .map(([name]) => `export { default as ${name} } from './${name}.js'`)
  .join('\n')
writeFileSync(resolve(mediaDirectory, 'index.js'), `${index}\n`, 'utf8')
