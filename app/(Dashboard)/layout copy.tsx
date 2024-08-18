"use client";

import Link from "next/link";
import React, { useState, useEffect } from "react";

export default function RootLayout({ children }) {
  useEffect(() => {
    document.addEventListener("click", (e) => {
      let doc = document.querySelector("#profile");
      if (  e.target.id == "avater" || e.target.id == "profile-pop" ) {
        
        return null
      }else {
        doc.style.display = "none";
      }
    });
  }, []);

  return (
    <html lang="en">
      <body style={{ display: "flex", height: "100vh" }}>
        <div
          style={{
            width: 250,
            paddingTop: 20,
            paddingLeft: 30,
            background: "#f6f6fa",
            borderRight: "1px solid rgba(211, 211, 211, 0.4)",
          }}
        >
          <div style={{ display: "flex", alignItems: "center" }}>
            <div
              style={{
                width: 30,
                height: 30,
                backgroundColor: "green",
                borderRadius: 5,
              }}
            ></div>
            <p style={{ paddingLeft: 10 }}>InSnip</p>
          </div>
          <div style={{ paddingTop: 50 }}>
            <button
              style={{
                backgroundColor: "white",
                color: "#333",
                border: "1px solid #e0e0e0",
                borderRadius: "4px",
                padding: "5px 30px",
                fontSize: "14px",
                cursor: "pointer",
              }}
            >
              Add User
            </button>
          </div>
          <div style={{ paddingTop: 30 }}>
            {[
              { name: "Dashboard", link: "/dashboard" },
              { name: "Plan & Billing", link: "/billing" },
              { name: "Users", link: "/users" },
              { name: "Analytics", link: "" },
              {
                name: "Templates",
                link: "",
                sub: [
                  { name: "Document Matching", link: "/matching" },
                  { name: "Document Extraction", link: "/extract" },
                  { name: "Scafolds", link: "/scafolds" },
                ],
              },
              { name: "Download Center", link: "/download_center" },
            ].map((prev) => {
              return (
                <div>
                  <div
                    style={{ paddingTop: 20, color: "#626396", fontSize: 14 }}
                  >
                    <Link style={{ textDecoration: "none" }} href={prev.link}>
                      {prev.name}
                    </Link>
                  </div>
                  {prev.sub &&
                    prev.sub.map((prev) => {
                      return (
                        <div
                          style={{
                            paddingLeft: 30,
                            paddingTop: 20,
                            color: "#626396",
                            fontSize: 14,
                          }}
                        >
                          <Link
                            style={{ textDecoration: "none" }}
                            href={prev.link}
                          >
                            {prev.name}
                          </Link>
                        </div>
                      );
                    })}
                </div>
              );
            })}
          </div>
        </div>
        <div
          style={{
            flex: 1,
            width: "calc(100vw - 250px)",
            backgroundColor: "#f6f6fa",
            height: "100vh",
            overflow: "scroll",
          }}
        >
          <div
            style={{ display: "flex", alignItems: "center", paddingTop: 20 }}
          >
            <div style={{ paddingLeft: 20 }}>
              <p style={{ fontSize: 14 }}> Home / Dashboard</p>
            </div>
            <div style={{ flex: 1, width: 400 }}></div>
            <div style={{ paddingRight: 20, display: "flex" }}>
              <div style={{position:"relative"}}>
              <div id="search_res" className="search_res">
                  {[
                    { name: "Users", link: "/svg/item1.svg" },
                    { name: "Templates", link: "/svg/item2.svg" },
                    { name: "Tutorials", link: "/svg/item3.svg" },
                    { name: "Documatation", link: "/svg/item4.svg" },
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
                            backgroundColor: "transparent",
                            width: 30,
                            height: 30,
                            borderRadius: 20,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            
                            src={name.link}
                            style={{ width: 20, height: 20 }}
                          />
                        </div>
                        <div style={{ paddingLeft: 10 }}>
                        <p   style={{ fontSize: 14 }}>
                          {name.name}
                        </p>
                        <p style={{fontSize:12, color:"grey" }}> Menu</p>
                        </div>
                      </div>
                     
                  
                    );
                  })}
                </div>
                <input
                onChange={(e) =>{
                  if(e.target.value.length > 0){
                    document.querySelector('#search_res').style.display = 'block'
                  }else {
                    document.querySelector('#search_res').style.display = 'none'
                  }
                  
                }}
                onBlur={(e) => {
                  document.querySelector('#search_res').style.display = 'none'
                }}
                placeholder="Search"
                style={{
                  width: 250,
                  backgroundColor: "#fff",
                  height: 16,
                  outline: "none",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  padding: "16px",
                  fontSize: "14px",
                  color: "#333",
                  boxSizing: "border-box",
                }}
              />

              </div>

              {/* <div                 style={{
                display:'flex',
                alignItems:'center',
                  width: 135,
                  backgroundColor: "#fff",
                  height: 16,
                  outline: "none",
                  border: "1px solid #e0e0e0",
                  borderRadius: "4px",
                  padding: "16px",
                  fontSize: "14px",
                  color: "#333",
                  boxSizing: "border-box",
                  marginLeft: 10,
                  marginRight: 10,
                }}>
              <img src='/svg/credit.svg' />
              <img style={{width:20, marginLeft:6 }} src='/svg/credit2.svg' />
              <p style={{fontSize:14, marginLeft:6 }}>Credits</p>
              </div> */}

              {/* <input
                placeholder="Wealth investment group"

              /> */}
              {/* <div style={{ paddingLeft: 30, paddingRight: 20 }}>
                <p>Nekhavhambe Martin</p>
                <p style={{ fontSize: 13, color: "blue" }}>Active</p>
              </div> */}
              <div
                id="avater"
                onClick={(e) => {
                  e.stopPropagation();
                  document.querySelector("#profile").style.display = "block";
                }}
                className="user-avater"
              >
                <div id="profile" className="subscription-card">
                  {[
                    { name: "Dashboard", link: "/svg/item1.svg" },
                    { name: "Profile Settings", link: "/svg/item2.svg" },
                    { name: "Download Inspin", link: "/svg/item3.svg" },
                    { name: "Logout", link: "/svg/item4.svg" },
                  ].map((name) => {
                    return (
                      <div
                        id="profile-pop" 
                        style={{
                          display: "flex",
                          alignItems: "center",
                          paddingTop: 10,
                        }}
                      >
                        <div
                          id="profile-pop" 
                          style={{
                            backgroundColor: "transparent",
                            width: 30,
                            height: 30,
                            borderRadius: 20,
                            display: "flex",
                            alignItems: "center",
                            justifyContent: "center",
                          }}
                        >
                          <img
                            id="profile-pop" 
                            src={name.link}
                            style={{ width: 20, height: 20 }}
                          />
                        </div>
                        <p  id="profile-pop" style={{ paddingLeft: 10, fontSize: 14 }}>
                          {name.name}
                        </p>
                      </div>
                    );
                  })}
                </div>

                <img
                  id="avater"
                  style={{
                    width: 30,
                    height: 30,
                    backgroundColor: "grey",
                    borderRadius: 30,
                  }}
                  src="/profile2.png"
                />
              </div>
            </div>
          </div>
          <div style={{ paddingLeft: 20, paddingRight: 20 }}>{children}</div>
        </div>
      </body>
    </html>
  );
}
