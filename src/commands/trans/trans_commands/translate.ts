import ora from "ora";
import { translate } from '@vitalets/google-translate-api';

import { Builder, Handler } from '../trans.types';
import * as outputs from '../trans.outputs';

export const command: string = 'translate';
export const aliases: Array<string> = ['ts'];
export const desc: string = 'Translate words and phrases between supported languages.';

export const builder: Builder = (yargs) => 
  yargs
    .usage('usage: $0 trans translate [options]')
    .options({
        from: {
          alias: 'f',
          describe: 'Specify the original language of the word or phrase to translate.',
          type: 'string'
        },
        to: {
          alias: 't',
          describe: 'Specify the language to translate the word or phrase into.',
          type: 'string'
        },
        body: {
          alias: 'b',
          describe: 'The word or phrase to translate.',
          type: 'string'
        }
      })
    .help('help')
    .example([
      ['$0 trans translate --from en --to es --body "Hello World"'],
      ['$0 ts ts -t en -b "Hola Mundo"']
    ])
    .wrap(null)

export const handler: Handler = async (argv) => {
	const spinner = ora({
		hideCursor: argv.quiet,
		spinner: 'clock'
	});

	const { from: fromLanguage, to: toLanguage, body: bodyPayload, json } = argv;

  if (bodyPayload) {
    spinner.start('Translating...');
    const { text } = await translate(`${bodyPayload}`, {
      from: fromLanguage ? `${fromLanguage}` : 'auto',
      to: `${toLanguage}`
    });

    spinner.succeed();
  
    outputs.showTranslation(text);
  }
};
