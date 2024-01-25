import React, { useEffect, useState } from "react";
import "../styles/FloodAlert.css"
import floodimage from '../images/floodimage1.jpeg';
import floodwarning2 from '../images/floodwarning2.png';

function FloodAlert ({lat, long}) {
const [FloodAlerts, setFloodAlerts] = useState([])
useEffect(()=>{
const FetchFloodAlerts =async()=>{
console.log("Hello world");
const BaseURL = `https://environment.data.gov.uk/flood-monitoring/id/floods?lat=${51.874767}&long=${-1.740083}&dist=10`
const Response = await fetch(BaseURL)
const Result = await Response.json()
console.log(Result);
setFloodAlerts(Result.items.map(FloodAlert=>{
    return (<div class="infocontainer">
        <span class="alertheader">Severity: <span id="updates">{FloodAlert.severity}</span></span>
    <span class="alertheader">Severity Level: <span id="updates">{FloodAlert.severityLevel}</span></span>
    <span class="alertheader">Flood Update: <span id="updates">{FloodAlert.message}</span></span>
    </div>)

}))
}
FetchFloodAlerts()
},[])

    return (
        <div class="floodalertcontainer">
        <div>
            <h1 class="mainFloodAlert">Flood Alerts</h1>
        </div>
        <img class="floodimage" src={floodimage} alt="Flood Image"/> 
        <div class="warningLevelContainer">
        <h2 class="warningLevels">Flood Warning Levels</h2>
        <img class="floodwarning2" src={floodwarning2} alt="Flood warning levels"/> 
        </div>
        <h2 class="liveUpdates">Live Updates </h2>

       {FloodAlerts}
        </div>
    )
}

export default FloodAlert;
