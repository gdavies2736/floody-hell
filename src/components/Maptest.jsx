import React, { useEffect, useRef } from "react";
import H from '@here/maps-api-for-javascript'; // npm install @here/maps-api-for-javascript --registry=https://repo.platform.here.com/artifactory/api/npm/maps-api-for-javascript/
import polygonmapAPI from "../utils/polygonmapAPI";
import PolygonObject from "./PolygonObject";

function Maptest(props) {
    const mapRef = useRef(null);
    const map = useRef(null);
    const platform = useRef(null);

    const { apikey, testPolygonObject } = polygonmapAPI;
    
    platform.current = new H.service.Platform({
        'apikey': apikey,
    });

    const defaultLayers = platform.createDefaultLayers();
    
    const newMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
            zoom: 11,
            center: {
                lat: 53.349805,
                lng: -6.260310
            }
        });

    const behavior = new H.mapevents.Behavior(new H.mapevents.MapEvents(map));
    window.addEventListener("resize", () => map.getViewPort().resize());
    map.current = newMap;

    return (<>
    <div style={ { width: "100%", height: "500px" } } ref={mapRef} />
    </>);
}

export default Maptest;