#! /usr/bin/env node
"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const yargs_1 = __importDefault(require("yargs"));
const helpers_1 = require("yargs/helpers");
const handleError_1 = __importDefault(require("./handleError"));
(0, yargs_1.default)((0, helpers_1.hideBin)(process.argv))
    // Use the commands directory to scaffold.
    .commandDir('commands')
    .commandDir('commands/ctime')
    // Default command if none supplied - shows help.
    .command('$0', 'Custom CLI Tool', () => undefined, () => {
    yargs_1.default.showHelp();
})
    // Enable strict mode.
    .strict()
    // Useful aliases.
    .alias({ h: 'help' })
    // Be nice.
    .epilogue('For more information, check https://docs.glitchguardians.site')
    // Handle failures.
    .fail(handleError_1.default)
    .argv;
