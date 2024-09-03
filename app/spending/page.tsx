"use client";
import "./styles.css"

import DataGrid, {
  type ColumnOrColumnGroup,
  renderValue,
  textEditor,
  // Inputs
} from "react-data-grid";
import React, { useState, useEffect } from "react";
import Inputs from "./Input";
import InvoiceList from "./Invoice";

// import { renderCoordinates } from "./renderers";
// import type { Props } from './types';

let lists = [
  {
    id: "15783",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=15783'>15783--Majuba UCG Site-Hydrogeological Services</a>",
    value: "51 055.40",
    billed: "0",
    forecast: "51 055.40",
    cashflow: "[]",
    cashflow_monthly: "{}",
    row: 0,
  },
  {
    id: "15781",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=15781'>15781--MCWAP ECO</a>",
    value: "454 489.92",
    billed: "0",
    forecast: "454 489.92",
    cashflow: "[]",
    cashflow_monthly: "{}",
    row: 1,
  },
  {
    id: "15779",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=15779'>15779--Witkop Pietersburg line 3 132kv powerline-ECO-Task Order</a>",
    value: "542 716.20",
    billed: "0",
    forecast: "542 716.20",
    cashflow: "[]",
    cashflow_monthly: "{}",
    row: 2,
  },
  {
    id: "15770",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=15770'>15770--CMJAH Fire Remedial Works</a>",
    value: "1 251 232.12",
    billed: "0",
    forecast: "1 251 232.12",
    cashflow: "[]",
    cashflow_monthly: "{}",
    row: 3,
  },
  {
    id: "11364",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=11364'>11364--Tshebela  Rampheri Unin 132 kv Power line</a>",
    value: "376 965.20",
    billed: "0",
    forecast: "376 965.20",
    cashflow: "[]",
    cashflow_monthly: "{}",
    row: 4,
  },
  {
    id: "11365",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=11365'>11365--TASEZ PHASE 2 CDC/606/23</a>",
    value: "316 375.00",
    billed: "0",
    forecast: "316 375.00",
    cashflow: "[]",
    cashflow_monthly: "{}",
    row: 5,
  },
  {
    id: "11366",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=11366'>11366--Mhinga Substation 4503403637</a>",
    value: "526 245.40",
    billed: "0",
    forecast: "526 245.40",
    cashflow: "[]",
    cashflow_monthly: "{}",
    row: 6,
  },
  {
    id: "11367",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=11367'>11367--Majuba UCG</a>",
    value: "2 561 280.00",
    billed: "0",
    forecast: "2 561 280.00",
    cashflow: "[]",
    cashflow_monthly: "{}",
    row: 7,
  },
  {
    id: "11368",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=11368'>11368--Leseding Substation  0015TX</a>",
    value: "443 330.00",
    billed: "0",
    forecast: "443 330.00",
    cashflow: "[]",
    cashflow_monthly: "{}",
    row: 8,
  },
  {
    id: "11369",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=11369'>11369--Alex TRA 1081k</a>",
    value: "136 610.00",
    billed: "0",
    forecast: "116 610.00",
    cashflow: "[]",
    cashflow_monthly:
      '{"Month Ended March 2024":{"amount":20000,"key":"1431"}}',
    row: 9,
  },
  {
    id: "11538",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=11538'>11538--Non-billable</a>",
    value: "57 750.00",
    billed: "52 750.00",
    forecast: "5 000.00",
    cashflow:
      '[{"amount":2750,"date":"07/31/2024"},{"amount":50000,"date":"07/31/2024"}]',
    cashflow_monthly:
      '{"Month Ended December 2024":{"amount":5000,"key":"1432"},"Month Ended July 2024":{"amount":0,"key":"1433"},"Month Ended August 2024":{"amount":0,"key":"1434"},"Month Ended September 2024":{"amount":0,"key":"1435"},"Month Ended October 2024":{"amount":0,"key":"1436"},"Month Ended November 2024":{"amount":0,"key":"1437"},"Month Ended March 2024":{"amount":15000,"key":"1421"},"Month Ended April 2024":{"amount":20000,"key":"1422"},"Month Ended May 2024":{"amount":6787,"key":"1423"},"Month Ended June 2024":{"amount":5963,"key":"1424"}}',
    row: 10,
  },
  {
    id: "12045",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=12045'>12045--Uchoba Task Order -Ecological Walk down</a>",
    value: "118 983.50",
    billed: "0",
    forecast: "118 983.50",
    cashflow: "[]",
    cashflow_monthly: "{}",
    row: 11,
  },
  {
    id: "12051",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=12051'>12051--Uchoba Task Order - Heritage Walkdown</a>",
    value: "164 309.50",
    billed: "0",
    forecast: "164 309.50",
    cashflow: "[]",
    cashflow_monthly: "{}",
    row: 12,
  },
  {
    id: "12064",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=12064'>12064--Entokozweni Tekwane North 132KVS Power Line - Heritage Walkthrought</a>",
    value: "94 646.80",
    billed: "0",
    forecast: "94 646.80",
    cashflow: "[]",
    cashflow_monthly: "{}",
    row: 13,
  },
  {
    id: "12065",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=12065'>12065--Entokozweni Tekwane North 132KVS Power Line - Ecological Walkthrought</a>",
    value: "104 306.80",
    billed: "0",
    forecast: "104 306.80",
    cashflow: "[]",
    cashflow_monthly: "{}",
    row: 14,
  },
  {
    id: "12074",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=12074'>12074--2319H – ARIES UPINGTON 400KV</a>",
    value: "4 407 800.00",
    billed: "0",
    forecast: "3 857 800.00",
    cashflow: "[]",
    cashflow_monthly:
      '{"Month Ended August 2024":{"amount":500000,"key":"1425"},"Month Ended March 2024":{"amount":50000,"key":"1426"},"Month Ended April 2024":{"amount":0,"key":"1427"},"Month Ended May 2024":{"amount":0,"key":"1428"},"Month Ended June 2024":{"amount":0,"key":"1429"},"Month Ended July 2024":{"amount":0,"key":"1430"}}',
    row: 15,
  },
  {
    id: "12097",
    name: "<a href='pt_main.phtml?.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&pageId=12696&objDefId=10045&.sess=u-Fjayk8b90-KP-K04W2B6KS3T4pbrvwD94-rVAVPyj-ytOFtgTB8d0-&.op=3801&id=12097'>12097--GEMSBOK KWAMHLANGA 132KV POWERLINE – ECOLOGICAL WALKTHROUGH</a>",
    value: "53 675.00",
    billed: "0",
    forecast: "53 675.00",
    cashflow: "[]",
    cashflow_monthly: "{}",
    row: 16,
  },
];

function aggregateMonthlyTotals(data: any) {
  // Object to store the sum of amounts for each month
  const monthlyTotals: any = {};

  data.forEach((entry: any) => {
    const amount = entry.amount;
    const dateStr = entry.date;

    // Parse the date string into a Date object
    const dateObj = new Date(dateStr);

    // Extract year and month (0-based month)
    const year = dateObj.getFullYear();
    const month = dateObj.getMonth(); // 0 for January, 11 for December

    // Format the key as "YYYY-MM" to group by month and year
    const yearMonth = `${year}-${String(month + 1).padStart(2, "0")}`;

    // Add the amount to the corresponding month
    if (!monthlyTotals[yearMonth]) {
      monthlyTotals[yearMonth] = 0;
    }
    monthlyTotals[yearMonth] += amount;
  });

  // Convert the result to the desired format
  const result: any = {};
  Object.keys(monthlyTotals).forEach((yearMonth) => {
    const [year, month] = yearMonth.split("-");
    // Create a date object for the last day of the month
    const endDate = new Date(Number(year), Number(month), 0); // 0 is the last day of the previous month

    // Format the date to "Month Ended Month YYYY"
    const formattedDate = `Month Ended ${formatDateToCustomFormat(
      new Date(Number(year), Number(month) - 1)
    )}`;
    result[formattedDate] = monthlyTotals[yearMonth];
  });

  return result;
}


function aggregateMonthlyTotals_(data: any) {
   // Object to store the entries for each month
   const monthlyEntries: any = {};

   data.forEach((entry: any) => {
     const amount = entry.amount;
     const dateStr = entry.date;
 
     // Parse the date string into a Date object
     const dateObj = new Date(dateStr);
 
     // Extract year and month (0-based month)
     const year = dateObj.getFullYear();
     const month = dateObj.getMonth(); // 0 for January, 11 for December
 
     // Format the key as "YYYY-MM" to group by month and year
     const yearMonth = `${year}-${String(month + 1).padStart(2, "0")}`;
 
     // Create the entry object if it does not exist
     if (!monthlyEntries[yearMonth]) {
       monthlyEntries[yearMonth] = [];
     }
     
     // Add the entry to the corresponding month
     monthlyEntries[yearMonth].push(entry);
   });
 
   // Convert the result to the desired format
   const result: any = {};
   Object.keys(monthlyEntries).forEach((yearMonth) => {
     const [year, month] = yearMonth.split("-");
     // Create a date object for the last day of the month
     const endDate = new Date(Number(year), Number(month), 0); // 0 is the last day of the previous month
 
     // Format the date to "Month Ended Month YYYY"
     const formattedDate = `Month Ended ${formatDateToCustomFormat(
       new Date(Number(year), Number(month) - 1)
     )}`;
     result[formattedDate] = monthlyEntries[yearMonth];
   });
 
   return result;
}

lists = lists.map((el) => {
  let new_el = el;
  new_el.cashflow_monthly = JSON.parse(new_el.cashflow_monthly);
  let flow: any = new_el.cashflow_monthly;
  const transformedObject: any = {};
  for (const [month, data] of Object.entries(flow)) {
    transformedObject[month] = data.amount;
  }

  new_el.cashflow = aggregateMonthlyTotals(JSON.parse(new_el.cashflow));
  return { ...new_el, ...transformedObject };
});


function formatDateToCustomFormat(date: any) {
  const options: any = { month: "long", year: "numeric" };
  return new Intl.DateTimeFormat("en-GB", options).format(date);
}

const rows = lists;

function rowKeyGetter(row: any) {
  return row.id;
}

export default function ColumnGrouping({}) {
  const [rowss, setRowss] = useState(rows);
  const [invoices, setInvoices] = useState([])

  const [selectedRows, setSelectedRows] = useState(
    (): ReadonlySet<number> => new Set()
  );

  function getFinancialYearPeriods() {
    const today = new Date();
    const year = today.getFullYear();

    // Financial year starts on March 1st of the current year or previous year
    const financialYearStart = new Date(year, 2, 1); // March 1st of the current year
    if (today < financialYearStart) {
      // If today is before March 1st, the financial year starts last year
      financialYearStart.setFullYear(year - 1);
    }

    // Calculate the start and end dates for the current financial year
    const financialYearEnd = new Date(financialYearStart);
    financialYearEnd.setFullYear(financialYearStart.getFullYear() + 1);
    financialYearEnd.setMonth(1); // February
    financialYearEnd.setDate(29); // To ensure it's a leap year if necessary

    // Periods for the current financial year
    const currentYearPeriods = [];
    let periodStart = new Date(financialYearStart);

    for (let i = 0; i < 24; i++) {
      // Get the end of the month
      const endOfMonth = new Date(
        periodStart.getFullYear(),
        periodStart.getMonth() + 1,
        0
      );

      // Format for "Month Ended September 2024"
      const monthEnded = `Month Ended ${formatDateToCustomFormat(endOfMonth)}`;

      currentYearPeriods.push({
        name: monthEnded, // Only the formatted month and year,
        children: [
          {
            key: "2" + i,
            name: "Claimed",
            width: "190px",
            renderSummaryCell(propss: any) {
              let total = 0;

              rowss.forEach((props: any) => {
                if (props.cashflow[propss.column.parent.name]) {
                  let amount = Number(
                    props.cashflow[propss.column.parent.name]
                  ); //* (100/115)
                  total += amount;
                }
              });

              return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })
                .format(total)
                .replace(/,/g, " ");
            },
            renderEditCell({ row, onRowChange, onClose }){
                console.log(row, 'RUNNING-----------APPS')
                setInvoices(row['entires'])
                const doc = document.getElementById("pop")
                doc.style.display = "flex"
                //alert(JSON.stringify(row))
           
            },
            renderCell(props: any) {
              if (props.row.cashflow[props.column.parent.name]) {
                let amount = Number(
                  props.row.cashflow[props.column.parent.name]
                ); //* (100/115)
                return <p  style={{color:"blue"}}> {new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })
                  .format(amount)
                  .replace(/,/g, " ")}
                  </p>
              } 

              return <p style={{color:"blue"}}>0.00
              </p>;
            },
          },
          {
            key: "3" + i,
            name: "Vat",
            width: "150px",
            renderSummaryCell(propss: any) {
              let total = 0;

              rowss.forEach((props: any) => {
                if (props.cashflow[propss.column.parent.name]) {
                  let amount =
                    Number(props.cashflow[propss.column.parent.name]) *
                    (15 / 100);
                  total += amount;
                }
              });

              return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })
                .format(total)
                .replace(/,/g, " ");
            },
            renderCell(props: any) {
              if (props.row.cashflow[props.column.parent.name]) {
                let amount =
                  Number(props.row.cashflow[props.column.parent.name]) *
                  (15 / 100);
                return new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })
                  .format(amount)
                  .replace(/,/g, " ");
              }

              return "0.00";
            },
          },
          {
            key: "4" + i,
            name: "Total Claimed",

            renderSummaryCell(propss: any) {
              let total = 0;

              rowss.forEach((props: any) => {
                if (props.cashflow[propss.column.parent.name]) {
                  let amount =
                    Number(props.cashflow[propss.column.parent.name]) *
                    (115 / 100);
                  total += amount;
                }
              });

              return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })
                .format(total)
                .replace(/,/g, " ");
            },
            renderCell(props: any) {
              if (props.row.cashflow[props.column.parent.name]) {
                let amount =
                  Number(props.row.cashflow[props.column.parent.name]) *
                  (115 / 100);
                return new Intl.NumberFormat("en-US", {
                  minimumFractionDigits: 2,
                  maximumFractionDigits: 2,
                  useGrouping: true,
                })
                  .format(amount)
                  .replace(/,/g, " ");
              }

              return "0.00";
            },
          },
          {
            key: monthEnded,
            name: "Budgted",
            width: "150px",
            renderEditCell: Inputs,
            renderSummaryCell(propss: any) {
              let total = 0;

              rowss.forEach((props: any) => {
                let amount = 0;
                if (props[propss.column.parent.name]) {
                  amount = Number(props[propss.column.parent.name]);
                } else if (props.cashflow_monthly[propss.column.parent.name]) {
                  amount =
                    Number(
                      props.cashflow_monthly[propss.column.parent.name].amount
                    ) *
                    (100 / 100);
                }

                total += amount;
              });

              return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })
                .format(total)
                .replace(/,/g, " ");
            },

            renderCell(props: any) {
              let amount = 0;
              if (props.row[props.column.parent.name]) {
                amount = Number(props.row[props.column.parent.name]);
              } else if (props.row.cashflow_monthly[props.column.parent.name]) {
                amount =
                  Number(
                    props.row.cashflow_monthly[props.column.parent.name].amount
                  ) *
                  (100 / 100);
              }

              return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })
                .format(amount)
                .replace(/,/g, " ");
            },
          },
          {
            key: "6" + i,
            name: "Vat",
            width: "150px",

            renderSummaryCell(propss: any) {
              let total = 0;

              rowss.forEach((props: any) => {
                let amount = 0;
                if (props[propss.column.parent.name]) {
                  amount =
                    Number(props[propss.column.parent.name]) * (15 / 100);
                } else if (props.cashflow_monthly[propss.column.parent.name]) {
                  amount =
                    Number(
                      props.cashflow_monthly[propss.column.parent.name].amount
                    ) *
                    (15 / 100);
                }

                total += amount;
              });

              return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })
                .format(total)
                .replace(/,/g, " ");
            },

            renderCell(props: any) {
              let amount = 0;
              if (props.row[props.column.parent.name]) {
                amount = props.row[props.column.parent.name] * (15 / 100);
              } else if (props.row.cashflow_monthly[props.column.parent.name]) {
                amount =
                  Number(
                    props.row.cashflow_monthly[props.column.parent.name].amount
                  ) *
                  (15 / 100);
              }

              return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })
                .format(amount)
                .replace(/,/g, " ");
            },
          },

          {
            key: "7" + i,
            name: "Total Budgted",
            width: "150px",

            renderSummaryCell(propss: any) {
              let total = 0;

              rowss.forEach((props: any) => {
                let amount = 0;
                if (props[propss.column.parent.name]) {
                  amount =
                    Number(props[propss.column.parent.name]) * (115 / 100);
                } else if (props.cashflow_monthly[propss.column.parent.name]) {
                  amount =
                    Number(
                      props.cashflow_monthly[propss.column.parent.name].amount
                    ) *
                    (115 / 100);
                }

                total += amount;
              });

              return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })
                .format(total)
                .replace(/,/g, " ");
            },

            renderCell(props: any) {
              let amount = 0;
              if (props.row[props.column.parent.name]) {
                amount = props.row[props.column.parent.name] * (115 / 100);
              } else if (props.row.cashflow_monthly[props.column.parent.name]) {
                amount =
                  Number(
                    props.row.cashflow_monthly[props.column.parent.name].amount
                  ) *
                  (115 / 100);
              }

              return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })
                .format(amount)
                .replace(/,/g, " ");
            },
          },
          {
            key: "8" + i,
            name: "Over/Under Billed",

            renderSummaryCell(propss: any) {
              let total = 0;

              rowss.forEach((props: any) => {
                let amount = 0;
                if (props[propss.column.parent.name]) {
                  amount =
                    Number(props[propss.column.parent.name]) * (115 / 100);
                } else if (props.cashflow_monthly[propss.column.parent.name]) {
                  amount =
                    Number(
                      props.cashflow_monthly[propss.column.parent.name].amount
                    ) *
                    (115 / 100);
                }

                let actual = 0;
                if (props.cashflow[propss.column.parent.name]) {
                  actual =
                    Number(props.cashflow[propss.column.parent.name]) *
                    (115 / 100);
                }

                total += actual - amount;
              });

              return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })
                .format(total)
                .replace(/,/g, " ");
            },

            renderCell(props: any) {
              let totoal_budget = 0;
              if (props.row[props.column.parent.name]) {
                totoal_budget =
                  props.row[props.column.parent.name] * (115 / 100);
              } else if (props.row.cashflow_monthly[props.column.parent.name]) {
                totoal_budget =
                  Number(
                    props.row.cashflow_monthly[props.column.parent.name].amount
                  ) *
                  (115 / 100);
              }

              let actual = 0;
              if (props.row.cashflow[props.column.parent.name]) {
                actual =
                  Number(props.row.cashflow[props.column.parent.name]) *
                  (115 / 100);
              }

              let diff = actual - totoal_budget;
              return new Intl.NumberFormat("en-US", {
                minimumFractionDigits: 2,
                maximumFractionDigits: 2,
                useGrouping: true,
              })
                .format(diff)
                .replace(/,/g, " ");
            },
          },
        ],
        key: "9" + i,
      });

      // Move to the next month
      periodStart.setMonth(periodStart.getMonth() + 1);
    }

    return currentYearPeriods;
  }

  let res = getFinancialYearPeriods();

  const columns = [
    {
      name: "Project Spending Projections",

      children: [
        {
          key: "1",
          name: "Task Order",
          frozen: true,
          width: "350px",
          renderCell(props: any) {
            return props.row["name"];
          },
        },
        {
          key: "3",
          name: "Value (Excl)",
          width: "140px",
          renderSummaryCell() {
            let total = 0;
            rowss.forEach((props: any) => {
              let amount =
                Number(props["value"].replace(/\s+/g, "")) * (100 / 100);
              total += amount;
            });

            return new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })
              .format(total)
              .replace(/,/g, " ");
          },
          renderCell(props: any) {
            return props.row["value"];
          },
        },
        {
          key: "3A",
          name: "Vat",
          width: "140px",
          renderSummaryCell() {
            let total = 0;
            rowss.forEach((props: any) => {
              let amount =
                Number(props["value"].replace(/\s+/g, "")) * (15 / 100);
              total += amount;
            });

            return new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })
              .format(total)
              .replace(/,/g, " ");
          },
          renderCell(props: any) {
            let amount =
              Number(props.row["value"].replace(/\s+/g, "")) * (15 / 100);
            return new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })
              .format(amount)
              .replace(/,/g, " ");
          },
        },
        {
          key: "3B",
          name: "Total Value (Incl)",
          width: "140px",
          renderSummaryCell() {
            let total = 0;
            rowss.forEach((props: any) => {
              let amount =
                Number(props["value"].replace(/\s+/g, "")) * (115 / 100);
              total += amount;
            });

            return new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })
              .format(total)
              .replace(/,/g, " ");
          },
          renderCell(props: any) {
            let amount =
              Number(props.row["value"].replace(/\s+/g, "")) * (115 / 100);
            return new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })
              .format(amount)
              .replace(/,/g, " ");
          },
        },
        {
          key: "4",
          name: "Claimed Excl",
          width: "140px",
          renderSummaryCell() {
            let total = 0;
            rowss.forEach((props: any) => {
              let amount =
                Number(props["billed"].replace(/\s+/g, "")) * (100 / 100);
              total += amount;
            });

            return new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })
              .format(total)
              .replace(/,/g, " ");
          },
          renderCell(props: any) {
            let num = Number(props.row["billed"].replace(/\s+/g, ""));
            return new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })
              .format(num)
              .replace(/,/g, " ");
          },
        },
        {
          key: "5",
          name: "Vat",
          width: "150px",
          renderSummaryCell() {
            let total = 0;
            rowss.forEach((props: any) => {
              let amount =
                Number(props["billed"].replace(/\s+/g, "")) * (15 / 100);
              total += amount;
            });

            return new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })
              .format(total)
              .replace(/,/g, " ");
          },
          renderCell(props: any) {
            let num: any = (
              Number(props.row["billed"].replace(/\s+/g, "")) *
              (15 / 100)
            ).toFixed(2);
            return new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })
              .format(num)
              .replace(/,/g, " ");
          },
        },
        {
          key: "6",
          name: "Total Claimed (Incl)",
          width: "150px",
          renderSummaryCell() {
            let total = 0;
            rowss.forEach((props: any) => {
              let amount =
                Number(props["billed"].replace(/\s+/g, "")) * (115 / 100);
              total += amount;
            });

            return new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })
              .format(total)
              .replace(/,/g, " ");
          },
          renderCell(props: any) {
            let num: any = (
              Number(props.row["billed"].replace(/\s+/g, "")) *
              (115 / 100)
            ).toFixed(2);
            return new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })
              .format(num)
              .replace(/,/g, " ");
          },
        },
        {
          key: "forecast",
          width: "150px",
          name: "Budget Remaining",
          renderSummaryCell() {
            let total = 0;
            rowss.forEach((props: any) => {
              let amount = 0;
              for (const key in props) {
                if (key.includes("Month Ended")) {
                  amount += Number(props[key]);
                }
              }

              let value = Number(props.value.replace(/\s+/g, ""));
              let diff = (value - amount) * (115 / 100);
              total += diff;
            });

            return new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })
              .format(total)
              .replace(/,/g, " ");
          },
          renderCell(props: any) {
            let amount = 0;
            for (const key in props.row) {
              if (key.includes("Month Ended")) {
                amount += Number(props.row[key]);
              }
            }

            let value = Number(props.row.value.replace(/\s+/g, ""));
            let diff = (value - amount) * (115 / 100);
            return new Intl.NumberFormat("en-US", {
              minimumFractionDigits: 2,
              maximumFractionDigits: 2,
              useGrouping: true,
            })
              .format(diff)
              .replace(/,/g, " ");
          },
        },
      ],
    },
    { key: "8", name: " " },
    ...res,
  ];

  useEffect(() => {
    const handleMessage = (event: any) => {
      let data: any = event.data.content;
      window.appToken = event.data.token;
 

      data = data.map((el: any) => {
        let new_el = el;
        new_el.cashflow_monthly = JSON.parse(new_el.cashflow_monthly);
        let flow: any = new_el.cashflow_monthly;
        const transformedObject: any = {};
        for (const [month, data] of Object.entries(flow)) {
          transformedObject[month] = data.amount;
        }

        console.log(aggregateMonthlyTotals_(JSON.parse(new_el.cashflow)), '-------||||||||--|||||----run')
        new_el['entires']= aggregateMonthlyTotals_(JSON.parse(new_el.cashflow)),
        new_el.cashflow = aggregateMonthlyTotals(JSON.parse(new_el.cashflow));
        return { ...new_el, ...transformedObject };
      });

      setRowss(data);

      console.log("Received message:", data);
    };

    window.addEventListener("message", handleMessage);

    // iframe document

    // Send a message to the parent window
    window.parent.postMessage("loaded", "*");

    // Clean up the event listener when the component is unmounted
    return () => {
      window.removeEventListener("message", handleMessage);
    };
  }, []); //


  let [xmlx, setXML] = useState('')

  useEffect(() => {

  let budget_to_update:any = []
  let xml = ''
  
  rowss.forEach((props: any) => {
      
      
      for (const key in props) {
        if (key.includes("Month Ended")) {
          if (props[key]){
           
            if(props.cashflow_monthly[key]){

             xml += `<GLBUDGETITEM>
                  <RECORDNO>${props.cashflow_monthly[key].key}</RECORDNO>
                  <PERIODNAME>${key}</PERIODNAME>
                  <ACCT_NO>401001</ACCT_NO>
                  <AMOUNT>${Number(props[key])}</AMOUNT>
                  <GLDIMTASKORDER_BUDGET>${props.id}</GLDIMTASKORDER_BUDGET>
              </GLBUDGETITEM>`


              budget_to_update.push({ id : props.id ,period:key, amount: props[key], key: props.cashflow_monthly[key].key, new: false})
            }else {
              xml += `<GLBUDGETITEM>
              <PERIODNAME>${key}</PERIODNAME>
              <ACCT_NO>401001</ACCT_NO>
              <AMOUNT>${Number(props[key])}</AMOUNT>
              <GLDIMTASKORDER_BUDGET>${props.id}</GLDIMTASKORDER_BUDGET>
          </GLBUDGETITEM>`
              budget_to_update.push({id: props.id ,period:key, amount: props[key],  new: true})
            }

           
            
          }
    
          //console.log(`${key}: ${props.row[key]}`);
        }
      }

      // let value = Number(props.value.replace(/\s+/g, ""));
      // let diff = (value - amount) * (115 / 100);
    
    });

  setXML(xml)

 console.log(budget_to_update, "........updated");


  }, [rowss])

  return (
    <div style={{ display: "flex", flexDirection: "column" }}>
      <div style={{ padding: 5, paddingTop: 10, paddingBottom: 10 }}>
        <div
          style={{
            backgroundColor: "#000",
            color: "white",
            padding: "10px 20px",
            border: "none",
            borderRadius: "5px",
            cursor: "pointer",
            fontSize: "14px",
            transition: "background-color 0.3s",
            maxWidth:350,
            textAlign:"center"
          }}
          onMouseOver={(e) => (e.target.style.backgroundColor = "#005bb5")}
          onMouseOut={(e) => (e.target.style.backgroundColor = "#0070f3")}
          onMouseDown={(e) => (e.target.style.backgroundColor = "#004494")}
          onMouseUp={(e) => (e.target.style.backgroundColor = "#005bb5")}
          onClick={()=> {
            window.parent.postMessage({xmlx: xmlx, new:true},  "*");
          }}
        >
          Save
        </div>
      </div>

      <div id="pop" style={{display:"none",width:'100vw', height:'100%', backgroundColor:"rgba(0,0,0,0.5)", backdropFilter:"blur(5px)", position:"absolute", top:0, left:0, zIndex:99999999, justifyContent:"center", alignItems:"center" }}>
                <p onClick={() => {
                                  const doc = document.getElementById("pop")
                                  doc.style.display = "none"
                }}>Me</p>

                <div style={{width:900, height:500, backgroundColor:"white", borderRadius:5}}>    <InvoiceList invoices={[invoices]}  />
               </div>
              </div>

      <DataGrid
        style={{ flex: 1 }}
        //   rowKeyGetter={rowKeyGetter}
        columns={columns}
        rows={rowss}
        onRowsChange={(el) => {
          setRowss(el);
        }}
        onSelectedRowsChange={setSelectedRows}
        topSummaryRows={[0]}
        bottomSummaryRows={[8]}
        className="fill-grid"
        // direction={direction}
        selectedRows={selectedRows}
        defaultColumnOptions={
          {
            // resizable: true,
            // renderCell: render
          }
        }
      />
    </div>
  );
}
