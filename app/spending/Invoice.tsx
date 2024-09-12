'use client'
import React from 'react';
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table"
import { Button } from "@/components/ui/button"
import { Dialog, DialogContent, DialogHeader, DialogTitle, DialogTrigger } from "@/components/ui/dialog"

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
        <div className="flex items-center justify-center h-32 text-gray-500">
        No invoices available
      </div>
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
          {invoices[0].map.map((invoice) => (
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
//         <table>
//           <thead>
//             <tr style={{textAlign:"left"}}>
//               <th style={{width:250,fontSize:16}}>Created From</th>
//               <th  style={{width:150,fontSize:16}}>Date</th>
//               <th  style={{width:250,fontSize:16}}>Supplier</th>
//               <th style={{width:250,fontSize:16}}>Item</th>
//               <th  style={{width:150,fontSize:16}}>Amount</th>
//             </tr>
//           </thead>
//           <tbody>
//             {invoices[0].map(invoice => {
//               console.log(invoice, '<<<<<<<<<<<<------------>>>>>>>>>>>>>>>')
//                 if(invoice){
//                     return  ( <tr style={{ height:35,backgroundColor:"#f9f9f9"}} key={invoice.id}>
//                         <td style={{width:250, borderTop:'1px solid black',  borderBottom:'1px solid black', fontSize:14}}>{invoice.created_from}</td>
//                         <td  style={{width:150, borderTop:'1px solid black',  borderBottom:'1px solid black', fontSize:14}}>{invoice.date}</td>
//                         <td  style={{width:150, textAlign:"left", borderTop:'1px solid black',  borderBottom:'1px solid black', fontSize:14 }}>{invoice.vendor}</td>
//                         <td  style={{width:150, textAlign:"left", borderTop:'1px solid black',  borderBottom:'1px solid black', fontSize:14 }}>{invoice.item}</td>
//                         <td  style={{width:150, borderTop:'1px solid black',  borderBottom:'1px solid black', fontSize:14 }}>{invoice.amount}</td>
//                       </tr>)
//                 }

    
// })}
//           </tbody>
//         </table>
      )}
    </div>
  );
};

export default InvoiceList;
