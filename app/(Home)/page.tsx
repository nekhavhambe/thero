import Image from "next/image";

export default function Home() {
  return (
    <>
      <div>
        <main


          style={{
            // height: "50px",
            paddingTop: 50,
            paddingBottom: 40,
            paddingLeft: 40,
            display: "flex",
            // height: 600,
            color: "white",
            background: "linear-gradient(135deg, #0e0e0e, #050505)",
            backgroundAttachment:'fixed'
          }}
        >
          <div style={{ width: 600 }}>
            <div style={{ fontSize: 40, paddingRight: 170 }}>
              Automation For Audit and Finance With Excel
            </div>
            <div style={{ fontSize: 14, paddingRight: 170 }}>
              Accelerated productivity for Audit and Finance
            </div>
            <div style={{ paddingTop: 50 }}></div>
            <div style={{ display: "flex", alignItems: "center" }}>
              <div
                style={{
                  alignItems: "center",
                  backgroundColor: "white",
                  color: "black",
                  width: 250,
                  height: 50,
                  display: "flex",
                  justifyContent: "center",
                }}
              >
                Get Started
              </div>
              <div style={{ paddingLeft: 50 }}>Pricing</div>
            </div>
          </div>

          <div style={{ flex: 1 }}></div>
          <div style={{ paddingRight: 30 }}>
            <div
              style={{
                width: 700,
                height: 400,
                backgroundColor: "grey",
                flex: 1,
                borderRadius: 10,
              }}
            ></div>
          </div>
        </main>
        <div
          style={{
            background: "black",
            color: "white",
            paddingLeft: 80,
            paddingBottom: 10,
          }}
        >
          {" "}
          Your Finance Team Powered By Insnip
        </div>
        <div
          style={{
            backgroundColor: "black",
            color: "white",
            display: "flex",
            justifyContent: "flex-start",
            paddingTop: 30,
            paddingBottom: 30,
            // borderTop: "1px solid white",
            paddingLeft: 80,
          }}
        >
          <p style={{ flex: 1, textAlign: "left", fontSize: 20 }}>Fast</p>
          <p style={{ flex: 1, textAlign: "left", fontSize: 20 }}>Accurate</p>
          <p style={{ flex: 1, textAlign: "left", fontSize: 20 }}>
            Automated{" "}
          </p>
          <p style={{ flex: 1, textAlign: "center", fontSize: 20 }}>
            Strategic
          </p>
          <p style={{ flex: 3, textAlign: "center", fontSize: 20 }}>
          
          </p>
        </div>
      </div>
      <div style={{ textAlign: "center" }}>
        <p style={{ paddingTop: 50, fontSize: 30 }}>
          Inpower your Audit and Finance teams
        </p>

        <div
          style={{
            display: "flex",
            justifyContent: "center",
            padding: 20,
            gap: 20,
          }}
        >
          <div
            style={{
              flex: 1,
              height: 250,
              backgroundColor: "black",
              color: "white",
            }}
          >
            {" "}
            <p>tesr1</p>{" "}
          </div>
          <div           style={{
              flex: 1}}>
          <div
            style={{
              flex: 1,
              height: 250,
              backgroundColor: "black",
              color: "white",
            }}
          >
            {" "}
            <p>tesr1</p>{" "}
          </div>
          <p>Explore</p>
          </div>

        </div>
      </div>
      <p style={{ paddingTop: 50, fontSize: 30, textAlign: "center" }}>
        A global platform built on the world’s largest mobility network
      </p>
      <div style={{ display: "flex", paddingTop: 30 }}>
        <div style={{ flex: 1, paddingLeft: 90 }}>
          <p>Instant payouts</p>
          <p style={{fontSize:17, fontWeight:"bold"}}>Pay recipients fast, even instantly</p>
          <p>
            Improve your users’ experience by getting them paid as quickly as
            the next business day. Or, use Instant Payouts to send funds to
            their bank account within minutes.
          </p>
          <p>Instant payouts</p>
        </div>
        <div
          style={{
            flex: 1,
            height: 500,
            backgroundColor: "black",
            marginRight: 40,
          }}
        ></div>
      </div>
<div style={{display:"flex", backgroundColor:'white', alignItems:"center", justifyContent:"center"}}>
<p style={{ paddingTop: 50, fontSize: 15, textAlign: "center", flex:1 }}>
       Document Matching
      </p>
      <p style={{ paddingTop: 50, fontSize: 15, textAlign: "center", flex:1 }}>
       Document Extraction
      </p>
      <p style={{ paddingTop: 50, fontSize: 15, textAlign: "center", flex:1 }}>
       Manual SNips
      </p>
  
</div>

      <div style={{ display: "flex", paddingTop: 30 }}>
        <div style={{ flex: 1, paddingLeft: 90 }}>
          <p>Instant payouts</p>
          <p>Pay recipients fast, even instantly</p>
          <p>
            Improve your users’ experience by getting them paid as quickly as
            the next business day. Or, use Instant Payouts to send funds to
            their bank account within minutes.
          </p>
          <p>Instant payouts</p>
        </div>
        <div
          style={{
            flex: 1,
            height: 500,
            backgroundColor: "black",
            marginRight: 40,
          }}
        ></div>
      </div>
    </>
  );
}
