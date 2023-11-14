"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.aliases = exports.command = void 0;
exports.command = 'usd <command> [options]';
exports.aliases = [];
exports.desc = 'List or Get the supported conversion rates for the Argentine peso and the US Dollar.';
const builder = (yargs) => yargs
    .commandDir('usd_commands')
    .usage('usage: $0 usd <command> [options]')
    .help('help')
    .example('$0 usd list', 'List all the supported conversion rates for the usd.')
    .example('$0 usd get blue', 'Get the supported conversion rate for the Argentine peso and the US Dollar.')
    .wrap(null);
exports.builder = builder;
const handler = async (argv) => { };
exports.handler = handler;
