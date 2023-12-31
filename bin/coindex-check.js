const program = require('commander')
const check = require('../commands/check')
const colors = require('colors')
program
    .command('price')
    .description('Check price of coins')
    .option('--coin <type>', 'Add specific coin types in CSV format', 'BTC,ETH,XRP',)
    .action(cmd => check.price(cmd))

program.parse(process.argv)