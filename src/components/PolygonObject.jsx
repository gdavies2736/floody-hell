import React, { useEffect, useRef} from "react";
import H from '@here/maps-api-for-javascript';
import polygonmapAPI from "../utils/polygonmapAPI";

function PolygonObjectTest ({lat, long}) {
    const polygonArr = [];
    
    const FetchFloodAlerts = async () => {
    
        const BaseURL = `https://environment.data.gov.uk/flood-monitoring/id/floods?lat=${54.28219}&long=${-0.38364}&dist=10`;
        const Response = await fetch(BaseURL);
        const Result = await Response.json();
        // console.log(Result);
        Result.items.map((elem) => {
            let polygonURL = fetch(elem.floodArea.polygon);
            let data =  polygonURL.json();
            let coordinate = [];
            console.log(data);
            
            data.features[0].geometry.coordinates[0].map(elem1 => {
                coordinate.push(elem[1]);
                coordinate.push(elem[0]);
                coordinate.push(100);
            })
            polygonArr.push(coordinate); // After finishing for each elem object, a new array is added into the polygonArr array.
        })
    }

    polygonArr.map((elem) => {
        const lineString = new H.geo.LineString(
            elem, "values lat lng alt"
        )
    });

    useEffect(() => {
        
    
    FetchFloodAlerts()
    },[])
    
        return (
            <>
           {FloodAlerts}
            </>
        )
    }

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