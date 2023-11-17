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
const outputs = __importStar(require("../usd.outputs"));
const usdApi_1 = require("../../../services/usdApi");
exports.command = 'get <usdType>';
exports.aliases = ['g'];
exports.desc = 'Get the supported conversion rate for the Argentine peso and the US Dollar';
const builder = (yargs) => yargs
    .usage('usage: $0 usd get <usdType>')
    .help('help')
    .example([
    ['$0 usd get blue'],
    ['$0 usd g ccl']
])
    .wrap(null);
exports.builder = builder;
const handler = async (argv) => {
    const spinner = (0, ora_1.default)({
        hideCursor: argv.quiet,
        spinner: 'clock'
    });
    const { usdType: usdTypeName, json } = argv;
    if (usdTypeName) {
        const formattedUsdTypeName = usdTypeName.toLocaleLowerCase() === "ccl" ? "contadoconliqui" : `${usdTypeName}`;
        spinner.start('Fetching conversion rate...');
        const conversion = await (0, usdApi_1.getConversionRate)(formattedUsdTypeName.toLocaleLowerCase());
        spinner.succeed();
        outputs.getCurrency(conversion);
        return;
    }
};
exports.handler = handler;
