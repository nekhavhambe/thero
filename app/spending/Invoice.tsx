import React from 'react';

// Example InvoiceList component
const InvoiceList = ({ invoices }) => {
    
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
        
<table style="border-collapse: collapse; width: 100%; font-family: Arial, sans-serif;">
  <thead>
    <tr style="text-align: left; background-color: #f4f4f4; border-bottom: 2px solid #ddd;">
      <th style="padding: 8px; width: 250px; font-size: 14px; color: #333;">Created From</th>
      <th style="padding: 8px; width: 150px; font-size: 14px; color: #333;">Date</th>
      <th style="padding: 8px; width: 250px; font-size: 14px; color: #333;">Supplier</th>
      <th style="padding: 8px; width: 250px; font-size: 14px; color: #333;">Item</th>
      <th style="padding: 8px; width: 150px; font-size: 14px; color: #333;">Amount</th>
    </tr>
  </thead>
  <tbody>
    {invoices[0].map(invoice => {
      if (invoice) {
        return (
          <tr style="background-color: #fff; border-bottom: 1px solid #ddd; height: 30px;" key={invoice.id}>
            <td style="padding: 8px; width: 250px; font-size: 13px; color: #666;">{invoice.created_from}</td>
            <td style="padding: 8px; width: 150px; font-size: 13px; color: #666;">{invoice.date}</td>
            <td style="padding: 8px; width: 250px; font-size: 13px; color: #666;">{invoice.vendor}</td>
            <td style="padding: 8px; width: 250px; font-size: 13px; color: #666;">{invoice.item}</td>
            <td style="padding: 8px; width: 150px; font-size: 13px; color: #666;">{invoice.amount}</td>
          </tr>
        );
      }
    })}
  </tbody>
</table>

      )}
    </div>
  );
};

export default InvoiceList;
