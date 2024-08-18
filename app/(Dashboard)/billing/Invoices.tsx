import styles from "./styles.module.css"
import React, {useState} from "react";



const tdStyle = {

border: "1px solid #dddddd",

textAlign: "left",

padding: "8px",
height:'5px',
overFlow:'hidden',


};


const DataTable = () => {

    const [data, setData] = useState([

        {
        
        supplier: "Massachusetts Department of Revenue",
        
        invoice: "R1,000.00",
        
        date: "07/03/2024",
        
        amount: "R1,000.00",
        
        state: "Posted",
        
        summary: "Vendor Invoice: 07/03/2024 11:30:54:7952 Batch"
        
        },
        
        {
        
        supplier: "Massachusetts Department of Revenue",
        
        invoice: "R1,000,000.00",
        
        date: "07/03/2024",
        
        amount: "R1,000,000.00",
        
        state: "Posted",
        
        summary: "Vendor Invoice: 07/03/2024 11:24:22:4386 Batch"
        
        },
        
        {
        
        supplier: "ADP",
        
        invoice: "R160,000.00",
        
        date: "06/25/2024",
        
        amount: "R160,000.00",
        
        state: "Posted",
        
        summary: "Vendor Invoice: 06/25/2024 11:49:39:3913 Batch"
        
        },
        
        {
        
        supplier: "Boston Properties",
        
        invoice: "R20,000.00",
        
        date: "06/25/2024",
        
        amount: "R20,000.00",
        
        state: "Posted",
        
        summary: "Vendor Invoice: 06/25/2024 11:45:30:9106 Batch"
        
        },
        
        {
        
        supplier: "Massachusetts Department of Revenue",
        
        invoice: "R1,000.00",
        
        date: "06/25/2024",
        
        amount: "R1,000.00",
        
        state: "Posted",
        
        summary: "Vendor Invoice: 06/25/2024 09:44:24:3939 Batch"
        
        },
        
        {
        
        supplier: "Massachusetts Department of Revenue",
        
        invoice: "R400.00",
        
        date: "06/25/2024",
        
        amount: "R400.00",
        
        state: "Posted",
        
        summary: "Vendor Invoice: 06/25/2024 09:38:35:1511 Batch"
        
        },
        
        {
        
        supplier: "Boston Properties",
        
        invoice: "R8,474.68",
        
        date: "05/30/2024",
        
        amount: "R8,474.68",
        
        state: "Paid",
        
        summary: "Quick Payments: 2024/06/24 05:32:36:9283 Batch"
        
        },
        
        {
        
        supplier: "Boston Properties",
        
        invoice: "R1,000.00",
        
        date: "05/15/2024",
        
        amount: "R1,000.00",
        
        state: "Paid",
        
        summary: "Vendor Invoice: 05/15/2024 14:26:36:371 Batch"
        
        },
        
        {
        
        supplier: "ADP",
        
        invoice: "R4,000.00",
        
        date: "05/15/2024",
        
        amount: "R4,000.00",
        
        state: "Paid",
        
        summary: "Vendor Invoice: 05/15/2024 14:24:08:7532 Batch"
        
        },
        
        {
        
        supplier: "ADP",
        
        invoice: "R(1,000.00)",
        
        date: "05/15/2024",
        
        amount: "R(1,000.00)",
        
        state: "Paid",
        
        summary: "Vendor Invoice: 05/15/2024 14:22:48:8235 Batch"
        
        },
        
        {
        
        supplier: "Massachusetts Department of Revenue",
        
        invoice: "R100,000.00",
        
        date: "04/22/2024",
        
        amount: "R100,000.00",
        
        state: "Paid",
        
        summary: "Vendor Invoice: 04/22/2024 19:14:03:1930 Batch"
        
        },
        
        {
        
        supplier: "ADP",
        
        invoice: "R5,000.00",
        
        date: "04/16/2024",
        
        amount: "R5,000.00",
        
        state: "Paid",
        
        summary: "Vendor Invoice: 04/16/2024 12:31:30:932 Batch"
        
        }
        
        ])

    const [filtere, setFiltere] = useState(data)

    const [dateF, setDateF] = useState("")
    const [numberF, setNumberF] = useState("")
    const [amountF, setAmountF] = useState("")
    const [statusF, setStatusF] = useState("")
    // const [amountF, setAmountF] = useState("")


return (
<>
<div style={{paddingBottom:30}}>
<button className={styles.inputbox} >Pay Outsanding Amount</button>
<button className={styles.inputbox}  style={{marginLeft:10}}>Download Statment</button>
</div>

<div className={styles.container}>
<table className={styles.table}>

<thead>

<tr >

<th className={styles.th}>
    <div className={styles.text}>Date</div>
    <input onChange={el => {
        setDateF(el.target.value)
    }} className={styles.search_input}/>
</th>
<th className={styles.th}>
<div className={styles.text}>Invoice Number</div>
    <input  onChange={el => {
        setNumberF(el.target.value)
    }} className={styles.search_input}/>
    </th>



<th className={styles.th}>
<div className={styles.text}>Amount</div>
    <input  onChange={el => {
        setAmountF(el.target.value)
    }} id="amount" className={styles.search_input}/>
</th>

<th className={styles.th}>
<div className={styles.text}>State</div>
    <input onChange={e =>{
       
      setStatusF(e.target.value)
   
       let nd = data.filter(el =>{ 

           let state = e.target.value.toLocaleLowerCase( )

           const amount = el.amount.match(/\d+/g);
           const amount_ = amountF.match(/\d+/g);        
           let em = amount_ ? amount?.join('') == amount_.join('')  :true
           console.log(amount_, amount, amount_?.join('') )

           if ( em && el.state.toLowerCase().includes(state)){
            return true
           }
           
         
        })
        setFiltere(nd)
        ///alert("fired")
    }} className={styles.search_input}/>
</th>



</tr>

</thead>

<tbody>

{filtere.map((row, index) => (

<tr style={{maxHeight:2, overflow:'hidden', backgroundColor:'white' }} key={index}>
<td style={tdStyle}>
<div style={{overflow:"hidden", fontSize:12}}>
      {row.date}
    </div>
    </td>
<td style={tdStyle}>
<div style={{overflow:"hidden", fontSize:12}}>
{row.invoice}
    </div>
    </td>



<td style={tdStyle}>
<div style={{overflow:"hidden", fontSize:12}}>
{row.amount}
    </div>

</td>

<td style={tdStyle}>
<div style={{overflow:"hidden", fontSize:12}}>
{row.state}
    </div>

</td>

{/* <td style={tdStyle}><button style={buttonStyle}>Print</button> <button style={buttonStyle}>Pay</button></td> */}


</tr>

))}

</tbody>

</table>
</div>
</>

);

};

export default DataTable;