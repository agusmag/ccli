"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.getCurrency = exports.listCurrencies = void 0;
const cli_table_1 = __importDefault(require("cli-table"));
const luxon_1 = require("luxon");
function listCurrencies(conversions) {
    const table = new cli_table_1.default({
        head: ['Currency', 'Buy Conversion rate', 'Sell Conversion rate', 'Last update'],
        colWidths: [25, 25, 25, 25]
    });
    let filteredConversions;
    for (let conversion of conversions) {
        filteredConversions = [
            conversion.nombre,
            `${conversion.compra !== null ? "$ " + conversion.compra : "-"}`,
            `${conversion.venta !== null ? "$ " + conversion.venta : "-"}`,
            luxon_1.DateTime.fromISO(conversion.fechaActualizacion).toFormat("dd/MM/yyyy HH:mm")
        ];
        table.push(filteredConversions);
    }
    console.log(table.toString());
}
exports.listCurrencies = listCurrencies;
function getCurrency(conversion) {
    const table = new cli_table_1.default({
        head: ['Currency', 'Buy Conversion rate', 'Sell Conversion rate', 'Last update'],
        colWidths: [25, 25, 25, 25]
    });
    const filteredConversion = [
        conversion.nombre,
        `${conversion.compra !== null ? "$ " + conversion.compra : "-"}`,
        `${conversion.venta !== null ? "$ " + conversion.venta : "-"}`,
        luxon_1.DateTime.fromISO(conversion.fechaActualizacion).toFormat("dd/MM/yyyy HH:mm")
    ];
    table.push(filteredConversion);
    console.log(table.toString());
}
exports.getCurrency = getCurrency;
