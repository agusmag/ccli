#! /usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import handleError from './handleError';

var argv = yargs(hideBin(process.argv))
  // Use the commands directory to scaffold.
  .commandDir('commands/ctime')
  .commandDir('commands/trans')
  .commandDir('commands/usd')
  // Default command if none supplied - shows help.
  .usage('usage: $0 <command>')
  .help('help')
  .wrap(null)
  // Enable strict mode.
  .demandCommand()
  // Useful aliases.
  .alias({ h: 'help' })
  // Be nice.
  .epilogue('For more information, check https://docs.glitchguardians.site')
  // Handle failures.
  .fail(handleError)
  .argv;
