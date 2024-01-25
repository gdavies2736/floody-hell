import React, { useEffect, useState } from "react";
import "../styles/FloodAlert.css";
// import floodimage from '../images/floodimage1.jpeg';
import floodwarning2 from "../images/floodwarning2.png";
import floodAlert from "../images/floodAlert.png";
import floodwarningtriangle from "../images/floodwarningtriangle.png";
import severefloodwarning from "../images/severefloodwarning.png";
import nolongerinforce from "../images/nolongerinforce.png";

function FloodAlert({ latitude, longitude }) {
  const [FloodAlerts, setFloodAlerts] = useState([]);
  useEffect(() => {
    const FetchFloodAlerts = async () => {
      console.log("Hello world");
      const BaseURL = `https://environment.data.gov.uk/flood-monitoring/id/floods?lat=${latitude}&long=${longitude}&dist=25`;
      const Response = await fetch(BaseURL);
      const Result = await Response.json();
      function RenderImage(state) {
        if (state.severity.toLowerCase() === "flood alert") {
          return floodAlert;
        }
        if (state.severity.toLowerCase() === "flood warning") {
          return floodwarningtriangle;
        }
        if (state.severity.toLowerCase() === "severe flood warning") {
          return severefloodwarning;
        }
        if (state.severity.toLowerCase() === "warning no longer in force") {
          return nolongerinforce;
        }
      }

      console.log(Result);
      setFloodAlerts(
        Result.items.map((FloodAlert) => {
          return (
            <div className="infocontainer" key={FloodAlert.id}>
              <img
                className="floodwarning2"
                src={RenderImage(FloodAlert)}
                alt="Flood warning levels"
              />
              <span className="alertheader">
                Severity: <span id="updates">{FloodAlert.severity}</span>
              </span>
              <span className="alertheader">
                Severity Level:{" "}
                <span id="updates">{FloodAlert.severityLevel}</span>
              </span>
              <span className="alertheader">
                Flood Update: <span id="updates">{FloodAlert.message}</span>
              </span>
            </div>
          );
        })
      );
    };
    FetchFloodAlerts();
  }, [latitude, longitude]);

  return (
    <div className="floodalertcontainer">
      <div>
        <h1 className="mainFloodAlert">Flood Alerts</h1>
      </div>
      <div className="warningLevelContainer">
        <h2 className="warningLevels">Flood Warning Level Guide</h2>
        <img
          className="floodwarning2"
          src={floodwarning2}
          alt="Flood warning levels"
        />
      </div>
      <h2 className="liveUpdates">Live Updates </h2>

      {FloodAlerts}
    </div>
  );
}

export default FloodAlert;
