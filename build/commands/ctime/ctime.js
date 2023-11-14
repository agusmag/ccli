"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.aliases = exports.command = void 0;
exports.command = 'ctime';
exports.aliases = ['ct'];
exports.desc = 'Convert time between supported timezones.';
const builder = (yargs) => yargs
    .commandDir('ctime_commands')
    .usage('usage: $0 ctime <command> [options]')
    .help('help')
    .example('$0 ctime list', 'List all supported timezones.')
    .example('$0 ctime convert <options>', 'Convert a given time to a given timezone.')
    .wrap(null);
exports.builder = builder;
const handler = async (argv) => { };
exports.handler = handler;
