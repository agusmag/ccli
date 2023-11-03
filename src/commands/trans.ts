import ora from 'ora'

import { Builder, Handler } from './trans.types';
import * as outputs from './trans.outputs';
import { baseOptions } from '../shared';

import { translate } from '@vitalets/google-translate-api';

export const command: string = 'trans';
export const aliases: Array<string> = ['t'];
export const desc: string = 'Translate words and phrases between supported languages.';

export const builder: Builder = (yargs) =>
  yargs
    .options({
      ...baseOptions,
      list: {
        alias: 'l',
        describe: 'List all supported languages.',
        type: 'boolean',
        default: false
      },
      from: {
        alias: 'f',
        describe: 'Specify the original language of the word or phrase to translate.',
        type: 'string'
      },
      to: {
        alias: 't',
        describe: 'Specify the language to translate the word or phrase into.',
        type: 'string',
        demandOption: true
      },
      body: {
        alias: 'b',
        describe: 'The word or phrase to translate.',
        type: 'string',
        demandOption: true
      }
    })
    .example([
      ['$0 trans --from en --to es --body "Hello World"'],
      ['$0 t -t en -b "Hola Mundo"']
    ]);

export const handler: Handler = async (argv) => {
  const spinner = ora({
    hideCursor: argv.quiet,
    spinner: 'clock'
  });

  const { list, from, to, body, json } = argv;

  if (list) {
    spinner.start('Fetching supported languages...');
    const { all } = await translate.languages();
    spinner.succeed();

    outputs.showLanguages();
    return;
  }

  spinner.start('Translating...');
  const { translatedBody } = await translate(body, {
    from: from ? from : 'auto',
    to: to
  });

  spinner.succeed();

  outputs.showTranslation(translatedBody);
};
