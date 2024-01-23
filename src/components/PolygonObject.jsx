import React, { useEffect, useRef} from "react";
import H from '@here/maps-api-for-javascript';
import polygonmapAPI from "../utils/polygonmapAPI";

function PolygonObject(map) {
    // console.log(polygonmapAPI.testPolygonObject.features[0].geometry.coordinates[0])
    const coordinateArr = [];
    polygonmapAPI.testPolygonObject.features[0].geometry.coordinates[0].map(elem => {
        coordinateArr.push(elem[1]);
        coordinateArr.push(elem[0]);
        coordinateArr.push(100);
    })
    const lineString = new H.geo.LineString(
        coordinateArr,
        'values lat lng alt'
    );

    map.addObject(
        new H.map.Polygon(lineString, {
            style: {
                fillColor: "rgba(22, 71, 115, 0.5)",
                strokeColor: "rgb(11, 43, 64)",
                lineWidth: 3
            }
        })
    )
}

export default PolygonObject;