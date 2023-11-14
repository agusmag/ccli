
import chalk from 'chalk';
import { languages } from './commands/trans/trans.outputs';
import { timezones } from './commands/ctime/ctime.outputs';

export function parseLanguage(language: string) {
  if(language.length == 2){
	  return language;
  }
  
  if(languages.has(language)){
	  return languages.get(language)
  }
  else {
	  console.error(chalk.red.bold("Language not supported!"))
	  return; //returning null if the language is unsupported.
  }
};

export function parseTimezone(timezone: string) {  
  if(timezones.has(timezone)){
	  return timezones.get(timezone)
  }
  else {
	  console.error(chalk.red.bold("Timezone not supported!"))
	  return; //returning null if the language is unsupported.
  }
};

export function parseSentence(body: string) {
    var sentence = "";
    for(var i = 1; i < body.length; i++) {
	sentence = sentence + body[i] + " ";
    }
    return sentence;
}
