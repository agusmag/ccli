import { ConversionRate } from '../types/conversionRates';

const { DOLARAPI_BASE_PATH = 'https://dolarapi.com/v1' } = process.env;

export function listConversionRates(): Promise<ConversionRate[]> {
  return fetch(`${DOLARAPI_BASE_PATH}/dolares`, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => {
      return data as Array<ConversionRate>;
    });
}

export function getConversionRate(exchangeType: string): Promise<ConversionRate> {
  return fetch(`${DOLARAPI_BASE_PATH}/dolares/${exchangeType}`, {
    method: 'GET'
  })
    .then((response) => response.json())
    .then((data) => {
      return data as ConversionRate;
    });
}
