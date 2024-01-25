import React, { useEffect, useState } from "react";
import "../styles/FloodAlert.css";

function FloodAlert({ latitude, longitude }) {
  const [FloodAlerts, setFloodAlerts] = useState([]);
  useEffect(() => {
    const FetchFloodAlerts = async () => {
      const BaseURL = `https://environment.data.gov.uk/flood-monitoring/id/floods?lat=${latitude}&long=${longitude}&dist=25`;
      console.log(BaseURL);
      const Response = await fetch(BaseURL);
      const Result = await Response.json();
      console.log(Result);
      setFloodAlerts(
        Result.items.map((FloodAlert) => {
          return (
            <div key={FloodAlert.id} className="infocontainer">
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
        <h1>Flood Alerts</h1>
      </div>
      <img alt="Flood" />
      {FloodAlerts}
    </div>
  );
}

export default FloodAlert;
