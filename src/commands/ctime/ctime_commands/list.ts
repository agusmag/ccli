import ora from "ora";

import { Builder, Handler } from '../ctime.types';
import * as outputs from '../ctime.outputs';

export const command: string = 'list';
export const aliases: Array<string> = ['ls'];
export const desc: string = 'List all supported timezones and abbreviations.';

export const builder: Builder = (yargs) => 
  yargs
    .usage('usage: $0 ctime list')
    .help('help')
    .example([
      ['$0 ctime list'],
      ['$0 ct ls']
    ])
    .wrap(null)

export const handler: Handler = async (argv) => {
	const spinner = ora({
		hideCursor: argv.quiet,
		spinner: 'clock'
	});

	spinner.start('Fetching supported timezones...');
    spinner.succeed();
    outputs.showTimezones();
    return;
};
