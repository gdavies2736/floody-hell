import React, { useEffect, useState } from "react";
import "../styles/FloodAlert.css"
// import floodimage from '../images/floodimage1.jpeg';
import floodwarning2 from '../images/floodwarning2.png';
import floodAlert from '../images/floodAlert.png';
import floodwarningtriangle from '../images/floodwarningtriangle.png';
import severefloodwarning from '../images/severefloodwarning.png';
import nolongerinforce from '../images/nolongerinforce.png';


function FloodAlert ({lat, long}) {
const [FloodAlerts, setFloodAlerts] = useState([])
useEffect(()=>{
const FetchFloodAlerts =async()=>{
console.log("Hello world");
const BaseURL = `https://environment.data.gov.uk/flood-monitoring/id/floods?lat=${51.874767}&long=${-1.740083}&dist=10`
const Response = await fetch(BaseURL)
const Result = await Response.json()
function RenderImage (state) {
    if (state.severity.toLowerCase() === "flood alert") {
        return floodAlert  
    }
    if (state.severity.toLowerCase() === "flood warning") {
        return floodwarningtriangle
    }
    if (state.severity.toLowerCase() === "severe flood warning") {
        return severefloodwarning
    }
    if (state.severity.toLowerCase() === "warning no longer in force") {
        return nolongerinforce
    }
}

console.log(Result);
setFloodAlerts(Result.items.map(FloodAlert=>{
    return (<div class="infocontainer">
         <img className=" mx-auto floodwarning2" src={RenderImage(FloodAlert)} alt="Flood warning levels"/>  
        <span class="alertheader">Severity: <span id="updates">{FloodAlert.severity}</span></span>
    <span class="alertheader">Severity Level: <span id="updates">{FloodAlert.severityLevel}</span></span>
    <span class="alertheader">Flood Update: <span id="updates">{FloodAlert.message}</span></span>
    </div>)

}))
}
FetchFloodAlerts()
},[])

    return (
        <div className=" floodalertcontainer">
        <div>
            <h1 class="mainFloodAlert">Flood Alerts</h1>
        </div>
        <div class="warningLevelContainer">
        <h2 class="warningLevels">Flood Warning Level Guide</h2>
        <img className="mx-auto floodwarning2" src={floodwarning2} alt="Flood warning levels"/> 
        </div>
        <h2 className="liveUpdates">Live Updates </h2>

       {FloodAlerts}
        </div>
    )
}

export default FloodAlert;
