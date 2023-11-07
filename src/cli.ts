#! /usr/bin/env node

import yargs from 'yargs';
import { hideBin } from 'yargs/helpers';
import handleError from './handleError';

yargs(hideBin(process.argv))
  // Use the commands directory to scaffold.
  .commandDir('commands')
  .commandDir('commands/ctime')
  // Default command if none supplied - shows help.
  .command(
    '$0',
    'Custom CLI Tool',
    () => undefined,
    () => {
      yargs.showHelp();
    },
  )
  // Enable strict mode.
  .strict()
  // Useful aliases.
  .alias({ h: 'help' })
  // Be nice.
  .epilogue('For more information, check https://docs.glitchguardians.site')
  // Handle failures.
  .fail(handleError)
  .argv;
