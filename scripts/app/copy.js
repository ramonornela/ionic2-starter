#!/usr/bin/env node

var shelljs       = require('shelljs');
var path = require('path');
var npmConfigJson = JSON.parse(process.env.npm_config_argv).original;

var folderTmp = path.join(npmConfigJson[2], '.tmp');

shelljs.rm('-rf', path.join(npmConfigJson[2], '*'));
shelljs.cp('-R', './', folderTmp);
shelljs.rm('-rf', path.join(folderTmp, '.git'));
shelljs.cp('-R', folderTmp + '/.', npmConfigJson[2]);
shelljs.rm('-rf', folderTmp);
