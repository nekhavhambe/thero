"use client";
import Recat, { useState } from "react";
import PlanBillingTab from "./Plan";
import PlanCard from "./PlanCard";
import DataTable from "./Invoices";

export default function Dashboard() {
  const [tab, setTab] = useState("Paymnet Methods");
  return (
    <>
      <div style={{ paddingTop: 20 }}>
        <div>
          <p
            style={{
              fontSize: 30,
              display: "flex",
              alignItems: "center",
              color: "#24222e",
            }}
          >
           Document Matching
          </p>
          <p style={{ paddingTop: 10 }}>Manage Subscription and Payment</p>
        </div>
        {/* <div style={{backgroundColor:"white", height:20, boxShadow:"0px 0px 1px 1px rgba(0, 0, 0, 0.1)", marginTop:20, paddingTop:5, paddingBottom:2, paddingLeft:5, borderRadius:5}}>
            <p style={{fontSize:13}}>Insnip is Apha view our road Map</p>
        </div> */}
        <div style={{ paddingTop: 20 }} />
        <div style={{ display: "flex" }}>
          <div style={{ flex: 2 }}>
            {/* <Chart /> */}
            <div style={{ display: "flex" }}>
            </div>
            <div style={{paddingTop:20, paddingBottom:50}}>
              {/* {tab == "Billing & Subscription" && <PlanBillingTab />} */}
              {<DataTable></DataTable>}
            </div>


          </div>
          <div style={{ flex: 1, paddingLeft: 25 }}>
            <p style={{ fontSize: 14 }}>Quick Links</p>
            <div style={{ paddingTop: 2 }}></div>
            <div
              style={{
                paddingLeft: 10,
                paddingTop: 10,
                paddingBottom: 20,
                borderRadius: "4px",
  
              }}
            >
              {[
                "Step by Step tutorial",
                "Learn Liabrary",
                "API Access",
                "Addon Modules",
              ].map((name) => {
                return (
                  <div
                    style={{
                      display: "flex",
                      alignItems: "center",
                      paddingTop: 10,
                    }}
                  >
                    <div
                      style={{
                        backgroundColor: "grey",
                        width: 30,
                        height: 30,
                        borderRadius: 20,
                      }}
                    ></div>
                    <p style={{ paddingLeft: 10, fontSize: 14 }}>{name}</p>
                  </div>
                );
              })}
            </div>
            <div style={{ paddingTop: 8 }}></div>
            <p style={{ fontSize: 14 }}>
              Don't Have Microsoft 365?{" "}
              <span style={{ color: "blue" }}>Get it Now</span>
            </p>
            <div style={{ paddingTop: 10 }}></div>
            <div
              style={{
                marginTop: 20,
                borderTop: "1px solid #ccc",
                // borderRadius: "4px",
                // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
                //padding: "20px",
                marginBottom: "0px",
              }}
            >
              <div style={{ alignItems: "center", paddingTop: 10 }}>
                <p style={{ paddingTop: 10, fontSize: 14 }}>Need Help?</p>
                <p style={{ fontSize: 14, paddingTop: 5 }}>
                  Codunt not find what you were looking for? Send us an email on{" "}
                  <span style={{ color: "blue" }}>help@insnip.co.za</span>
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
