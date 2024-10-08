import React from 'react';

// Example InvoiceList component
const InvoiceList = ({ invoices }) => {
    
  const formatAmount = (amount: number) => {
    return amount.toFixed(2).replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }
  
  return (
    <div className="invoice-list">
<div style={{ display: 'flex',justifyContent: 'space-between', paddingBottom:30, paddingTop:15 }}>
  <h2 style={{ margin: 0, fontSize: '17px', color: '#333', }}>Actual Spending</h2>
  <p
    style={{ margin: 0, fontSize: '14px', color: 'green', cursor: 'pointer', textDecoration: 'underline' }}
    onClick={() => {
      const doc = document.getElementById('pop');
      if (doc) doc.style.display = 'none';
    }}
  >
    Close Modal
  </p>
</div>

      
      {!invoices[0] || invoices.length === 0 ? (
        <p>No invoices available.</p>
      ) : (
        
<table style={{ borderCollapse: 'collapse', width: '100%', fontFamily: 'Arial, sans-serif' }}>
  <thead>
    <tr style={{ textAlign: 'left', backgroundColor: '#f4f4f4', borderBottom: '2px solid #ddd' }}>
      <th style={{ padding: '8px', width: '250px', fontSize: '14px', color: '#333' }}>Created From</th>
      <th style={{ padding: '8px', width: '150px', fontSize: '14px', color: '#333' }}>Date</th>
      <th style={{ padding: '8px', width: '250px', fontSize: '14px', color: '#333' }}>Supplier</th>
      <th style={{ padding: '8px', width: '250px', fontSize: '14px', color: '#333' }}>Item</th>
      <th style={{ padding: '8px', width: '150px', fontSize: '14px', color: '#333' }}>Amount</th>
    </tr>
  </thead>
  <tbody>
    {invoices[0].map(invoice => {
      if (invoice) {
        return (
          <tr style={{ backgroundColor: '#fff', borderBottom: '1px solid #ddd', height: '30px' }} key={invoice.id}>
            <td style={{ padding: '8px', width: '250px', fontSize: '13px', color: '#666' }}>{invoice.created_from}</td>
            <td style={{ padding: '8px', width: '150px', fontSize: '13px', color: '#666' }}>{invoice.date}</td>
            <td style={{ padding: '8px', width: '250px', fontSize: '13px', color: '#666' }}>{invoice.vendor}</td>
            <td style={{ padding: '8px', width: '250px', fontSize: '13px', color: '#666' }}>{invoice.item}</td>
            <td style={{ padding: '8px', width: '150px', fontSize: '13px', color: '#666' }}>{formatAmount(invoice.amount)}</td>
          </tr>
        );
      }
      return null; // Explicitly return null for non-existing invoices
    })}
  </tbody>
</table>


      )}
    </div>
  );
};

export default InvoiceList;
