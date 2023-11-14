import ora from 'ora'

import { Builder, Handler } from './trans.types';

export const command: string = 'trans';
export const aliases: Array<string> = ['t'];
export const desc: string = 'Translate words and phrases between supported languages.';

export const builder: Builder = (yargs) => 
  yargs
    .commandDir('trans_commands')
    .usage('usage: $0 trans <command> [options]')
    .help('help')
    .example('$0 trans list', 'List all supported languages.')
    .example('$0 trans translate <options>', 'Translate a given word or phrase.')
    .wrap(null);

export const handler: Handler = async (argv) => {};
