"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  return (
    <div style={{ backgroundColor: "#f6f6fa", height:'100vh' }}>
      <div
        style={{
   
          paddingTop: 24,
          paddingLeft: 24,
          paddingRight: 24,
          // backgroundColor:"black",
          // color:"white"
       

        }}
      >
        <div style={{ display: "grid", gridTemplateColumns: "1fr 2fr 1fr" , zIndex:9999999 }}>
          <div
            style={{
              display: "flex",
              alignItems: "center",
              backgroundColor: "white",
              width: 400,
              height: 50,
              padding: 6,
              boxShadow: "0 0 2px 0 rgba(23,16,14,0.2)",
              borderRadius: 5,
            }}
          >
            <div
              style={{
                width: 40,
                height: 40,
                backgroundColor: "black",
                borderRadius: 5,
              }}
            >
              {" "}
            </div>
            {['Workspaces', "Subscription",'Users', "Settings"].map(e => {
                return <p style={{padding:5, }}>{e}</p>
            })}
            
          </div>
          <div> </div>
          <div style={{ display:"flex", justifyContent:"flex-end", alignItems:'center'}}>
          <div
            style={{
              display: "flex",
              // alignItems: "flex-end",
              backgroundColor: "white",
              height: 50,
              padding: 6,
              boxShadow: "0 0 2px 0 rgba(23,16,14,0.2)",
              borderRadius: 5,
              width:250,
              alignItems:'center'
            }}
          >
            {/* <div style={{width:40, height:40, backgroundColor:'grey', borderRadius: 5}}> </div> */}
            <div style={{ marginRight:5,padding:5, flex:1}}>
              <input style={{fontSize:14, height:40, paddingLeft:10, outline:"none"}} placeholder="Searches" />
            </div>
            {["Start free trial" ].map(e => {
                return <p style={{display:"flex", justifyContent:"center", alignItems:"center",width:40,height:40,padding:8, border:"1px solid black", backgroundColor:"black", color:"white", borderRadius:20}}></p>
            })}
            </div>
          </div>
        </div>
      </div>
      <div style={{paddingLeft:40, paddingRight:40, paddingTop:50}}>{children}</div>
      <div style={{height:80}}></div>
      {/* <div style={{width:'100%', height:600, backgroundColor:"#080808", color:'white'}}>
      <div style={{display:"flex", paddingTop:20, paddingLeft:10, paddingRight:10, borderBottom:'1px solid white', }}>
        <div style={{flex:1}}><p style={{flex:1, fontSize:20, paddingLeft:18}}>Ready to get started? </p><p style={{flex:1, fontSize:20, paddingLeft:18}}>Customize your plan and get an instant price estimate!</p></div>
        <div style={{paddingRight:20}}>Calculate Your Price</div>
      </div>
      <div style={{ display:"grid", gridTemplateColumns:"1fr 1fr 1fr 1fr 1fr", paddingTop:50}}>
       <div></div>
       <div style={{color:"white"}}><p>Product</p> {["Platform", "Financial Statement Suite", "Advanced Extraction Suite", "Cloud Collaboration Suite"].map((el)=> (<p>{el}</p>))}</div>
       <div style={{color:"white"}}><p>Teams</p> {["External Audit", "Internal Audit", "Tax", "Financial Control", 'Government Audit', 'Advisory'].map((el)=> (<p>{el}</p>))}</div>
       <div style={{color:"white"}}><p>Roles</p> {["Team Contributor", "Manager", "C-level / Partner" ].map((el)=> (<p>{el}</p>))}</div>
       <div style={{color:"white"}}><p>Pricing</p> {[ "Overview" ].map((el)=> (<p>{el}</p>))}</div>
      </div>

      <div style={{height:240}} />

<div style={{borderTop:"1px solid white"}}>
lll
</div>

      </div> */}
    </div>
  );
}

















