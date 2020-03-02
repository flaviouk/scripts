#!/usr/bin/env node

const program = require('commander')

const { formatAll, formatCheck } = require('../src/format')
const { exec } = require('../src/exec')

const CMD = {
  FORMAT_ALL: 'format:all',
  FORMAT_CHECK: 'format:check',

  TS_CHECK: 'ts:check',
}

program
  .option('-d, --debug', 'output extra debugging')

  .option(`--${CMD.FORMAT_ALL}`, 'Format all files with prettier')
  .option(
    `--${CMD.FORMAT_CHECK}`,
    'Check formatting of all files with prettier',
  )

  .option(`--${CMD.TS_CHECK}`, 'Check typescript for errors')

program.parse(process.argv)

if (program.debug) console.log(program.opts())

switch (true) {
  case program[CMD.FORMAT_ALL]:
    return formatAll()
  case program[CMD.FORMAT_CHECK]:
    return formatCheck()

  case program[CMD.TS_CHECK]:
    return exec('yarn run tsc --p ./tsconfig.json --noEmit')

  default:
    throw new Error('No valid argument specified')
}
