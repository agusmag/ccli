#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const handleError_1 = __importDefault(require("./handleError"));
var argv = (0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    // Use the commands directory to scaffold.
    .commandDir('commands/ctime')
    .commandDir('commands/trans')
    .commandDir('commands/usd')
    // Default command if none supplied - shows help.
    .usage('usage: $0 <command>')
    .help('help')
    .wrap(null)
    // Enable strict mode.
    .demandCommand()
    // Useful aliases.
    .alias({ h: 'help' })
    // Be nice.
    .epilogue('For more information, check https://docs.glitchguardians.site')
    // Handle failures.
    .fail(handleError_1.default)
    .argv;
