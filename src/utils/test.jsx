import React, {useEffect, useRef} from "react";
import H from "@here/maps-api-for-javascript";
import polygonmapAPI from "./polygonmapAPI";

function totestMap(props){
    const mapRef = useRef(null);
    const map = useRef(null);
    const platform = useRef(null);
    const { apikey, testPolygonObject } = polygonmapAPI;

    useEffect(() => {
        if (!map.current){
            platform.current = new H.service.Platform({ apikey });
            const defaultLayers = platform.createDefaultLayers();

            const newMap = new H.Map(mapRef, defaultLayers.vector.normal.map, {
                zoom: 11,
                center: {
                    lat: 53.349805,
                    lng: -6.260310
                },
            });

            const behavior = new H.mapevents.Behavior(
                new H.mapevents.MapEvents(newMap)
            );
            map.current = newMap;
        }
    }, [apikey])

 return (<>
    <div id={props.id} style={ { width: "100%", height: "500px" } } ref={mapRef}></div>
 </>)
}

export default totestMap;