"use client";
import Recat, { Suspense, useEffect } from "react";
import Loading from "./loading";
import Plan from "./Plan";
import "./payment.css";
import style from "./styles.module.css";
import DoneIcon from "@mui/icons-material/Done";
import { Switch } from "@/components/ui/switch";

const features = [
  { base: "Document Management" },
  { feature: ["unlimited", "unlimited", "unlimited"], name: "Document Import" },
  { feature: ["true", "true", "true"], name: "Document Manager" },
  { feature: ["true", "true", "true"], name: "Document Viewer" },
  { feature: ["true", "true", "true"], name: "Document OCR" },
  { feature: ["false", "true", "true"], name: "Document Compression" },
  { feature: ["false", "true", "true"], name: "Advanced Document Management" },
  { base: "Document Data Extraction" },
  { feature: ["true", "true", "true"], name: "Manual Snips" },
  { feature: ["true", "true", "true"], name: "Table Snip" },
  { feature: ["true", "true", "true"], name: "AI Snip" },
  { feature: ["true", "true", "true"], name: "Delete Snip" },
  { feature: ["true", "true", "true"], name: "Comment" },
  { base: "Document Automation" },
  { feature: ["false", "true", "true"], name: "Document Matching" },
  { feature: ["false", "true", "true"], name: "Document Extraction" },
  { feature: ["false", "true", "true"], name: "Find All Sums" },
  { feature: ["false", "false", "true"], name: "Version Compare" },
  { base: "Document Templates" },
  { feature: ["false", "true", "true"], name: "My Templates" },
  { feature: ["false", "true", "true"], name: "Standrad Templates" },
  { feature: ["false", "false", "true"], name: "Scafolds Libarary" },
  { feature: ["false", "false", "true"], name: "Custom Templates" },
  { base: "Collaboration" },
  { feature: ["false", "true", "true"], name: "Excel Online" },
  { feature: ["true", "false", "true"], name: "Guest Access" },
  { base: "Storage" },
  { feature: ["0.00 GB", "1 GB", "10 GB"], name: "Capacity" },
  { base: "Analytics" },
  { feature: ["false", "false", "true"], name: "Usage Metrics" },
  { base: "Support" },
  { feature: ["true", "true", "true"], name: "Email support" },
  { feature: ["true", "true", "true"], name: "Knowledge base" },
  { feature: ["false", "true", "true"], name: "Business hour support" },
  { feature: ["false", "false", "true"], name: "Data Retention" },
];
export default function Dashboard() {
  function featureDisplay(feature: String) {
    if (feature == "false") {
      return "-";
    } else if (feature == "true") {
      return <DoneIcon style={{ width: 15, color: "blue" }} />;
    } else {
      return feature;
    }
  }

  useEffect(() => {
    window.addEventListener("scroll", () => {
      // Get the scroll position
      const scrollTop = window.scrollY; // How far the user has scrolled from the top (in pixels)
      const windowHeight = window.innerHeight; // The height of the viewport
      const documentHeight = document.documentElement.scrollHeight; // The total height of the document

      // Calculate how far the user has scrolled as a percentage
      const scrollPercent = (scrollTop / (documentHeight - windowHeight)) * 100;
      let doc = document.querySelector("#con");
      let plus = document.querySelector("#plus");

      let item = document.querySelector(
        "body > div > div:nth-child(2) > div > div:nth-child(2) > div:nth-child(2) > a"
      );

      if (item?.getBoundingClientRect().top <= 0) {
        doc.style.display = "grid";
      } else {
        doc.style.display = "none";
      }


      if(!(item?.getBoundingClientRect().top <= 0) && plus?.getBoundingClientRect().top <= 0  ){
        doc.style.display = "none";
      }
      console.log(
        scrollTop,
        item?.getBoundingClientRect().top,
        "----------------"
      );

      // Display the scroll percentage or position
      // const scrollStatus = document.getElementById('scroll-status');
      // scrollStatus.textContent = `Scrolled: ${scrollPercent.toFixed(2)}%`;
    });

    return () => {};
  });
  return (
    <Suspense fallback={<Loading />}>
      <div style={{}}>
        <div style={{ paddingTop: 80 }} />
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
            gap: 20,
            paddingRight: 20,
            paddingLeft: 20,
            borderBottom: "1px solid  #cccccc",
            paddingBottom: 40,
          }}
        >
          <div style={{}}>
            <div>
              <p
                style={{
                  fontSize: 30,
                  display: "flex",
                  alignItems: "center",
                  color: "#24222e",
                }}
              >
                Empowering precision and speed. Revolutionizing productivity for
                Finance Team.
              </p>
              <p style={{ paddingTop: 10 }}>
                Try free for 14 days. No credit card required.
              </p>
              <div style={{ height: 60 }}></div>
              <div style={{ display: "flex", alignItems: "center" }}>
                <div
                  style={{
                    // paddingTop: 20,
                    display: "flex",
                    alignItems: "center",
                    height: 40,
                    overflow: "hidden",
                    // paddingRight: 30,
                    border: "1px solid #cccccc",
                    borderRadius: 5,
                  }}
                >
                  <div
                    style={{
                      backgroundColor: "white",
                      paddingLeft: 25,
                      height: 40,
                      borderRight: "1px solid  #cccccc",
                    }}
                  >
                    <input
                      value={1}
                      placeholder="Users"
                      style={{
                        outline: "none",
                        border: "none",
                        width: 40,
                        height: "100%",
                      }}
                    />
                  </div>
                  <p style={{ paddingRight: 15, paddingLeft: 15 }}>Users</p>
                </div>
                <div
                  style={{
                    display: "flex",
                    alignItems: "center",
                    height: 40,
                    marginLeft: 10,
                    paddingLeft: 15,
                    paddingRight: 15,
                    border: "1px solid #cccccc",
                    borderRadius: 5,
                  }}
                >
                  <p style={{ paddingRight: 10 }}>Billed Yearly </p>
                  <Switch />
                  {/* <Switch /> */}
                </div>
              </div>
            </div>
          </div>

          {[
            {
              name: "Basic",
              info: "For small teams",
              price: 198.99,
              btn: "Start free trial",
            },
            {
              name: "Team",
              info: "For growing team",
              price: 398.99,
              btn: "Start free trial",
            },
            {
              name: "Enterprise",
              info: "For established team",
              price: 598.99,
              btn: "Start free trial",
            },
          ].map((el) => (
            <div className="price-card-v-two">
              <p
                style={{ fontSize: "30px", color: "black", paddingBottom: 10 }}
              >
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
              <a
                style={{
                  backgroundColor: "black",
                  color: "white",
                  height: 45,
                  display: "flex",
                  justifyContent: "center",
                  alignItems: "center",
                  marginTop: 50,
                }}
                className="button-secundary-blue margin-top low w-button"
              >
                {el.btn}
              </a>
            </div>
          ))}
        </div>

        <div
          id="con"
          style={{
            display: "none",
            gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
            gap: 20,
            paddingTop: 50,
            position: "sticky",
            backgroundColor: "white",
            top: 0,
            zIndex: 9000,
            marginTop: -100,
            borderBottom: "1px solid #ddd",
            paddingBottom: 20,
            paddingRight: 20,
            paddingLeft: 20,
          }}
        >
          <div>
            <p style={{paddingBottom:10, fontWeight:"bold", fontSize: 17}}>Compare Plans</p>
            <div
              style={{
                width: 300,
                height: 40,
                // padding: 5,
                border: "1px solid #cccccc",
                display:"flex",
                alignItems:"center",
                paddingLeft:3,
                backgroundColor:"rgba(238,238,238,1)",
                borderRadius:5
              }}
            >
              <div style={{ backgroundColor: "black", color: "white", padding:5 , flex:1, textAlign:"center"}}>
                Monthly{" "}
              </div>
              <div style={{ backgroundColor: "rgba(238,238,238,1)", color: "black", padding:5 , flex:1, textAlign:"center"}}> Yearly</div>
            </div>
          </div>
          <div>
            <p style={{ paddingBottom: 5, display:"flex", padding:8 }}>
              <span style={{flex:1, fontWeight:"bold", fontSize:"17px"}}> Essential </span> <span style={{fontWeight:"bold", fontSize:"17px"}}>ZAR 198.00 </span> <span> per user/mo</span>
            </p>
            <div className={style.button}>Start a free trial</div>
          </div>
          <div>
            <p style={{ paddingBottom: 5,  display:"flex" ,  padding:8  }}>
              <span style={{flex:1, fontWeight:"bold", fontSize:"17px"}}> Advance </span> <span style={{fontWeight:"bold", fontSize:"17px"}}>ZAR 198.00 </span> <span> per user/mo</span>
            </p>
            <div className={style.button}>Start a free trial</div>
          </div>
          <div>
            <p style={{ paddingBottom: 5 ,  display:"flex" ,  padding:8 }}>
              <span style={{flex:1, fontWeight:"bold", fontSize:"17px"}}> Expert </span> <span style={{fontWeight:"bold", fontSize:"17px"}}>ZAR 198.00 </span>  <span> per user/mo</span>
            </p>
            <div className={style.button}>Start a free trial</div>
          </div>
        </div>

        <div
          style={{
            paddingRight: 20,
            paddingLeft: 20,
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
            gap: 20,
            paddingTop: 50,
            paddingBottom: 50,
          }}
        >
          <div style={{ gridColumn: "span 1" }}>
            <div>
              <p
                style={{
                  fontSize: 14,
                  // display: "flex",
                  // alignItems: "center",
                  color: "#24222e",
                }}
              >
                <p style={{ fontSize: 17 }}>
                  Packages tailored towards your needs
                </p>
                <p>
                  Connect your inbox, tickets, and help center in one central,
                  AI-enhanced workspace.
                </p>
              </p>
            </div>
          </div>
        </div>

        {features.map((el) => {
          return (
            <div style={{ paddingRight: 20, paddingLeft: 20 }}>
              <div
                style={{
                  paddingRight: 20,
                  paddingLeft: 20,
                  display: "grid",
                  gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
                  // gap: 20,
                  fontSize: 14,
                  height: 35,
                  alignItems: "center",
                  // backgroundColor: '#fff',
                  borderBottom: "1px solid #ddd",
                  justifyItems: "flex-start",
                  transition: "background-color 0.3s ease",
                  cursor: "pointer",
                  paddingRight: 20,
                  paddingLeft: 20,
                  // paddingLeft:15,
                  // paddingRight:15
                }}
              >
                {el.base && (
                  <p style={{ fontSize: 14, gridColumn: "span 4" }}>
                    {el.base}
                  </p>
                )}
                {el.feature && <p className={style.tablefeature}>{el.name}</p>}
                {el.feature && (
                  <div
                    style={{ backgroundColor: "rgba(211, 211, 211, 0)" }}
                    className={style.tablecell}
                  >
                    {" "}
                    <p>{featureDisplay(el.feature[0])}</p>{" "}
                  </div>
                )}
                {el.feature && (
                  <div
                    style={{ backgroundColor: "rgba(211, 211, 211, 0.1)" }}
                    className={style.tablecell}
                  >
                    {" "}
                    <p>{featureDisplay(el.feature[0])}</p>{" "}
                  </div>
                )}
                {el.feature && (
                  <div
                    style={{ backgroundColor: "rgba(211, 211, 211, 0)" }}
                    className={style.tablecell}
                  >
                    {" "}
                    <p>{featureDisplay(el.feature[0])}</p>{" "}
                  </div>
                )}
              </div>
            </div>
          );
        })}

        <div
          style={{
            paddingTop: 30,
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          <div
            id="plus"
            style={{
              marginBottom: 30,
              width: 50,
              height: 50,
              backgroundColor: "#000",
              borderRadius: 100,
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              zIndex:999,
              // border: "10px solid #f6f6fa",
              color:"white",
              fontSize:'17px'
            }}
          >
            +
          </div>
        </div>

        <div>
          <Plan />
        </div>

        {/* <div
          style={{
            display: "grid",
            gridTemplateColumns: "1.3fr 1fr 1fr 1fr",
            gap: 20,
            paddingTop: 50,
          }}
        >
        <p style={{fontSize:14, gridColumn: "span 4" }}>Packages taisslored towards your needs</p>
                <p style={{fontSize:14}}>Packages tailored towards ysssour needs</p>
                <p style={{fontSize:14}}>Packages tailored tossswards your needs</p>
                <p style={{fontSize:14}}>Packages tailored towards your needs</p>
                <p style={{fontSize:14}}>Packages tailoredddd towards your needs</p>
          
        </div> */}

      </div>
  
    </Suspense>
  );
}
