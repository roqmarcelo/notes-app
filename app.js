const yargs = require('yargs')
const commands = require('./commands')

// Customize yargs version
yargs.version('1.1.0')

// Create commands
commands.forEach((command) => yargs.command(command))

yargs.parse()