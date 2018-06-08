const path = require('path')
const { execSync } = require('child_process')
const shellescape = require('shell-escape')

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

function convertToPdf(inputFile, outputDir) {
  const convertCmd = [
    executablePath,
    ...defaultArgs,
    '--convert-to',
    'pdf',
    inputFile,
    '--outdir',
    outputDir
  ]
  execSync(shellescape(convertCmd))
}

module.exports = { defaultArgs, executablePath, convertToPdf }
