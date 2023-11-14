import ora from "ora";

import { Builder, Handler } from '../trans.types';
import * as outputs from '../trans.outputs';

export const command: string = 'list';
export const aliases: Array<string> = ['ls'];
export const desc: string = 'List all supported languages and abbreviations.';

export const builder: Builder = (yargs) => 
  yargs
    .usage('usage: $0 trans list')
    .help('help')
    .example([
      ['$0 trans list'],
      ['$0 ts ls']
    ])
    .wrap(null)

export const handler: Handler = async (argv) => {
	const spinner = ora({
		hideCursor: argv.quiet,
		spinner: 'clock'
	});

	spinner.start('Fetching supported languages...');
    spinner.succeed();
    outputs.showLanguages();
    return;
};
