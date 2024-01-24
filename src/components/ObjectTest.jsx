import React, { useEffect, useRef} from "react";
import H from '@here/maps-api-for-javascript';
import polygonmapAPI from "../utils/polygonmapAPI";

function PolygonObjectTest () {
    const polygonArr = []; // To hold all polygon arrays
    const lineStringArr = []; // To hold all linestring object from the polygon Arr
    // const BaseURL = `https://environment.data.gov.uk/flood-monitoring/id/floods?lat=54.28219&long=-0.38364&dist=30`;
    const baseURLFetch = async () => {
        const BaseURL = `https://environment.data.gov.uk/flood-monitoring/id/floods?lat=54.28219&long=-0.38364&dist=30`;
        const response = await fetch(BaseURL);
        const result = await response.json();
        result.items.map((elem) => {
            fetch(elem.floodArea.polygon)
            .then((polygon) => {return polygon.json()})
            .then((data) => {
                // console.log("Data", data.features[0].geometry.coordinates[0]);
                let coordinate = [];
                data.features[0].geometry.coordinates[0][0].map(elem1 => {
                    // console.log("Elem1: ", elem1);
                    coordinate.push(elem1[1]);
                    coordinate.push(elem1[0]);
                    coordinate.push(100);
                })
                polygonArr.push(coordinate); // After finishing for each elem object, a new array is added into the polygonArr array.
            })
        })
    }
    baseURLFetch();
    // fetch(BaseURL)
    // .then((response) => {return response.json()})
    // .then((result) => {
    //     result.items.map((elem) => {
    //         // console.log("Elem: ", elem);
    //         fetch(elem.floodArea.polygon)
    //         .then((polygon) => {return polygon.json()})
    //         .then((data) => {
    //             let coordinate = [];
    //             data.features[0].geometry.coordinates[0][0].map(elem1 => {
    //                 // console.log("Elem1: ", elem1);
    //                 coordinate.push(elem1[1]);
    //                 coordinate.push(elem1[0]);
    //                 coordinate.push(100);
    //             })
    //             polygonArr.push(coordinate); // After finishing for each elem object, a new array is added into the polygonArr array.
    //         })
    //     })
    // })

    console.log("PolygonArr: ", polygonArr);
    polygonArr.map((elem) => {
        const lineString = new H.geo.LineString(
            elem, "values lat lng alt"
        )
        lineStringArr.push(lineString);
    });
    
    return (<></>);
}

export default PolygonObjectTest;