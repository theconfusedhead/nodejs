const path = require('path');
console.log(path.sep)

const filePath = path.join('/content','subfolder','text.txt');
console.log(filePath);

const basefile = path.basename(filePath)
console.log(basefile);

const absolute = path.resolve(__dirname,'/content','subfolder','text.txt')
console.log(absolute)

// 1:10:00