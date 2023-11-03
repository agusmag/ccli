
import chalk from 'chalk';
import { languages } from './commands/trans.outputs'

function parseLanguage(language: string) {
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

function parseSentence(body: string) {
    var sentence = "";
    for(var i = 1; i < body.length; i++) {
	sentence = sentence + body[i] + " ";
    }
    return sentence;
}

module.exports = { 
  parseLanguage,
  parseSentence
};
