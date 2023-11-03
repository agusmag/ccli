"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const chalk_1 = __importDefault(require("chalk"));
const trans_outputs_1 = require("./commands/trans.outputs");
function parseLanguage(language) {
    if (language.length == 2) {
        return language;
    }
    if (trans_outputs_1.languages.has(language)) {
        return trans_outputs_1.languages.get(language);
    }
    else {
        console.error(chalk_1.default.red.bold("Language not supported!"));
        return; //returning null if the language is unsupported.
    }
}
;
function parseSentence(body) {
    var sentence = "";
    for (var i = 1; i < body.length; i++) {
        sentence = sentence + body[i] + " ";
    }
    return sentence;
}
module.exports = {
    parseLanguage,
    parseSentence
};
