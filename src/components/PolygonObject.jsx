import React, { useEffect, useRef} from "react";
import H from '@here/maps-api-for-javascript';
import polygonmapAPI from "../utils/polygonmapAPI";
import { fetchFloodAreas } from "../utils/floodwarningAPI";

function PolygonObject (map) {
    // const polygonArr = []; // To hold all polygon arrays
    const coordinate = [];

    
    // const lineStringArr = []; // To hold all linestring object from the polygon Arr
    // const BaseURL = `https://environment.data.gov.uk/flood-monitoring/id/floods?lat=54.28219&long=-0.38364&dist=30`;
    const baseURLFetch = async () => {
        const BaseURL = `https://environment.data.gov.uk/flood-monitoring/id/floods?lat=54.28219&long=-0.38364&dist=30`;
        const response = await fetch(BaseURL);
        const result = await response.json();

        // const floodAreas = await fetchFloodAreas(latitude, longitude);
        // console.log("Flood areas: ", floodAreas);
        // result.items.map((elem) => {
        //     fetch(elem.floodArea.polygon)
        //     .then((polygon) => {return polygon.json()})
        //     .then((data) => {
        //         // console.log("Data", data.features[0].geometry.coordinates[0]);
        //         let coordinate = [];
        //         data.features[0].geometry.coordinates[0][0].map(elem1 => {
        //             // console.log("Elem1: ", elem1);
        //             coordinate.push(elem1[1]);
        //             coordinate.push(elem1[0]);
        //             coordinate.push(100);
        //         })
        //         polygonArr.push(coordinate); // After finishing for each elem object, a new array is added into the polygonArr array.
        //     })
        // })

        fetch(result.items[0].floodArea.polygon)
        .then((polygon) => {return polygon.json()})
        .then((data) => {
            
            // console.log("testinnn: " , data.features[0].geometry.coordinates[0][0][0]);
            data.features[0].geometry.coordinates[0][0].map(elem1 => {
                // console.log("Elem1: ", elem1);
                coordinate.push(elem1[1]);
                coordinate.push(elem1[0]);
                coordinate.push(100);
            })
            // polygonArr.push(coordinate); // After finishing for each elem object, a new array is added into the polygonArr array.
        })
    }
    baseURLFetch();

    const lineString = new H.geo.LineString(
        coordinate, 'values lat lng alt'
    )

    map.addObject(
        new H.map.Polygon(lineString, {
            style: {
                fillColor: "rgba(22, 71, 115, 0.5)",
                strokeColor: "rgb(11, 43, 64)",
                lineWidth: 3
            }
        })
    )
    // console.log("PolygonArr: ", polygonArr);
    // polygonArr.map((elem) => {
    //     const lineString = new H.geo.LineString(
    //         elem, "values lat lng alt"
    //     )
    //     lineStringArr.push(lineString);
    // });
    ;
}

export default PolygonObject;