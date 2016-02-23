#! /usr/bin/env node

var json = require('./')

process.stdin
  .pipe(json.parse(process.argv[2]))
  .pipe(json.stringify('[', ',\n', ']\n', 2))
  .pipe(process.stdout)
