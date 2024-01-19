import React, { useEffect, useRef} from "react";
import H from '@here/maps-api-for-javascript';
import polygonmapAPI from "../utils/polygonmapAPI";
import Map from "./PolygonMap";

function PolygonObject(map) {
    const lineString = new H.geo.LineString(
        [52,13,100,48,2,100,48,16,100,52,13,100],
        'values lat lng alt'
    );

    map.addObject(
        new H.map.Polygon(lineString, {
            style: {
                fillColor: "#FFFFCC",
                strokeColor: "#829",
                lineWidth: 5
            }
        })
    )
}

export default PolygonObject;