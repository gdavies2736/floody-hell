import React, { useEffect, useRef } from "react";
import H from '@here/maps-api-for-javascript'; // npm install @here/maps-api-for-javascript --registry=https://repo.platform.here.com/artifactory/api/npm/maps-api-for-javascript/

const Map = (props) => {
  const mapRef = useRef(null);
  const map = useRef(null);
  const platform = useRef(null);
  const { apikey } = props;
}

function PolygonMap () {
  const platform = new H.service.Platform({
    'apikey': 'geNXYHrS1agADyZRRPuK8Ye2x1YJcZIbWIbyhBtcdUs' // API key from platform.here.com
  });
  // Obtain the default map types from the platform object:
  const defaultLayers = platform.createDefaultLayers();

  // Instantiate (and display) a map object:
  const map = new H.Map(
    document.getElementById('mapContainer'),
    defaultLayers.vector.normal.map,
    {
      zoom: 10,
      center: { lat: 52.5, lng: 13.4 }
    });
  
  return(
        <>
          <div style="width: 640px; height: 480px" id="mapContainer">
            
          </div>
        </>)
}

export default PolygonMap;