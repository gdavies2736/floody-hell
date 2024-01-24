import React, { useEffect, useRef } from "react";
import H from '@here/maps-api-for-javascript'; // npm install @here/maps-api-for-javascript --registry=https://repo.platform.here.com/artifactory/api/npm/maps-api-for-javascript/
import polygonmapAPI from "../utils/polygonmapAPI";
import PolygonObject from "./PolygonObject";
import "../styles/PolygonMap.css";

function Maptest() {
    const mapArray = []; // To hold all the possible maps that can be created
    const { apikey, testPolygonObject } = polygonmapAPI;
    
    useEffect(() => {
        const mapRef = useRef(null);
        const map = useRef(null);
        const platform = useRef(null);
    
        let latAverage = 0;
        let lngAverage = 0;
        let count = 0;

        testPolygonObject.features[0].geometry.coordinates[0].map(elem => {
            latAverage += elem[1];
            lngAverage += elem[0];
            count ++;
        })
        
        platform.current = new H.service.Platform({ apikey });
            const defaultLayers = platform.current.createDefaultLayers(); // It is platform.current.createDefaultLayers(), not platform.createDefaultLayers()

            const newMap = new H.Map(mapRef.current, defaultLayers.vector.normal.map, {
                zoom: 13,
                center: {
                    lat: latAverage/count,
                    lng: lngAverage/count,
                },
            });

            const behavior = new H.mapevents.Behavior(
                new H.mapevents.MapEvents(newMap)
            );
            // Create the default UI:
            const ui = new H.ui.UI.createDefault(newMap, defaultLayers);
            
            // Create Polygon object and add it on the current map
            PolygonObject(newMap);
            
            // Create a map layer for the overview control
            const overviewLayers = platform.current.createDefaultLayers();
            const overviewMap = new H.ui.Overview(overviewLayers.raster.satellite.map, {
                alignment: H.ui.LayoutAlignment.LEFT_BOTTOM,
                zoomDelta: 6,
                scaleX: 5,
                scaleY: 6
            });
            ui.addControl("overview", overviewMap);

            map.current = newMap;
            mapArray.push(map);
        // if (!map.current){
        // }
    }, [apikey])
    // window.addEventListener("resize", () => map.getViewPort().resize()); //change to the one in return
    
    return (<>
    <div className="body"> 
        <div className="bodyMap" ref={mapRef}></div>
    </div>
    </>);
}

export default Maptest;
// https://simplefrontend.com/get-element-by-id-in-react/?utm_content=cmp-true