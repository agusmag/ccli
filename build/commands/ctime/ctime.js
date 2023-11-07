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
const outputs = __importStar(require("./ctime.outputs"));
const shared_1 = require("../../shared");
const util_1 = require("../../util");
exports.command = 'ctime';
exports.aliases = ['ct'];
exports.desc = 'Convert time between supported timezones.';
const builder = (yargs) => yargs
    .options({
    ...shared_1.baseOptions,
    list: {
        alias: 'l',
        describe: 'List all supported timezones and abbreviations.',
        type: 'boolean'
    },
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
        describe: 'The hour to convert. If it is not specify, the current hour will be used.',
        type: 'string'
    }
})
    .example([
    ['$0 ctime --from PST --to ART'],
    ['$0 ct -f PST -t ART -s 12']
]);
exports.builder = builder;
const handler = async (argv) => {
    const spinner = (0, ora_1.default)({
        hideCursor: argv.quiet,
        spinner: 'clock'
    });
    const { list, from: fromTimezone, to: toTimezone, specific: time, json } = argv;
    if (list) {
        spinner.start('Fetching supported timezones...');
        spinner.succeed();
        outputs.showTimezones();
        return;
    }
    const originTimezones = (0, util_1.parseTimezone)(`${fromTimezone}`);
    const targetTimezones = (0, util_1.parseTimezone)(`${toTimezone}`);
    if (originTimezones && targetTimezones) {
        spinner.start('Converting Date time...\n');
        let originDateTime;
        let targetDateTime;
        if (time) {
            // Parse the input time to a Date object}
            originDateTime = moment_timezone_1.default.tz("2023-11-01T12:00", originTimezones[0]);
            targetDateTime = originDateTime.clone().tz(targetTimezones[0]);
        }
        else {
            targetDateTime = moment_timezone_1.default.tz(new Date(), targetTimezones[0]);
            originDateTime = targetDateTime.clone().tz(originTimezones[0]);
        }
        // Convert the Date object to the target timezone
        const formattedOriginDateTime = originDateTime.format('HH:mm');
        const formattedTargetDateTIme = targetDateTime.format('HH:mm');
        console.log(new Date());
        console.log(formattedOriginDateTime);
        console.log(formattedTargetDateTIme);
        spinner.succeed();
        outputs.showConvertedTime(`${fromTimezone}`, formattedOriginDateTime, targetTimezones, formattedTargetDateTIme);
    }
    else {
        return;
    }
};
exports.handler = handler;
