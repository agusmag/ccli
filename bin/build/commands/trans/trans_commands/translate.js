"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
        desc = { enumerable: true, get: function () { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function (o, m, k, k2) {
    if (k2 === undefined)
        k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function (o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function (o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule)
        return mod;
    var result = {};
    if (mod != null)
        for (var k in mod)
            if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k))
                __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.aliases = exports.command = void 0;
const ora_1 = __importDefault(require("ora"));
const google_translate_api_1 = require("@vitalets/google-translate-api");
const outputs = __importStar(require("../trans.outputs"));
exports.command = 'translate';
exports.aliases = ['ts'];
exports.desc = 'Translate words and phrases between supported languages.';
const builder = (yargs) => yargs
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
    .wrap(null);
exports.builder = builder;
const handler = async (argv) => {
    const spinner = (0, ora_1.default)({
        hideCursor: argv.quiet,
        spinner: 'clock'
    });
    const { from: fromLanguage, to: toLanguage, body: bodyPayload, json } = argv;
    if (bodyPayload) {
        spinner.start('Translating...');
        const { text } = await (0, google_translate_api_1.translate)(`${bodyPayload}`, {
            from: fromLanguage ? `${fromLanguage}` : 'auto',
            to: `${toLanguage}`
        });
        spinner.succeed();
        outputs.showTranslation(text);
    }
};
exports.handler = handler;
