"use client";
import Recat, { Suspense, useEffect , useState} from "react";


export default function Dashboard() {


    const [message, setMessage] = useState('Waiting for message...');

    useEffect(() => {
 
        // Function to handle incoming messages
        console.log("waiting for msg")
        const handleMessage = (event:any) => {
            console.log(event, "in the event")
            // Process the received message
            if (event.data.type === 'FROM_PARENT') {
                setMessage(event.data.content);
            }
        };

        // Add event listener
        window.addEventListener('message', handleMessage);

        // Clean up the event listener on component unmount
        return () => {
            window.removeEventListener('message', handleMessage);
        };
    }, []);

  return (
      <div style={{}}>
         <div>
            mmmmmmmmmmm
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
  

  );
}
