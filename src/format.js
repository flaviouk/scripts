const { exec } = require('./exec')
const { getPackagePath } = require('./utils')

const fileTypes = ['js', 'jsx', 'ts', 'tsx', 'json', 'md', 'css'].join(',')
const prettierPath = getPackagePath('@imflavio/prettier-config')

const glob = `**/*.{${fileTypes}}`
const logLevel = '--loglevel warn'
const config = `--config ${prettierPath}/index.js`
const ignore = `--ignore-path ${prettierPath}/.prettierignore`

const baseCmd = `yarn run prettier '${glob}' ${logLevel} ${config} ${ignore}`

const ERROR_MESSAGE = 'Formatting script failed'

exports.formatAll = () => exec(`${baseCmd} --write`, ERROR_MESSAGE)

exports.formatCheck = () => exec(`${baseCmd} --check`, ERROR_MESSAGE)
