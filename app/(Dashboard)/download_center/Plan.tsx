import React from "react";
import PlanCard from "./PlanCard";

const PlanBillingTab = () => {
  return (
    <div
      style={{
        position: "relative",
        border: "1px solid #e0e0e0",
        borderRadius: "10px",
        overflow: "hidden",
        background: "white",
      }}
    >
      <div
        style={{
          width: "100%",
          height: 30,
          backgroundColor: "blue",
          top: 0,
          left: 0,
          display:"flex",
          alignItems:"center",
          justifyContent:"center"
        }}
      >
        <p style={{color:"white", fontSize:13}}>Insnip is stable, view <span style={{fontWeight:"bold"}}> Road Map </span></p>
      </div>
      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          padding: "20px",
        }}
      >
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "17px", marginBottom: "5px" }}>Release</p>
          <p style={{ margin: 0, fontSize: "14px", color: "blue" }}>
            insnip-1.0.0.exe
          </p>
          <div
            style={{ fontSize: "19px", fontWeight: "normal", paddingTop: 20 }}
          >
            Changelog
          </div>
          <ul style={{paddingLeft:20}}>
            <li>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                //   color: "blue",
                  paddingTop: 10,
                }}
              >
                Workspace ID: 18619594
              </p>
            </li>
            <li>
              <p
                style={{
                  margin: 0,
                  fontSize: "12px",
                //   color: "blue",
                  paddingTop: 10,
                }}
              >
                Workspace ID: 18619594
              </p>
            </li>
          </ul>
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
    </div>
  );
};

export default PlanBillingTab;
