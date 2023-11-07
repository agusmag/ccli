"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.parseSentence = exports.parseTimezone = exports.parseLanguage = void 0;
const chalk_1 = __importDefault(require("chalk"));
const trans_outputs_1 = require("./commands/trans.outputs");
const ctime_outputs_1 = require("./commands/ctime/ctime.outputs");
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
exports.parseLanguage = parseLanguage;
;
function parseTimezone(timezone) {
    if (ctime_outputs_1.timezones.has(timezone)) {
        return ctime_outputs_1.timezones.get(timezone);
    }
    else {
        console.error(chalk_1.default.red.bold("Timezone not supported!"));
        return; //returning null if the language is unsupported.
    }
}
exports.parseTimezone = parseTimezone;
;
function parseSentence(body) {
    var sentence = "";
    for (var i = 1; i < body.length; i++) {
        sentence = sentence + body[i] + " ";
    }
    return sentence;
}
exports.parseSentence = parseSentence;
