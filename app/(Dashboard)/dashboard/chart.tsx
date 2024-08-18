"use client";
import * as React from "react";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";
import Image from 'next/image'

const styles = {
  card: {
    backgroundColor: "#f9f9f9" /* Light background color */,
    border: "1px solid #e0e0e0" /* Light grey border */,
    borderRadius: "8px" /* Rounded corners */,
    width: "200px" /* Fixed width for cards */,
    padding: "20px" /* Padding inside the card */,
    boxShadow: "0 4px 8px rgba(0, 0, 0, 0.1)" /* Subtle shadow for depth */,
    // transition: "transform 0.2s ease" /* Smooth animation on hover */,
    textAlign: "center" /* Center text */,
  },
  cardHover: {
    transform: "translateY(-5px)" /* Lift card on hover */,
  },
  cardContent: {
    display: "flex",
    flexDirection: "column",
    //alignItems: 'center', /* Center content */
  },
  icon: {
    width: "40px",
    height: "40px",
    // marginBottom: "10px" /* Space below the icons */,
  },
  cardTitle: {
    fontSize: "14px",
    fontWeight: 600 /* Semi-bold text */,
    color: "#333" /* Dark text color */,
    margin: "10px 0" /* Space above and below the title */,
    textAlign: "left",
  },
  cardType: {
    fontSize: "14px",
    fontWeight: 500 /* Medium weight */,
    color: "#888" /* Grey text color */,
    textAlign: "left",
  },
};

export default function BasicSparkLine() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", paddingRight: 30 }}>
        <div style={{ position: "relative", width: "100%", height: 200 }}>
          <div
            style={{
              zIndex: 100,
              position: "absolute",
              top: 0,
              left: 0,
              width: "100%",
            }}
          >
            <SparkLineChart
              colors={['blue', 'green']}
              showHighlight={true}
              data={[1, 4, 2, 5, 7, 2, 4, 6, 7, 8, 9, 10, 11, 12]}
              height={150}
            />
          </div>

          <div
            style={{
              position: "absolute",
              top: 0,
              left: 0,
              display: "flex",
              width: "100%",
              zIndex: 2,
            }}
          >
            {[
              { name: "Jan" },
              { name: "Feb" },
              { name: "Mar" },
              { name: "Apr" },
              { name: "May" },
              { name: "June" },
              { name: "July" },
              { name: "Aug" },
              { name: "Sept" },
              { name: "Oct" },
              { name: "Nov" },
              { name: "Dec" },
            ].map((e) => (
              <div
                style={{
                  height: 180,
                  flex: 1,
                  backgroundColor: "transparent",
                  borderRight: "1px solid #dbdae7",
                  display: "flex",
                  alignItems: "flex-end",
                  justifyContent: "center",
                  fontSize: 12,
                }}
              >
                {e.name}
              </div>
            ))}
          </div>
        </div>
        <div style={{ width: 100, fontSize: 12, paddingLeft: 20 }}>
          <p style={{}}>1,000</p>
          <p style={{ fontWeight: "bold" }}>SNIPS/YEAR</p>
        </div>
      </div>
      <p style={{ flex: 1, fontSize: 14, paddingBottom: 10 }}>Start Here</p>
      <div
        style={{ display: "grid", gridTemplateColumns: "1fr 1fr 1fr", gap: 20 }}
      >
        <div style={{display:"flex", gap:'10px'}}>
          <div style={{...styles.card, backgroundColor:"rgba(240, 255, 240, 0.9)"}}>
            <div style={{...styles.cardContent}}>
              <img  alt="Picture of the author" src="/dashboard/download.png" style={styles.icon} />
              <h3 style={styles.cardTitle}>Download InSnip</h3>
              <p style={styles.cardType}>File Center</p>
            </div>
          </div>

          <div style={{...styles.card, backgroundColor:'rgba(173, 216, 230, 0.2)'}}>
            <div style={styles.cardContent}>
            <img  alt="Picture of the author" src="/dashboard/safe.png" style={styles.icon} />
              <h3 style={styles.cardTitle}>Billing & Payment</h3>
              <p style={styles.cardType}>Subscription</p>
            </div>
          </div>

          <div style={{...styles.card, backgroundColor:"rgba(255, 228, 196, 0.2)" }}>
            <div style={styles.cardContent}>
            <img  alt="Picture of the author" src="/dashboard/audit.png" style={styles.icon} />
              <h3 style={styles.cardTitle}>Test of Control</h3>
              <p style={styles.cardType}>Tutorial</p>
            </div>
          </div>
        </div>
      </div>
      {/* <div>
        <div
          style={{
            height: 100,
            backgroundColor: "#fff",
            border: "1px solid #ccc",
            borderRadius: "4px",
            boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            padding: "20px",
            marginBottom: "20px",

          }}
        >
          <div style={{ display: "flex", marginBottom: 10 }}>
            <p style={{ flex: 1, fontSize: 14 }}>My Service</p>
            <p style={{ color: "blue", fontSize: 14 }}>Upgrade</p>
          </div>
          <div
            style={{
              border: "1px solid grey",
              height: 50,
              display: "flex",
              alignItems: "center",
            }}
          >
            <div
              style={{
                width: 30,
                height: 30,
                backgroundColor: "grey",
                borderRadius: 30,
                marginLeft: 10,
              }}
            ></div>
            <div>
              <p style={{ paddingLeft: 10 }}>Business Plan</p>
              <p style={{ paddingLeft: 10 }}>Active</p>
            </div>
          </div>
        </div>
      </div> */}
    </div>
  );
}
