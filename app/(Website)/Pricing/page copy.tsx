"use client";
import Recat, { useState, Suspense } from "react";
import PlanBillingTab from "./Plan";
import PlanCard from "./PlanCard";
import DataTable from "./Invoices";
import Loading from "./loading";
import ChangePay from "./ChangePayment";
import AddMethod from "./ChargeCard";
import Switch from "@mui/material/Switch";
import "./payment.css";

export default function Dashboard() {
  const [tab, setTab] = useState("Subscription");
  return (
    <Suspense fallback={<Loading />}>
      <div style={{ overflow: "scroll", paddingRight:20, paddingLeft:20}}>
        <div
          style={{ height: 200, backgroundColor: "#FFDAB9", marginBottom: 50 }}
        ></div>

        {/* <div style={{backgroundColor:"white", height:20, boxShadow:"0px 0px 1px 1px rgba(0, 0, 0, 0.1)", marginTop:20, paddingTop:5, paddingBottom:2, paddingLeft:5, borderRadius:5}}>
            <p style={{fontSize:13}}>Insnip is Apha view our road Map</p>
        </div> */}
        <div style={{ paddingTop: 20 }} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
            gap: 20,
          }}
        >
          <div>

          <div style={{gridColumn: 'span 4'}}>
          <p
            style={{
              fontSize: 30,
              display: "flex",
              alignItems: "center",
              color: "#24222e",
            }}
          >
           Empowering precision and speed. Revolutionizing productivity for Finance Team.
          </p>
          <p style={{ paddingTop: 10 }}>Manage Subscription and Payment</p>
          <div style={{ paddingTop: 20 }}>
            <Switch />
          </div>
        </div>

          </div>

          {[
            { name: "Basic", info: "For small teams", price: 198.99 },
            { name: "Team", info: "For growing team", price: 398.99 },
            { name: "Enterprise", info: "For established team", price: 598.99 },
          ].map((el) => (
            <div className="price-card-v-two">
              <p style={{ fontSize: "30px", color: "blue", paddingBottom: 10 }}>
                {el.name}
              </p>

              <div className="text-block-55">{el.info}</div>
              <div className="pricing-price-v-two">
                <p style={{ fontSize: 20, paddingTop: 10 }}>
                  ZAR {el.price}{" "}
                  <span style={{ fontSize: "14px" }}>/user/month</span>
                </p>
                <p className="paragraph small pricing"></p>
              </div>
              <div
                style={{
                  paddingTop: 20,
                  paddingBottom: 30,
                  borderBottom: "1px solid #eaeaea",
                }}
                className="text-block-3 pricing"
              >
                Essential extraction and documentation features. Perfect for
                small businesses.
                <br />
              </div>
              <div style={{ paddingTop: 30 }} className="text-block-4">
                Up to 10 users
              </div>
              <div
                style={{ paddingTop: 20 }}
                className="list-container-pricing _1st"
              >
                <div className="text-block-4 one">
                  <strong>Includes</strong>
                </div>
                {[
                  "Platform OCR",
                  "Manual Snips",
                  "Table Snip",
                  "Document Management & Viewer",
                  "Reporting",
                ].map((el) => (
                  <div
                    style={{
                      display: "flex",
                      paddingTop: 20,
                      alignItems: "center",
                    }}
                    className="div-block-2 one"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/60816e54c89f06e2dcc2e65c/643c34c17d2bccefb14a9ca4_CheckCircle.svg"
                      alt="Platform OCR checkmark"
                    />
                    <div className="text-block-6">{el}</div>
                  </div>
                ))}
              </div>
              <div className="list-container-pricing _1st">
                <div
                  style={{ paddingTop: 20 }}
                  className="sub-title-card-pricing one"
                >
                  <strong>Services</strong>
                </div>
                {["Email Support", "Knowledge base"].map((el) => (
                  <div
                    style={{
                      display: "flex",
                      paddingTop: 20,
                      alignItems: "center",
                    }}
                    className="div-block-2 one"
                  >
                    <img
                      loading="lazy"
                      src="https://cdn.prod.website-files.com/60816e54c89f06e2dcc2e65c/643c34c17d2bccefb14a9ca4_CheckCircle.svg"
                      alt="Platform OCR checkmark"
                    />
                    <div className="text-block-6">{el}</div>
                  </div>
                ))}
              </div>
              <a
                style={{
                  backgroundColor: "blue",
                  color: "white",
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 50,
                }}
                className="button-secundary-blue margin-top low w-button"
              >
                Buy Now
              </a>
            </div>
          ))}
        </div>
      </div>
      {/* <ChangePay /> */}
      {/* <AddMethod /> */}
    </Suspense>
  );
}
