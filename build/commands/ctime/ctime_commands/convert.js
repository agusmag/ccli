"use strict";
var __createBinding = (this && this.__createBinding) || (Object.create ? (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    var desc = Object.getOwnPropertyDescriptor(m, k);
    if (!desc || ("get" in desc ? !m.__esModule : desc.writable || desc.configurable)) {
      desc = { enumerable: true, get: function() { return m[k]; } };
    }
    Object.defineProperty(o, k2, desc);
}) : (function(o, m, k, k2) {
    if (k2 === undefined) k2 = k;
    o[k2] = m[k];
}));
var __setModuleDefault = (this && this.__setModuleDefault) || (Object.create ? (function(o, v) {
    Object.defineProperty(o, "default", { enumerable: true, value: v });
}) : function(o, v) {
    o["default"] = v;
});
var __importStar = (this && this.__importStar) || function (mod) {
    if (mod && mod.__esModule) return mod;
    var result = {};
    if (mod != null) for (var k in mod) if (k !== "default" && Object.prototype.hasOwnProperty.call(mod, k)) __createBinding(result, mod, k);
    __setModuleDefault(result, mod);
    return result;
};
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.handler = exports.builder = exports.desc = exports.aliases = exports.command = void 0;
const ora_1 = __importDefault(require("ora"));
const moment_timezone_1 = __importDefault(require("moment-timezone"));
const outputs = __importStar(require("../ctime.outputs"));
const util_1 = require("../../../util");
const handleError_1 = __importDefault(require("../../../handleError"));
exports.command = 'convert';
exports.aliases = ['cv'];
exports.desc = 'Convert a given time to a given timezone.';
const builder = (yargs) => yargs
    .usage('usage: $0 ctime convert <options>')
    .options({
    from: {
        alias: 'f',
        describe: 'Specify the origin timezone of the time.',
        type: 'string'
    },
    to: {
        alias: 't',
        describe: 'Specify the target timezone to convert the time.',
        type: 'string'
    },
    specific: {
        alias: 's',
        describe: 'The hour to convert in HH:mm format. If it is not specify, the current hour will be used.',
        type: 'string'
    }
})
    .help('help')
    .example([
    ['$0 ctime convert --from PST --to ART'],
    ['$0 ct cv -f PST -t ART -s 12']
])
    .wrap(null);
exports.builder = builder;
const handler = async (argv) => {
    const spinner = (0, ora_1.default)({
        hideCursor: argv.quiet,
        spinner: 'clock'
    });
    const { from: fromTimezone, to: toTimezone, specific: time, json } = argv;
    const originTimezones = (0, util_1.parseTimezone)(`${fromTimezone}`);
    const targetTimezones = (0, util_1.parseTimezone)(`${toTimezone}`);
    if (originTimezones && targetTimezones) {
        spinner.start('Converting Date time...\n');
        let originDateTime;
        let targetDateTime;
        if (time) {
            if (time.length < 5) {
                (0, handleError_1.default)('The time must be in the format HH:mm', new Error('Invalid time format.'));
            }
            // Parse the input time to a Date object}
            originDateTime = moment_timezone_1.default.tz(`2023-11-01T${time}`, originTimezones[0]);
            targetDateTime = originDateTime.clone().tz(targetTimezones[0]);
        }
        else {
            targetDateTime = moment_timezone_1.default.tz(new Date(), targetTimezones[0]);
            originDateTime = targetDateTime.clone().tz(originTimezones[0]);
        }
        // Convert the Date object to the target timezone
        const formattedOriginDateTime = originDateTime.format('HH:mm');
        const formattedTargetDateTIme = targetDateTime.format('HH:mm');
        spinner.succeed();
        outputs.showConvertedTime(`${fromTimezone}`, formattedOriginDateTime, `${toTimezone}`, formattedTargetDateTIme);
    }
    else {
        return;
    }
};
exports.handler = handler;
