import ExcelJS from 'exceljs';
import { saveAs } from 'file-saver';

function parseNum(val: any): number {
  if (val == null || val === '' || val === '0.00' || val === '0') return 0;
  return Number(String(val).replace(/\s+/g, ''));
}

function getMonthKeys(row: any): string[] {
  const keys: string[] = [];
  for (const key in row) {
    if (key.includes('Month Ended')) {
      if (!keys.includes(key)) keys.push(key);
    }
  }
  return keys.sort();
}

function addSummaryRow(ws: ExcelJS.Worksheet, row: any[], rowIndex: number, colCount: number, isBold = true) {
  const r = ws.getRow(rowIndex);
  row.forEach((val, i) => {
    r.getCell(i + 1).value = val;
  });
  r.eachCell((cell) => {
    cell.font = { bold: isBold, size: 10 };
    if (isBold) cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFF8E1' } };
    cell.border = {
      top: { style: 'thin' },
      left: { style: 'thin' },
      bottom: { style: 'thin' },
      right: { style: 'thin' },
    };
    cell.alignment = cell.alignment?.text ? { wrapText: true, vertical: 'middle', horizontal: 'left' } : { wrapText: true, vertical: 'middle', horizontal: 'right' };
  });
}

function styleDataCell(cell: ExcelJS.Cell, isNumber = false) {
  cell.font = { size: 10 };
  cell.border = {
    top: { style: 'thin' },
    left: { style: 'thin' },
    bottom: { style: 'thin' },
    right: { style: 'thin' },
  };
  cell.alignment = { vertical: 'middle', horizontal: isNumber ? 'right' : 'left', wrapText: true };
  if (isNumber && typeof cell.value === 'number') {
    cell.numFmt = '#,##0.00';
  }
}

function getFinancialYearPeriods() {
  const today = new Date();
  const year = today.getFullYear();
  const financialYearStart = new Date(year, 2, 1);
  if (today < financialYearStart) financialYearStart.setFullYear(year - 1);
  const periods: string[] = [];
  let periodStart = new Date(financialYearStart);
  for (let i = 0; i < 24; i++) {
    const endOfMonth = new Date(periodStart.getFullYear(), periodStart.getMonth() + 1, 0);
    const monthEnded = `Month Ended ${endOfMonth.toLocaleDateString('en-GB', { month: 'long', year: 'numeric' })}`;
    periods.push(monthEnded);
    periodStart.setMonth(periodStart.getMonth() + 1);
  }
  return periods;
}

export async function exportTableToExcel(rowss: any[], filename = 'Billing_Report.xlsx') {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'Thero';
  const ws = wb.addWorksheet('Billing Projections');
  const months = getFinancialYearPeriods();

  const totalCols = 8 + months.length * 7;
  for (let i = 1; i <= totalCols; i++) ws.getColumn(i).width = 14;
  ws.getColumn(1).width = 40;

  let rowIdx = 1;

  const headerRow = ws.getRow(rowIdx);
  headerRow.getCell(1).value = 'Project Billing Projections';
  headerRow.getCell(1).font = { bold: true, size: 12 };
  ws.mergeCells(rowIdx, 1, rowIdx, totalCols);
  rowIdx++;

  const staticHeaders = ['Task Order', 'Value (Excl)', 'Vat', 'Total Value (Incl)', 'Claimed Excl', 'Vat', 'Total Claimed (Incl)', 'Budget Remaining'];
  const subCols = ['Claimed', 'Vat', 'Total Claimed', 'Budgted', 'Vat', 'Total Budgted', 'Over/(Under) Billed'];

  const r2 = ws.getRow(rowIdx);
  let ci = 1;
  staticHeaders.forEach(h => {
    r2.getCell(ci++).value = h;
    r2.getCell(ci - 1).font = { bold: true, size: 10, color: { argb: 'FFFFFFFF' } };
    r2.getCell(ci - 1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1A237E' } };
    r2.getCell(ci - 1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    r2.getCell(ci - 1).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  });
  months.forEach(m => {
    const startCol = ci;
    r2.getCell(ci).value = m;
    r2.getCell(ci).font = { bold: true, size: 10, color: { argb: 'FFFFFFFF' } };
    r2.getCell(ci).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD4A017' } };
    r2.getCell(ci).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    for (let x = 0; x < subCols.length; x++) {
      r2.getCell(ci + x).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      r2.getCell(ci + x).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
    ws.mergeCells(rowIdx, startCol, rowIdx, startCol + subCols.length - 1);
    ci += subCols.length;
  });
  rowIdx++;

  const r3 = ws.getRow(rowIdx);
  ci = 1;
  for (let i = 0; i < staticHeaders.length; i++) {
    r3.getCell(ci).value = '';
    r3.getCell(ci).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    ci++;
  }
  months.forEach(() => {
    subCols.forEach(s => {
      r3.getCell(ci).value = s;
      r3.getCell(ci).font = { bold: true, size: 9 };
      r3.getCell(ci).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFF8E1' } };
      r3.getCell(ci).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      r3.getCell(ci).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      ci++;
    });
  });
  rowIdx++;

  let totals: any = { value: 0, vat: 0, totalVal: 0, billed: 0, billedVat: 0, totalBilled: 0 };

  rowss.forEach((row: any) => {
    const r = ws.getRow(rowIdx);
    ci = 1;

    const val = parseNum(row.value);
    const billed = parseNum(row.billed);
    const vat = val * 0.15;
    const totalVal = val * 1.15;
    const billedVat = billed * 0.15;
    const totalBilled = billed * 1.15;

    let budgetSum = 0;
    for (const key in row) {
      if (key.includes('Month Ended')) budgetSum += parseNum(row[key]);
    }
    const budgetRemaining = (val - budgetSum) * 1.15;

    totals.value += val;
    totals.vat += vat;
    totals.totalVal += totalVal;
    totals.billed += billed;
    totals.billedVat += billedVat;
    totals.totalBilled += totalBilled;

    const rowName = String(row.name || '');
    const nameMatch = rowName.match(/>([^<]+)</);
    r.getCell(ci++).value = nameMatch ? nameMatch[1].trim() : rowName.replace(/<[^>]*>/g, '').trim();
    r.getCell(ci++).value = val;
    r.getCell(ci++).value = vat;
    r.getCell(ci++).value = totalVal;
    r.getCell(ci++).value = billed;
    r.getCell(ci++).value = billedVat;
    r.getCell(ci++).value = totalBilled;
    r.getCell(ci++).value = budgetRemaining;

    months.forEach(m => {
      const claimed = parseNum(row.cashflow?.[m]);
      const budg = parseNum(row[m]) || parseNum(row.cashflow_monthly?.[m]?.amount);
      const claimedVat = claimed * 0.15;
      const totalClaimed = claimed * 1.15;
      const budgVat = budg * 0.15;
      const totalBudg = budg * 1.15;
      const overUnder = (claimed * 1.15) - (budg * 1.15);

      r.getCell(ci++).value = claimed || 0;
      r.getCell(ci++).value = claimedVat;
      r.getCell(ci++).value = totalClaimed;
      r.getCell(ci++).value = budg || 0;
      r.getCell(ci++).value = budgVat;
      r.getCell(ci++).value = totalBudg;
      r.getCell(ci++).value = overUnder;
    });

    for (let c = 1; c <= totalCols; c++) {
      styleDataCell(r.getCell(c), c > 1);
    }
    rowIdx++;
  });

  const totalRow = ws.getRow(rowIdx);
  ci = 1;
  totalRow.getCell(ci++).value = 'TOTAL';
  totalRow.getCell(ci++).value = totals.value;
  totalRow.getCell(ci++).value = totals.vat;
  totalRow.getCell(ci++).value = totals.totalVal;
  totalRow.getCell(ci++).value = totals.billed;
  totalRow.getCell(ci++).value = totals.billedVat;
  totalRow.getCell(ci++).value = totals.totalBilled;
  totalRow.getCell(ci++).value = 0;

  months.forEach(m => {
    let tClaimed = 0, tBudg = 0;
    rowss.forEach((row: any) => {
      tClaimed += parseNum(row.cashflow?.[m]);
      tBudg += parseNum(row[m]) || parseNum(row.cashflow_monthly?.[m]?.amount);
    });
    totalRow.getCell(ci++).value = tClaimed;
    totalRow.getCell(ci++).value = tClaimed * 0.15;
    totalRow.getCell(ci++).value = tClaimed * 1.15;
    totalRow.getCell(ci++).value = tBudg;
    totalRow.getCell(ci++).value = tBudg * 0.15;
    totalRow.getCell(ci++).value = tBudg * 1.15;
    totalRow.getCell(ci++).value = (tClaimed * 1.15) - (tBudg * 1.15);
  });

  for (let c = 1; c <= totalCols; c++) {
    const cell = totalRow.getCell(c);
    cell.font = { bold: true, size: 10 };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFF8E1' } };
    cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    cell.alignment = { vertical: 'middle', horizontal: c > 1 ? 'right' : 'left' };
    if (c > 1 && typeof cell.value === 'number') cell.numFmt = '#,##0.00';
  }

  const buf = await wb.xlsx.writeBuffer();
  saveAs(new Blob([buf]), filename);
}

export async function exportSpendingToExcel(rowss: any[], filename = 'Spending_Report.xlsx') {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'Thero';
  const ws = wb.addWorksheet('Spending Projections');
  const months = getFinancialYearPeriods();

  const staticLen = 8;
  const subCols = ['Actual Spending', 'Vat', 'Total Spending', 'Budgted Spending', 'Vat', 'Total Budgted', '(Over)/Under Spending'];
  const totalCols = staticLen + months.length * 7;
  for (let i = 1; i <= totalCols; i++) ws.getColumn(i).width = 14;
  ws.getColumn(1).width = 40;

  let rowIdx = 1;
  const hRow = ws.getRow(rowIdx);
  hRow.getCell(1).value = 'Project Spending Projections';
  hRow.getCell(1).font = { bold: true, size: 12 };
  ws.mergeCells(rowIdx, 1, rowIdx, totalCols);
  rowIdx++;

  const staticHeaders = ['Task Order', 'Value (Excl)', 'Vat', 'Total Value (Incl)', 'Actual Spending Excl', 'Vat', 'Total Actual Spending (Incl)', 'Spending Budget Remaining'];

  const r2 = ws.getRow(rowIdx);
  let ci = 1;
  staticHeaders.forEach(h => {
    r2.getCell(ci++).value = h;
    r2.getCell(ci - 1).font = { bold: true, size: 10, color: { argb: 'FFFFFFFF' } };
    r2.getCell(ci - 1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1A237E' } };
    r2.getCell(ci - 1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    r2.getCell(ci - 1).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  });
  months.forEach(m => {
    const startCol = ci;
    r2.getCell(ci).value = m;
    r2.getCell(ci).font = { bold: true, size: 10, color: { argb: 'FFFFFFFF' } };
    r2.getCell(ci).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD4A017' } };
    r2.getCell(ci).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    for (let x = 0; x < subCols.length; x++) {
      r2.getCell(ci + x).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      r2.getCell(ci + x).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
    ws.mergeCells(rowIdx, startCol, rowIdx, startCol + subCols.length - 1);
    ci += subCols.length;
  });
  rowIdx++;

  const r3 = ws.getRow(rowIdx);
  ci = 1;
  for (let i = 0; i < staticHeaders.length; i++) {
    r3.getCell(ci).value = '';
    r3.getCell(ci).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    ci++;
  }
  months.forEach(() => {
    subCols.forEach(s => {
      r3.getCell(ci).value = s;
      r3.getCell(ci).font = { bold: true, size: 9 };
      r3.getCell(ci).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFF8E1' } };
      r3.getCell(ci).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      r3.getCell(ci).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
      ci++;
    });
  });
  rowIdx++;

  let totals: any = { value: 0, vat: 0, totalVal: 0, billed: 0, billedVat: 0, totalBilled: 0 };

  rowss.forEach((row: any) => {
    const r = ws.getRow(rowIdx);
    ci = 1;

    const val = parseNum(row.value);
    const billed = parseNum(row.billed);
    const vat = val * 0.15;
    const totalVal = val * 1.15;
    const billedVat = billed * 0.15;
    const totalBilled = billed * 1.15;

    let budgetSum = 0;
    for (const key in row) {
      if (key.includes('Month Ended')) budgetSum += parseNum(row[key]);
    }
    const budgetRemaining = (val - budgetSum) * 1.15;

    totals.value += val;
    totals.vat += vat;
    totals.totalVal += totalVal;
    totals.billed += billed;
    totals.billedVat += billedVat;
    totals.totalBilled += totalBilled;

    const rowName = String(row.name || '');
    const nameMatch = rowName.match(/>([^<]+)</);
    r.getCell(ci++).value = nameMatch ? nameMatch[1].trim() : rowName.replace(/<[^>]*>/g, '').trim();
    r.getCell(ci++).value = val;
    r.getCell(ci++).value = vat;
    r.getCell(ci++).value = totalVal;
    r.getCell(ci++).value = billed;
    r.getCell(ci++).value = billedVat;
    r.getCell(ci++).value = totalBilled;
    r.getCell(ci++).value = budgetRemaining;

    months.forEach(m => {
      const actual = parseNum(row.cashflow?.[m]);
      const budg = parseNum(row[m]) || parseNum(row.cashflow_monthly?.[m]?.amount);
      const actualVat = actual * 0.15;
      const totalActual = actual * 1.15;
      const budgVat = budg * 0.15;
      const totalBudg = budg * 1.15;
      const overUnder = (budg * 1.15) - (actual * 1.15);

      r.getCell(ci++).value = actual || 0;
      r.getCell(ci++).value = actualVat;
      r.getCell(ci++).value = totalActual;
      r.getCell(ci++).value = budg || 0;
      r.getCell(ci++).value = budgVat;
      r.getCell(ci++).value = totalBudg;
      r.getCell(ci++).value = overUnder;
    });

    for (let c = 1; c <= totalCols; c++) styleDataCell(r.getCell(c), c > 1);
    rowIdx++;
  });

  const totalRow = ws.getRow(rowIdx);
  ci = 1;
  totalRow.getCell(ci++).value = 'TOTAL';
  totalRow.getCell(ci++).value = totals.value;
  totalRow.getCell(ci++).value = totals.vat;
  totalRow.getCell(ci++).value = totals.totalVal;
  totalRow.getCell(ci++).value = totals.billed;
  totalRow.getCell(ci++).value = totals.billedVat;
  totalRow.getCell(ci++).value = totals.totalBilled;
  totalRow.getCell(ci++).value = 0;

  months.forEach(m => {
    let tActual = 0, tBudg = 0;
    rowss.forEach((row: any) => {
      tActual += parseNum(row.cashflow?.[m]);
      tBudg += parseNum(row[m]) || parseNum(row.cashflow_monthly?.[m]?.amount);
    });
    totalRow.getCell(ci++).value = tActual;
    totalRow.getCell(ci++).value = tActual * 0.15;
    totalRow.getCell(ci++).value = tActual * 1.15;
    totalRow.getCell(ci++).value = tBudg;
    totalRow.getCell(ci++).value = tBudg * 0.15;
    totalRow.getCell(ci++).value = tBudg * 1.15;
    totalRow.getCell(ci++).value = (tBudg * 1.15) - (tActual * 1.15);
  });

  for (let c = 1; c <= totalCols; c++) {
    const cell = totalRow.getCell(c);
    cell.font = { bold: true, size: 10 };
    cell.fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFFFF8E1' } };
    cell.border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    cell.alignment = { vertical: 'middle', horizontal: c > 1 ? 'right' : 'left' };
    if (c > 1 && typeof cell.value === 'number') cell.numFmt = '#,##0.00';
  }

  const buf = await wb.xlsx.writeBuffer();
  saveAs(new Blob([buf]), filename);
}

export async function exportCombinedToExcel(rowss: any[], filename = 'Combined_Report.xlsx') {
  const wb = new ExcelJS.Workbook();
  wb.creator = 'Thero';
  const ws = wb.addWorksheet('Combined Projections');
  const months = getFinancialYearPeriods();

  const staticLen = 13;
  const subCols = [
    'Claimed', 'Vat', 'Total Claimed', 'Budgted', 'Vat', 'Total Budgted', 'Over/(Under) Billed',
    'Actual Spending', 'Vat', 'Total Spending', 'Budgted Spending', 'Vat', 'Total Budgted Spending', '(Over)/Under Spending',
    'Actual Profit/(Loss)'
  ];
  const totalCols = staticLen + months.length * subCols.length;
  for (let i = 1; i <= totalCols; i++) ws.getColumn(i).width = 14;
  ws.getColumn(1).width = 40;
  ws.getColumn(2).width = 16;

  let rowIdx = 1;
  const hRow = ws.getRow(rowIdx);
  hRow.getCell(1).value = 'Project Profit Projections';
  hRow.getCell(1).font = { bold: true, size: 12 };
  ws.mergeCells(rowIdx, 1, rowIdx, totalCols);
  rowIdx++;

  const staticHeaders = ['Task Order', 'Value (Excl)', 'Vat', 'Total Value (Incl)', 'Claimed Excl', 'Vat', 'Total Claimed (Incl)', 'Budget Remaining', 'Actual Spending Excl', 'Vat', 'Total Actual Spending (Incl)', 'Spending Budget Remaining', 'Actual Profit/(Loss)'];

  const r2 = ws.getRow(rowIdx);
  let ci = 1;
  staticHeaders.forEach(h => {
    r2.getCell(ci++).value = h;
    r2.getCell(ci - 1).font = { bold: true, size: 9, color: { argb: 'FFFFFFFF' } };
    r2.getCell(ci - 1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FF1A237E' } };
    r2.getCell(ci - 1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
    r2.getCell(ci - 1).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
  });
  months.forEach(m => {
    ws.mergeCells(rowIdx, ci, rowIdx, ci + subCols.length - 1);
    r2.getCell(ci).value = m;
    r2.getCell(ci).font = { bold: true, size: 10, color: { argb: 'FFFFFFFF' } };
    r2.getCell(ci).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFD4A017' } };
    for (let x = 0; x < subCols.length; x++) {
      r2.getCell(ci + x).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      r2.getCell(ci + x).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    }
    ci += subCols.length;
  });
  rowIdx++;

  const r3 = ws.getRow(rowIdx);
  ci = 1;
  for (let i = 0; i < staticHeaders.length; i++) r3.getCell(ci++).value = '';
  months.forEach(() => {
    subCols.forEach(s => {
      r3.getCell(ci++).value = s;
      r3.getCell(ci - 1).font = { bold: true, size: 8 };
      r3.getCell(ci - 1).fill = { type: 'pattern', pattern: 'solid', fgColor: { argb: 'FFEFEBE9' } };
      r3.getCell(ci - 1).border = { top: { style: 'thin' }, left: { style: 'thin' }, bottom: { style: 'thin' }, right: { style: 'thin' } };
      r3.getCell(ci - 1).alignment = { vertical: 'middle', horizontal: 'center', wrapText: true };
    });
  });
  rowIdx++;

  rowss.forEach((row: any) => {
    const r = ws.getRow(rowIdx);
    ci = 1;

    const val = parseNum(row.value);
    const billed_ = parseNum(row.billed_);
    const billed = parseNum(row.billed);
    const vat = val * 0.15;
    const totalVal = val * 1.15;
    const billedVat_ = billed_ * 0.15;
    const totalBilled_ = billed_ * 1.15;
    const billedVat = billed * 0.15;
    const totalBilled = billed * 1.15;

    let budgetSum = 0;
    for (const key in row) {
      if (key.includes('Month Ended')) budgetSum += parseNum(row[key]);
    }
    const budgetRemaining = (val - budgetSum) * 1.15;

    const rowName = String(row.name || '');
    const nameMatch = rowName.match(/>([^<]+)</);
    r.getCell(ci++).value = nameMatch ? nameMatch[1].trim() : rowName.replace(/<[^>]*>/g, '').trim();
    r.getCell(ci++).value = val;
    r.getCell(ci++).value = vat;
    r.getCell(ci++).value = totalVal;
    r.getCell(ci++).value = billed_;
    r.getCell(ci++).value = billedVat_;
    r.getCell(ci++).value = totalBilled_;
    r.getCell(ci++).value = budgetRemaining;
    r.getCell(ci++).value = billed;
    r.getCell(ci++).value = billedVat;
    r.getCell(ci++).value = totalBilled;
    r.getCell(ci++).value = 0;
    r.getCell(ci++).value = (totalBilled_ - totalBilled);

    months.forEach(m => {
      const claimed = parseNum(row.cashflow_?.[m]);
      const actual = parseNum(row.cashflow?.[m]);
      const budg = parseNum(row[m]) || parseNum(row.cashflow_monthly?.[m]?.amount);
      const budgSpend = parseNum(row[m]) || parseNum(row.cashflow_monthly_?.[m]?.amount);

      r.getCell(ci++).value = claimed || 0;
      r.getCell(ci++).value = (claimed || 0) * 0.15;
      r.getCell(ci++).value = (claimed || 0) * 1.15;
      r.getCell(ci++).value = budg || 0;
      r.getCell(ci++).value = (budg || 0) * 0.15;
      r.getCell(ci++).value = (budg || 0) * 1.15;
      r.getCell(ci++).value = ((claimed || 0) * 1.15) - ((budg || 0) * 1.15);
      r.getCell(ci++).value = actual || 0;
      r.getCell(ci++).value = (actual || 0) * 0.15;
      r.getCell(ci++).value = (actual || 0) * 1.15;
      r.getCell(ci++).value = budgSpend || 0;
      r.getCell(ci++).value = (budgSpend || 0) * 0.15;
      r.getCell(ci++).value = (budgSpend || 0) * 1.15;
      r.getCell(ci++).value = ((budgSpend || 0) * 1.15) - ((actual || 0) * 1.15);
      r.getCell(ci++).value = (claimed || 0) - (actual || 0);
    });

    for (let c = 1; c <= totalCols; c++) styleDataCell(r.getCell(c), c > 1);
    rowIdx++;
  });

  const buf = await wb.xlsx.writeBuffer();
  saveAs(new Blob([buf]), filename);
}
