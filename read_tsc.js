const fs = require('fs');
const out = fs.readFileSync('tsc_output.txt', 'utf16le');
console.log(out);
