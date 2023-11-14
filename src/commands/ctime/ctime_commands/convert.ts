import ora from "ora";
import moment from 'moment-timezone';

import { Builder, Handler } from '../ctime.types';
import * as outputs from '../ctime.outputs';
import { parseTimezone } from '../../../util';
import handleError from '../../../handleError';

export const command: string = 'convert';
export const aliases: Array<string> = ['cv'];
export const desc: string = 'Convert a given time to a given timezone.';

export const builder: Builder = (yargs) => 
  yargs
    .usage('usage: $0 ctime convert <options>')
    .options({
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
          describe: 'The hour to convert in HH:mm format. If it is not specify, the current hour will be used.',
          type: 'string'
        }
      })
    .help('help')
    .example([
      ['$0 ctime convert --from PST --to ART'],
      ['$0 ct cv -f PST -t ART -s 12']
    ])
    .wrap(null)

export const handler: Handler = async (argv) => {
	const spinner = ora({
			hideCursor: argv.quiet,
			spinner: 'clock'
	});

	const { from: fromTimezone, to: toTimezone, specific: time, json } = argv;
    
	const originTimezones: string[] | undefined = parseTimezone(`${fromTimezone}`);
  const targetTimezones: string[] | undefined = parseTimezone(`${toTimezone}`);

  if (originTimezones && targetTimezones) {
    spinner.start('Converting Date time...\n');

    let originDateTime;
    let targetDateTime;
    
    if (time) {
      if (time.length < 5) {
        handleError('The time must be in the format HH:mm', new Error('Invalid time format.'));
      }
      // Parse the input time to a Date object}
      originDateTime = moment.tz(`2023-11-01T${time}`, originTimezones[0])
      targetDateTime = originDateTime.clone().tz(targetTimezones[0]);
    } else {
      targetDateTime = moment.tz(new Date(), targetTimezones[0]);
      originDateTime = targetDateTime.clone().tz(originTimezones[0]);
    }

    // Convert the Date object to the target timezone
    const formattedOriginDateTime = originDateTime.format('HH:mm');
    const formattedTargetDateTIme = targetDateTime.format('HH:mm');
    
    spinner.succeed();

    outputs.showConvertedTime(`${fromTimezone}`, formattedOriginDateTime, `${toTimezone}`, formattedTargetDateTIme);
  } else {
    return;
  }
};
