import React, { useEffect, useState } from "react";

function FloodAlert ({lat, long}) {
const [FloodAlerts, setFloodAlerts] = useState([])
useEffect(()=>{
const FetchFloodAlerts =async()=>{
console.log("Hello world");
const BaseURL = `https://environment.data.gov.uk/flood-monitoring/id/floods?lat=${54.28219}&long=${-0.38364}&dist=20`
const Response = await fetch(BaseURL)
const Result = await Response.json()
console.log(Result);
setFloodAlerts(Result.items.map(FloodAlert=>{
    return (<div>
        <h1>{FloodAlert.severity}</h1>
    <h2>{FloodAlert.severityLevel}</h2>
    <h3>{FloodAlert.message}</h3>
    </div>)

}))
}
FetchFloodAlerts()
},[])

    return (
        <>
       {FloodAlerts}
        </>
    )
}

export default FloodAlert;
