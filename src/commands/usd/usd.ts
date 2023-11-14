import { Builder, Handler } from './usd.types';

export const command: string = 'usd <command> [options]';
export const aliases: Array<string> = [];
export const desc: string = 'List or Get the supported conversion rates for the Argentine peso and the US Dollar.';

export const builder: Builder = (yargs) => 
  yargs
    .commandDir('usd_commands')
    .usage('usage: $0 usd <command> [options]')
    .help('help')
    .example('$0 usd list', 'List all the supported conversion rates for the usd.')
    .example('$0 usd get blue', 'Get the supported conversion rate for the Argentine peso and the US Dollar.')
    .wrap(null)

export const handler: Handler = async (argv) => {};
