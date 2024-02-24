import {Button} from "@mui/material";

export default function RootLayout({
  children,
}) {
  return (
    <html lang="en">
      <body style={{display:"flex", height:"100vh"}}>
        <div style={{width:250, paddingTop:10, paddingLeft:10}}>
           <div style={{display:"flex", alignItems:"center"}}>
             <div style={{width:30, height:30, backgroundColor:"green", borderRadius:5}}></div>
             <p style={{paddingLeft:10}}>InSnip</p>
           </div>
           <div style={{paddingTop:30}}>
              <Button variant="contained">Add User</Button>
             </div>
             <div style={{paddingTop:30}}>{
              [
                { name: "Dashboard" },
                { name: "Billing and Subscription" },
                { name: "Users" },
                { name: "Analytics" },
                { name: "Templates" , sub: ["Document Matching" ,"Document Extraction", "Scafolds"]},
                { name: "Download Center" }
              ].map(prev => {
                return (
                <div>
                <div style={{paddingTop:10}}>{prev.name}</div>
                { prev.sub && prev.sub
                  .map(prev => { return <div style={{paddingLeft:30, paddingTop:10}}>{prev}</div>})}
                </div>)
              })
              }</div>
        </div>
        <div style={{flex:1, width:"calc(100vw - 250px)" ,backgroundColor:"#F0F0F0", height:"100vh", overflow:"scroll"}}>
        <div style={{paddingLeft:20, paddingTop:20}}>
          <p style={{fontSize:14}}> Home / Dashboard</p>
        </div>
        <div style={{display:"flex"}}>
          <div style={{flex:1,width:400}}></div>
          <div style={{ paddingRight:20, display:"flex" }}>
            <input placeholder="Search" style={{width:250,backgroundColor:"#f2f2f2", height:16, padding:5,outline:"none", border:"1px solid grey"}} />
            <div style={{paddingLeft:30, paddingRight:20, textAlign:"Right"}}>
              <p>Nekhavhambe Martin</p>
              <p style={{fontSize:13, color:"blue"}}>Active</p>
              </div>
            <div style={{width:35, height:35, backgroundColor: "grey", borderRadius:30}}></div>
          </div>

        </div>
        <div style={{paddingLeft:20, paddingRight:20}}>{children}</div>
        </div>
        </body>
    </html>
  );
}
