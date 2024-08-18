import React from "react";
import PlanCard from "./PlanCard";
import DoneIcon from "@mui/icons-material/Done";

const PlanBillingTab = () => {
  return (
    <div
      style={{
        position: "relative",
      }}
    >
      <div
        style={{
          marginLeft: 20,
          marginRight: 20,
          backgroundColor: "transparent",
          padding: 25,
          borderRadius: 8,
          border: "1px solid #dddddd",
        }}
      >
        <div
          style={{
            fontSize: "18px",
            paddingBottom: 20,
            marginBottom: 10,
            display: "flex",
          }}
        >
          <p style={{ flex: 1 }}>Addons Modules</p>
          <div
            style={{
              width: 280,
              border: "1px solid rgba(238,238,238,1)",
              height: 35,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "14px",
              backgroundColor:'white',
            }}
          >
            Essential
          </div>
        </div>
        {[
          {
            name: "Advanced Statement Kit",
            infor:
              "Automatically analyze, perform, and document all your financial statement procedures, improving standardization and quality.",
            pricing: "Credit per Statement",
          },
          {
            name: "Advanced Extraction Kit",
            infor:
              "Automatically detect and extract data fields from invoices, receipts and contracts regardless of their layout with just a single click.",
            pricing: "Credit per page   ",
          },
        ].map((el) => (
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
              paddingTop: 20,
              borderTop: "1px solid #dddddd",
            }}
          >
            <div>
              <p style={{ fontSize: "17px" }}>{el.name}</p>
            </div>
            <div style={{ gridColumn: "span 2" }}>
              <p style={{ margin: 0, fontSize: "14px" }}>{el.infor}</p>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "0px solid #dddddd",
                  height: 40,
                }}
              >
                <DoneIcon
                  style={{ width: 20, color: "blue", marginRight: 10 }}
                />
                <p>
                  Verify mathematical accuracy, internal- and prior-year
                  consistency
                </p>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "0px solid #dddddd",
                  height: 40,
                }}
              >
                <DoneIcon
                  style={{ width: 20, color: "blue", marginRight: 10 }}
                />
                <p>Create company-wide default and custom tickmarks</p>
              </div>
              <div
                style={{
                  fontSize: "14px",
                  display: "flex",
                  alignItems: "center",
                  borderBottom: "0px solid #dddddd",
                  height: 40,
                }}
              >
                <DoneIcon
                  style={{ width: 20, color: "blue", marginRight: 10 }}
                />
                <p>Easily switch between financial statement versions</p>
              </div>
            </div>
            <div
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "flex-start",
                paddingLeft: 50,
              }}
            >
              <p
                style={{
                  borderRadius: 40,
                  fontSize: "14px",
                  backgroundColor: "rgba(238,238,238,1)",
                  // width: "100%",
                  height: 40,
                  width:40,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                }}
              >
                <p style={{ fontSize: "14px" }}>5.00</p>
               
              </p>
              <p style={{ color: "black", paddingLeft:10 }}> {el.pricing} </p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default PlanBillingTab;
