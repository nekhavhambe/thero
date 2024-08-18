import React from 'react';
import PlanCard from "./PlanCard";


const PlanBillingTab = () => {
    return (
      
            <div style={{ position:"relative", border: '1px solid #e0e0e0', borderRadius: '10px', overflow:"hidden" , background:'white'}}>
                {false && <div style={{fontSize:13, width:'100%', height:30, backgroundColor:"red", top:0, left:0, color:"white", display:"flex", alignItems:"center", justifyContent:"center"}}>Subscription has been temporarily suspended due to a missed payment. <span style={{fontWeight:"bold", textDecoration:"underline", paddingLeft:5}}>Pay Now</span></div>}
                { true && <div style={{fontSize:13, width:'100%', height:30, backgroundColor:"blue", top:0, left:0, color:"white", display:"flex", alignItems:"center", justifyContent:"center"}}>Unlock extra features, priority support, and more powerful tools. <span style={{fontWeight:"bold", textDecoration:"underline", paddingLeft:5}}>Upgrade now</span></div>}
                <div style={{ display: 'flex', justifyContent: 'space-between', marginBottom: '20px', padding:"20px" }}>
                    <div style={{ flex:1}}>
                        <h2 style={{ fontSize: '18px', marginBottom: '5px' }}>Insnip Base Plan</h2>
                        <p style={{ margin: 0, fontSize: '14px' }}>ZAR 198.00 per seat each month</p>
                        <div style={{ fontSize: '32px', fontWeight: 'bold', paddingTop:20 }}>1 User</div>
                        <p style={{ margin: 0, fontSize: '12px', color: '#616161', paddingTop:10 }}>Workspace ID: 18619594</p>
                        <p style={{ margin: 0, fontSize: '12px', color: '#616161', paddingTop:20 }}>Addon Modules</p>
                        <div>
                        <p style={{ margin: 0, fontSize: '12px', color: '#616161', paddingTop:10  }}>AFS analyics   -  ZAR 199.00/user</p>
                        <p style={{ margin: 0, fontSize: '12px', color: '#616161', paddingTop:10 }}>Advance Extraction  -  ZAR 199.00/user</p>
                        <p style={{ margin: 0, fontSize: '12px', color: '#616161', paddingTop:10 }}>Invoice Extraction  -  ZAR 199.00/user</p>
                        </div>
                       
                    </div>
                    <div style={{ flex:1}}>
                      <PlanCard />
                    </div>
                </div>
                <div style={{ textAlign: 'left', marginTop: '20px', margin:"20px" }}>
                    <p style={{ fontSize: '12px', color: '#616161' }}>Questions? Check out our <span style={{ color: '#2196f3', cursor: 'pointer' }}>Billing FAQ</span>. Something not right? <span style={{ color: '#2196f3', cursor: 'pointer' }}>Contact us!</span></p>
                </div>
            </div>
     
    );
};

export default PlanBillingTab;
