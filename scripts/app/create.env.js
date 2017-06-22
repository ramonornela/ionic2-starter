#!/usr/bin/env node

var fs = require('fs');

if (fs.existsSync('./src/app/app.env.ts')) {
  return;
}

var content = fs.readFileSync('./src/app/app.env.ts.skel');

fs.writeFile('./src/app/app.env.ts', content.toString(), function (err) {
  if (err) {
    return console.error(err);
  }
});
