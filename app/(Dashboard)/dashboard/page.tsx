import Chart from "./chart"


export default function Dashboard() {

    return <div style={{paddingTop:20}}>
        <div>
            <p style={{fontSize:30, display:"flex", alignItems:"center"}}>Welcome, Martin <span style={{fontSize:13, paddingLeft:20, textDecorationLine:"underline"}}>Whats new</span></p>
            <p style={{paddingTop:10}}>Track and Manage your team usage</p>
        </div>
        {/* <div style={{backgroundColor:"white", height:20, boxShadow:"0px 0px 1px 1px rgba(0, 0, 0, 0.1)", marginTop:20, paddingTop:5, paddingBottom:2, paddingLeft:5, borderRadius:5}}>
            <p style={{fontSize:13}}>Insnip is Apha view our road Map</p>
        </div> */}
        <div style={{paddingTop:20}} />
        <div style={{display:"flex"}}>
            <div style={{flex:2}}>
                <Chart />
                <div style={{paddingTop:20, fontSize:17}}><p>Not what you are looking for?</p></div>
                <div style={{paddingTop:10}}>
                    {["Help Center", "Billing & Subscritpion", "Learning Center"].map(name => {
                        return <p style={{paddingTop:5}}>
                            {name}
                        </p>
                    })}
                </div>
            </div>
            <div style={{flex:1}}>
                <p style={{fontSize:14}}>Manage</p>
                <div style={{paddingTop:20}}></div>
                <div style={{backgroundColor:'white', paddingLeft:10, paddingTop:10,paddingBottom:20}}>
                   {["Manage User", "Manage Templates", "Analytics", "Dowanload Center"].map(name => {
                    return <div style={{display:"flex", alignItems:"center", paddingTop:10}}>
                    <div style={{backgroundColor:"grey", width:30, height:30, borderRadius:20}}></div>
                    <p style={{paddingLeft:10, fontSize:14}}>{name}</p>
                </div>
                   })}
                </div>
                <div style={{paddingTop:20}}></div>
                <p style={{fontSize:14}}>Buy</p>
                <div style={{paddingTop:10}}></div>
                <div style={{backgroundColor:'white', paddingLeft:10, paddingTop:10,paddingBottom:20}}>
                   {["Microsoft 365"].map(name => {
                    return <div style={{display:"flex", alignItems:"center", paddingTop:10}}>
                    <div style={{backgroundColor:"grey", width:30, height:30, borderRadius:20}}></div>
                    <p style={{paddingLeft:10, fontSize:14}}>{name}</p>
                </div>
                   })}
                </div>
            </div>
        </div>
       
    </div>
    
}