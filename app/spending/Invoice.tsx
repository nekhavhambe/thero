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
            {invoices.map(invoice => {
              console.log(invoice, '<<<<<<<<<<<<------------>>>>>>>>>>>>>>>')
                if(invoice){
                    return          ( <tr style={{}} key={invoice.id}>
                        <td style={{width:80}}>{invoice.id}</td>
                        <td  style={{width:150}}>{invoice.date}</td>
                        <th  style={{width:150, textAlign:"left"}}>Supplier</th>
                        <td  style={{width:150}}>${invoice.amount}</td>
                        <td  style={{width:100}}>{invoice.status}</td>
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
