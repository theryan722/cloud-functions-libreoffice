const path = require('path')

const defaultArgs = [
  '--headless',
  '--invisible',
  '--nodefault',
  '--view',
  '--nolockcheck',
  '--nologo',
  '--norestore'
]

const executablePath = path.normalize(
  path.join(__dirname, '..', 'bin', 'instdir', 'program', 'soffice')
)

module.exports = { defaultArgs, executablePath }
