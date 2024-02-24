"use client"
import * as React from 'react';
import Stack from '@mui/material/Stack';
import Box from '@mui/material/Box';
import { SparkLineChart } from '@mui/x-charts/SparkLineChart';

export default function BasicSparkLine() {
  return (
<div>
      <div style={{display:"flex", alignItems:"center", paddingRight:30}}>
        <SparkLineChart showHighlight={true} data={[1, 4, 2, 5, 7, 2, 4, 6]} height={150} />
        <div style={{width:100, fontSize:12}}>
            <p style={{}}>1,000</p>
            <p style={{fontWeight:"bold"}}>SNIPS/YEAR</p>
            </div>
      </div>
      <div>
        <div style={{backgroundColor:"white", height:100, marginRight:30, padding:10, borderRadius:5, boxShadow:""}}>
            <div style={{display:"flex", marginBottom:10}}>
                <p style={{flex:1, fontSize:14}}>Current Plan</p>
                <p style={{color:"blue", fontSize:14}}>Upgrade</p>
            </div>
            <div style={{border:"1px solid grey", height:50, display:"flex", alignItems:"center"}}>
               <div style={{width:30, height:30, backgroundColor:"grey", borderRadius:30, marginLeft:10}}></div>
               <div>
               <p style={{paddingLeft:10}}>Business Plan</p>
               <p style={{paddingLeft:10}}>Active</p>
               </div>
            </div>
        </div>
      </div>
      <div>
        <div style={{backgroundColor:"white", height:100, marginRight:30, padding:10, marginTop:30}}>
            <div style={{display:"flex", marginBottom:10}}>
                <p style={{flex:1, fontSize:14}}>My Service</p>
                <p style={{color:"blue", fontSize:14}}>Upgrade</p>
            </div>
            <div style={{border:"1px solid grey", height:50, display:"flex", alignItems:"center"}}>
               <div style={{width:30, height:30, backgroundColor:"grey", borderRadius:30, marginLeft:10}}></div>
               <div>
               <p style={{paddingLeft:10}}>Business Plan</p>
               <p style={{paddingLeft:10}}>Active</p>
               </div>
              
            </div>
        </div>
      </div>
</div>

  );
}