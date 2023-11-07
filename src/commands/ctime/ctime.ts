import ora from 'ora'
import moment from 'moment-timezone';

import { Builder, Handler } from './ctime.types';
import * as outputs from './ctime.outputs';
import { baseOptions } from '../../shared';
import { parseTimezone } from '../../util';

export const command: string = 'ctime';
export const aliases: Array<string> = ['ct'];
export const desc: string = 'Convert time between supported timezones.';

export const builder: Builder = (yargs) =>
  yargs
    .options({
      ...baseOptions,
      list: {
        alias: 'l',
        describe: 'List all supported timezones and abbreviations.',
        type: 'boolean'
      },
      from: {
        alias: 'f',
        describe: 'Specify the origin timezone of the time.',
        type: 'string'
      },
      to: {
        alias: 't',
        describe: 'Specify the target timezone to convert the time.',
        type: 'string'
      },
      specific: {
        alias: 's',
        describe: 'The hour to convert. If it is not specify, the current hour will be used.',
        type: 'string'
      }
    })
    .example([
      ['$0 ctime --from PST --to ART'],
      ['$0 ct -f PST -t ART -s 12']
    ]);

export const handler: Handler = async (argv) => {
  const spinner = ora({
    hideCursor: argv.quiet,
    spinner: 'clock'
  });

  const { list, from: fromTimezone, to: toTimezone, specific: time, json } = argv;

  if (list) {
    spinner.start('Fetching supported timezones...');
    spinner.succeed();
    outputs.showTimezones();
    return;
  }

  const originTimezones: string[] | undefined = parseTimezone(`${fromTimezone}`);
  const targetTimezones: string[] | undefined = parseTimezone(`${toTimezone}`);

  if (originTimezones && targetTimezones) {
    spinner.start('Converting Date time...\n');

    let originDateTime;
    let targetDateTime;
    
    if (time) {
      // Parse the input time to a Date object}
      originDateTime = moment.tz("2023-11-01T12:00", originTimezones[0])
      targetDateTime = originDateTime.clone().tz(targetTimezones[0]);
    } else {
      targetDateTime = moment.tz(new Date(), targetTimezones[0]);
      originDateTime = targetDateTime.clone().tz(originTimezones[0]);
    }

    // Convert the Date object to the target timezone
    const formattedOriginDateTime = originDateTime.format('HH:mm');
    const formattedTargetDateTIme = targetDateTime.format('HH:mm');

    console.log(new Date());
    console.log(formattedOriginDateTime);
    console.log(formattedTargetDateTIme);
    
    spinner.succeed();

    outputs.showConvertedTime(`${fromTimezone}`, formattedOriginDateTime, targetTimezones, formattedTargetDateTIme);
  } else {
    return;
  }
};
