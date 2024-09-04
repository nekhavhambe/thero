import React from 'react';

// Example InvoiceList component
const InvoiceList = ({ invoices }) => {
    
  return (
    <div className="invoice-list">
      <h2 style={{textAlign:"left"}}>Invoice List</h2>
      {invoices.length === 0 ? (
        <p>No invoices available.</p>
      ) : (
        <table>
          <thead>
            <tr style={{textAlign:"left"}}>
              <th style={{width:80}}>ID</th>
              <th  style={{width:150}}>Date</th>
              <th  style={{width:150}}>Supplier</th>
              <th  style={{width:150}}>Amount</th>
              <th  style={{width:100}}>Status</th>
            </tr>
          </thead>
          <tbody>
            {invoices[0].map(invoice => {
              console.log(invoice, '<<<<<<<<<<<<------------>>>>>>>>>>>>>>>')
                if(invoice){
                    return  ( <tr style={{}} key={invoice.id}>
                        <td style={{width:250}}>{invoice.created_from}</td>
                        <td  style={{width:150}}>{invoice.date}</td>
                        <th  style={{width:150, textAlign:"left"}}>${invoice.vendor}</th>
                        <td  style={{width:150}}>${invoice.amount}</td>
                      </tr>)
                }

    
})}
          </tbody>
        </table>
      )}
    </div>
  );
};

export default InvoiceList;
