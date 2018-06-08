const fs = require('fs');
const path = require('path');
const tar = require('tar-fs');
const {decompressStream} = require('iltorb');

const binDir = path.join(__dirname, '..', 'bin');
const archivePath = path.join(binDir, 'lo.tar.br');
const execPath = path.join(binDir, 'instdir', 'program', 'soffice');
const source = fs.createReadStream(archivePath);
const target = tar.extract(binDir);

const throwError = error => {
  throw error;
};
source.on('error', throwError);
target.on('error', throwError);
target.on('finish', () => fs.chmodSync(execPath, '0755'));

console.log('Extracting LibreOffice archive...');
source.pipe(decompressStream()).pipe(target);
console.log('LibreOffice archive was succesfully extracted');
