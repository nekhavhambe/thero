'use client'
import Chart from "./chart"

import Image from 'next/image';
import twitterIcon from "../svg_icons/item1.svg";


export default function Dashboard() {

    return <div style={{paddingTop:20}}>
        <div>
            <p style={{fontSize:30, display:"flex", alignItems:"center", color:"#24222e"}}>Welcome, Martin <span style={{fontSize:13, paddingLeft:20, textDecorationLine:"underline", color:'#686a9a'}}>Whats new</span></p>
            <p style={{paddingTop:10}}>Track and Manage your team usage</p>
        </div>
        {/* <div style={{backgroundColor:"white", height:20, boxShadow:"0px 0px 1px 1px rgba(0, 0, 0, 0.1)", marginTop:20, paddingTop:5, paddingBottom:2, paddingLeft:5, borderRadius:5}}>
            <p style={{fontSize:13}}>Insnip is Apha view our road Map</p>
        </div> */}
        <div style={{paddingTop:20}} />
        <div style={{display:"flex"}}>
            <div style={{flex:2}}>
                <Chart />
                <div style={{paddingTop:20, fontSize:16}}><p>Templates</p></div>
                <div style={{paddingTop:10,}}>
                    {["New Doc Template", "Invoice Extraction", "Tax Extraction"].map(name => {
                        return <p style={{paddingTop:5, fontSize:14, color:'blue'}}>
                            {name}
                        </p>
                    })}
                </div>
            </div>
            <div style={{flex:1,paddingLeft:25         }}>
                <p style={{fontSize:14}}>Quick Links</p>
                <div style={{paddingTop:2}}></div>
                <div style={{ paddingLeft:10, paddingTop:10,paddingBottom:20,   
                 
                //backgroundColor: "#fff",
            //border: "1px solid #ccc",
            borderRadius: "4px",
            //boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            //padding: "20px",
            //marginBottom: "0px",
        }
            }>
                   {[{name: "Step by Step tutorial",link:"/svg/item1.svg"}, {name:"Learn Liabrary",link:"/svg/item2.svg"}, {name:"Addon Modules",link:"/svg/item3.svg"}, {name:"Refer a Friend",link:"/svg/item4.svg"}].map(name => {
                    return <div    className="link" style={{display:"flex", alignItems:"center", paddingTop:10}}>
                    <div style={{backgroundColor:"transparent", width:30, height:30, borderRadius:20, display:"flex", alignItems:"center", justifyContent:"center"}}>
                        <img src={name.link} style={{ width:20, height:20, color:"#979dab" }} />
                    </div>
                    <p style={{paddingLeft:10, fontSize:14}}>{name.name}</p>
                </div>
                   })}
                </div>
                <div style={{paddingTop:8}}></div>
                <p style={{fontSize:14}}>Don't Have Microsoft 365? <span style={{color:"blue"}}>Get it Now</span></p>
                <div style={{paddingTop:10}}></div>
                <div style={{marginTop:20,          borderTop: "1px solid #ccc",
           // borderRadius: "4px",
           // boxShadow: "0 2px 4px rgba(0, 0, 0, 0.1)",
            //padding: "20px",
            marginBottom: "0px"}}>
            
                  <div style={{ alignItems:"center", paddingTop:10}}>
               
                    <p style={{paddingTop:10, fontSize:14}}>Need Help?</p>
                    <p style={{ fontSize:14, paddingTop:5}}>Codunt not find what you were looking for? Send us an email on <span style={{color:"blue"}}>help@insnip.co.za</span></p>
                </div>
               
                </div>
            </div>
        </div>
       
    </div>
    
}