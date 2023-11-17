"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.aliases = exports.command = void 0;
exports.command = 'trans';
exports.aliases = ['t'];
exports.desc = 'Translate words and phrases between supported languages.';
const builder = (yargs) => yargs
    .commandDir('trans_commands')
    .usage('usage: $0 trans <command> [options]')
    .help('help')
    .example('$0 trans list', 'List all supported languages.')
    .example('$0 trans translate <options>', 'Translate a given word or phrase.')
    .wrap(null);
exports.builder = builder;
const handler = async (argv) => { };
exports.handler = handler;
