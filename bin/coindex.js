#!/usr/bin/env node
const program = require('commander')
const pkg = require('../package.json')
program
    .version(pkg.version)
    .parse(process.argv)


console.log("Hello, this is coindex")
