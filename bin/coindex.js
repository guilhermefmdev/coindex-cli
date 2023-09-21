#!/usr/bin/env node
const program = require('commander')
const pkg = require('../package.json')
const colors = require('colors')

program
    .version(pkg.version)
    .command('key', 'Manage API Key -- https://www.coinapi.io/')
    .command('check', 'Check Coin Price Info')
    .parse(process.argv)
