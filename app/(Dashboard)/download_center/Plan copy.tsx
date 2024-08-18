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
          display: "flex",
          justifyContent: "space-between",
          marginBottom: "20px",
          padding: "20px",
        }}
      >
        <div style={{ flex: 1 }}>
          <p style={{ fontSize: "17px", marginBottom: "5px" }}>Past Release</p>
          <p style={{ margin: 0, fontSize: "14px", color: "blue" }}>
            insnip-1.0.0
          </p>
        </div>
        <div style={{ flex: 1 }}></div>
      </div>
    </div>
  );
};

export default PlanBillingTab;
