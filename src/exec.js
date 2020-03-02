const shell = require('shelljs')

exports.exec = (
  cmd,
  errorMessage = 'Something went wrong while running the script',
) => {
  if (shell.exec(cmd).code !== 0) {
    shell.echo(`Error: ${errorMessage}`)
    shell.exit(1)
  } else shell.exit(0)
}
