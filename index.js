//jshint esversion:6

const fs = require('node:fs');

fs.copyFileSync('file1.txt', 'file2.txt');  // Use the node native module to copy file with the file system
