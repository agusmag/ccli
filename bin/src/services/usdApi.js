"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.getConversionRate = exports.listConversionRates = void 0;
const { DOLARAPI_BASE_PATH = 'https://dolarapi.com/v1' } = process.env;
function listConversionRates() {
    return fetch(`${DOLARAPI_BASE_PATH}/dolares`, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((data) => {
        return data;
    });
}
exports.listConversionRates = listConversionRates;
function getConversionRate(exchangeType) {
    return fetch(`${DOLARAPI_BASE_PATH}/dolares/${exchangeType}`, {
        method: 'GET'
    })
        .then((response) => response.json())
        .then((data) => {
        return data;
    });
}
exports.getConversionRate = getConversionRate;
