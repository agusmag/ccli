import { Builder, Handler } from './ctime.types';

export const command: string = 'ctime';
export const aliases: Array<string> = ['ct'];
export const desc: string = 'Convert time between supported timezones.';

export const builder: Builder = (yargs) => 
  yargs
    .commandDir('ctime_commands')
    .usage('usage: $0 ctime <command> [options]')
    .help('help')
    .example('$0 ctime list', 'List all supported timezones.')
    .example('$0 ctime convert <options>', 'Convert a given time to a given timezone.')
    .wrap(null);

export const handler: Handler = async (argv) => {};
