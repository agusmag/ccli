import ora from "ora";

import { Builder, Handler } from '../usd.types';
import * as outputs from '../usd.outputs';
import { getConversionRate } from '../../../services/usdApi';

export const command: string = 'get <usdType>';
export const aliases: Array<string> = ['g'];
export const desc: string = 'Get the supported conversion rate for the Argentine peso and the US Dollar';

export const builder: Builder = (yargs) => 
  yargs
    .usage('usage: $0 usd get <usdType>')
    .help('help')
		.example([
			['$0 usd get blue'],
			['$0 usd g ccl']
	  ])
    .wrap(null)

export const handler: Handler = async (argv) => {
	const spinner = ora({
		hideCursor: argv.quiet,
		spinner: 'clock'
	});

	const { usdType: usdTypeName, json } = argv;

	if (usdTypeName) {
		const formattedUsdTypeName: string = usdTypeName.toLocaleLowerCase() === "ccl" ? "contadoconliqui" : `${usdTypeName}`;

		spinner.start('Fetching conversion rate...');
		const conversion = await getConversionRate(formattedUsdTypeName.toLocaleLowerCase());
		spinner.succeed();

		outputs.getCurrency(conversion);
		return;
	}
};
