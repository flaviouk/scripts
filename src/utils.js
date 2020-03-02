const path = require('path')

exports.checkForFile = async fileName => {
  try {
    const file = require(path.join(process.cwd(), fileName))
    return Boolean(file)
  } catch (e) {
    return false
  }
}

exports.getPackagePath = packageName =>
  path.dirname(require.resolve(packageName))
