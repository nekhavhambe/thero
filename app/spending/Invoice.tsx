'use client'
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
// Example InvoiceList component
const InvoiceList = ({ invoices }) => {

  const formatAmount = (amount: number) => {
    return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
    
  return (
    <div className="invoice-list">
      <div style={{display:"flex", alignItems:"center"}}>
      <h2 style={{textAlign:"left", flex:1}}>Purchases</h2>
      <p style={{textDecoration:"underline"}} onClick={() => {
                                  const doc = document.getElementById("pop")
                                  doc.style.display = "none"
                }}>Close Modal</p>
      </div>
      
      {!invoices[0] || invoices.length === 0 ? (
        <p>No invoices available.</p>
      ) : (
        
        <Table>
          <TableHeader>
            <TableRow className="text-xs">
              <TableHead className="py-2">Convert From</TableHead>
              <TableHead className="py-2">Date</TableHead>
              <TableHead className="py-2">Supplier</TableHead>
              <TableHead className="py-2">Item</TableHead>
              <TableHead className="text-right py-2">Amount</TableHead>
            </TableRow>
          </TableHeader>
          <TableBody>
            {invoices[0].map((invoice) => (
              <TableRow key={invoice.id} className="text-sm">
                <TableCell className="py-2">{invoice.convertFrom}</TableCell>
                <TableCell className="py-2">{invoice.date}</TableCell>
                <TableCell className="py-2">{invoice.supplier}</TableCell>
                <TableCell className="py-2">{invoice.item}</TableCell>
                <TableCell className="text-right py-2">{formatAmount(invoice.amount)}</TableCell>
              </TableRow>
            ))}
          </TableBody>
        </Table>
      )}
    </div>
  );
};

export default InvoiceList;
