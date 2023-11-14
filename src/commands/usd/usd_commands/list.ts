import ora from "ora";

import { Builder, Handler } from '../usd.types';
import * as outputs from '../usd.outputs';
import { listConversionRates } from '../../../services/usdApi';

export const command: string = 'list';
export const aliases: Array<string> = ['ls'];
export const desc: string = 'List all the supported conversion rates for the usd.';

export const builder: Builder = (yargs) => 
  yargs
		.usage('usage: $0 usd list')
		.help('help')
		.example([
			['$0 usd list'],
			['$0 usd ls']
		])
    .wrap(null)

export const handler: Handler = async (argv) => {
	const spinner = ora({
		hideCursor: argv.quiet,
		spinner: 'clock'
	});

	spinner.start('Fetching conversion rates...');
	const conversions = await listConversionRates();
	spinner.succeed();

	outputs.listCurrencies(conversions);
};
