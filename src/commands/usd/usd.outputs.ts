import Table from 'cli-table';
import { ConversionRate } from '../../types/conversionRates';
import { DateTime } from "luxon";

export function listCurrencies(conversions: Array<ConversionRate>){
  const table = new Table({
    head: ['Currency', 'Buy Conversion rate', 'Sell Conversion rate', 'Last update'],
    colWidths: [25, 25, 25, 25]
  });

  let filteredConversions: string[];

  for (let conversion of conversions) {
    filteredConversions = [
      conversion.nombre,
      `${conversion.compra !== null ? "$ " + conversion.compra : "-" }`,
      `${conversion.venta !== null ? "$ " + conversion.venta : "-" }`,
      DateTime.fromISO(conversion.fechaActualizacion).toFormat("dd/MM/yyyy HH:mm")
    ];

    table.push(filteredConversions);
  }

  console.log(table.toString());
}

export function getCurrency(conversion: ConversionRate){
  const table = new Table({
    head: ['Currency', 'Buy Conversion rate', 'Sell Conversion rate', 'Last update'],
    colWidths: [25, 25, 25, 25]
  });

  const filteredConversion: string[] = [
    conversion.nombre,
    `${conversion.compra !== null ? "$ " + conversion.compra : "-" }`,
    `${conversion.venta !== null ? "$ " + conversion.venta : "-" }`,
    DateTime.fromISO(conversion.fechaActualizacion).toFormat("dd/MM/yyyy HH:mm")
  ];
  
  table.push(filteredConversion);

  console.log(table.toString());
}
