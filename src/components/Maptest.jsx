import React, { useEffect, useRef } from "react";
import H from '@here/maps-api-for-javascript'; // npm install @here/maps-api-for-javascript --registry=https://repo.platform.here.com/artifactory/api/npm/maps-api-for-javascript/
import polygonmapAPI from "../utils/polygonmapAPI";
import PolygonObject from "./PolygonObject";

function Maptest(props) {
    const mapRef = useRef(null);
    const map = useRef(null);
    const platform = useRef(null);
    const { apikey, testPolygonObject } = polygonmapAPI;

    let latAverage = 0;
    let lngAverage = 0;
    let count = 0;

    testPolygonObject.features[0].geometry.coordinates[0].map(elem => {
        latAverage += elem[1];
        lngAverage += elem[0];
        count ++;
    })
    
    useEffect(() => {
        if (!map.current){
            platform.current = new H.service.Platform({ apikey });
            const defaultLayers = platform.current.createDefaultLayers(); // It is platform.current.createDefaultLayers(), not platform.createDefaultLayers()

            const newMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
                zoom: 11,
                center: {
                    lat: latAverage/count,
                    lng: lngAverage/count,
                },
            });

            const behavior = new H.mapevents.Behavior(
                new H.mapevents.MapEvents(newMap)
            );
            
            // Create Polygon object and add it on the current map
            PolygonObject(newMap);
            
            map.current = newMap;
        }
    }, [apikey])
    

    // window.addEventListener("resize", () => map.getViewPort().resize());
    

    return (<>
    <div style={ { width: "100%", height: "500px" } } ref={mapRef}></div>
    </>);
}

export default Maptest;
// https://simplefrontend.com/get-element-by-id-in-react/?utm_content=cmp-true