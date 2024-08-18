"use client";
import * as React from "react";
import Stack from "@mui/material/Stack";
import Box from "@mui/material/Box";
import { SparkLineChart } from "@mui/x-charts/SparkLineChart";


const styles = {
  startHereSection: {
    display: 'flex',
    gap: '20px', /* Space between the cards */
    marginBottom: '20px', /* Space below the section */
  },
  card: {
    backgroundColor: '#f9f9f9', /* Light background color */
    border: '1px solid #e0e0e0', /* Light grey border */
    borderRadius: '8px', /* Rounded corners */
    width: '200px', /* Fixed width for cards */
    padding: '20px', /* Padding inside the card */
    boxShadow: '0 4px 8px rgba(0, 0, 0, 0.1)', /* Subtle shadow for depth */
    transition: 'transform 0.2s ease', /* Smooth animation on hover */
    textAlign: 'center', /* Center text */
  },
  cardHover: {
    transform: 'translateY(-5px)', /* Lift card on hover */
  },
  cardContent: {
    display: 'flex',
    flexDirection: 'column',
    //alignItems: 'center', /* Center content */
  },
  icon: {
    width: '24px',
    height: '24px',
    marginBottom: '10px', /* Space below the icons */
  },
  cardTitle: {
    fontSize: '14px',
    fontWeight: 600, /* Semi-bold text */
    color: '#333', /* Dark text color */
    margin: '10px 0', /* Space above and below the title */
    textAlign:"left"
  },
  cardType: {
    fontSize: '14px',
    fontWeight: 500, /* Medium weight */
    color: '#888', /* Grey text color */
    textAlign:"left"
  },
};



export default function BasicSparkLine() {
  return (
    <div>
      <div style={{ display: "flex", alignItems: "center", paddingRight: 30 }}>
        <div style={{position:"relative", width:"100%", height:200}}>

        <div style={{zIndex:100, position:"absolute", top:0, left:0,width:'100%'}}>
        <SparkLineChart
          showHighlight={true}
          data={[1, 4, 2, 5, 7, 2, 4, 6,7,8,9,10,11,12]}
          height={150}
        
          
        />
        </div>

        <div style={{position:"absolute", top:0, left:0, display:'flex', width:'100%', zIndex:2}}>
          {[1,2,3,4,5,6,7,8,9,10,11,12].map ( e => <div style={{height:180, flex:1, backgroundColor:"transparent", borderRight:"1px solid #dbdae7", display: "flex", alignItems:"flex-end", justifyContent:'center'}}>
            Jan
          </div>)}
        </div>
        </div>
        <div style={{ width: 100, fontSize: 12, paddingLeft:20 }}>
          <p style={{}}>1,000</p>
          <p style={{ fontWeight: "bold" }}>SNIPS/YEAR</p>
        </div>
      </div>
      <p style={{ flex: 1, fontSize: 14, paddingBottom:10 }}>Start Here</p>
      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr 1fr', gap: 20 }}>

  <div style={styles.startHereSection}>
      <div style={styles.card}>
        <div style={styles.cardContent}>
          <img src="linkedin-icon.png" alt="LinkedIn Logo" style={styles.icon} />
          <img src="clay-icon.png" alt="Clay Logo" style={styles.icon} />
          <h3 style={styles.cardTitle}>Download InSnip v1.0</h3>
          <p style={styles.cardType}>File</p>
        </div>
      </div>
   

      <div style={styles.card}>
        <div style={styles.cardContent}>
          <img src="linkedin-icon.png" alt="LinkedIn Logo" style={styles.icon} />
          <img src="clay-icon.png" alt="Clay Logo" style={styles.icon} />
          <h3 style={styles.cardTitle}>Usage & Billing</h3>
          <p style={styles.cardType}>Tutorial</p>
        </div>
      </div>


      <div style={styles.card}>
        <div style={styles.cardContent}>
          <img src="linkedin-icon.png" alt="LinkedIn Logo" style={styles.icon} />
          <img src="clay-icon.png" alt="Clay Logo" style={styles.icon} />
          <h3 style={styles.cardTitle}>Enrich a Company’s LinkedIn Data</h3>
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
