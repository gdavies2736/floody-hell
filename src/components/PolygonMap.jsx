import React, { useEffect, useRef } from "react";
import H from '@here/maps-api-for-javascript'; // npm install @here/maps-api-for-javascript --registry=https://repo.platform.here.com/artifactory/api/npm/maps-api-for-javascript/
import polygonmapAPI from "../utils/polygonmapAPI";
import PolygonObject from "./PolygonObject";

const Map = () => {
  // console.log("APIkey of here map: ", polygonmapAPI);
  // console.log(props);
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

  useEffect(
    () => {
      // Check if the map object has already been created
      if (!map.current) {
        // Create a platform object with the API key
        platform.current = new H.service.Platform({ apikey });
        
        // Create a new Raster Tile service instance
        const rasterTileService = platform.current.getRasterTileService({
          queryParams: {
            style: "explore.day",
            size: 2048,
          },
        });

        // Creates a new instance of the H.service.rasterTile.Provider class
        // The class provides raster tiles for a given tile layer ID and pixel format
        const rasterTileProvider = new H.service.rasterTile.Provider(
          rasterTileService
        );
        // Create a new Tile layer with the Raster Tile provider
        const rasterTileLayer = new H.map.layer.TileLayer(rasterTileProvider);
        
        // Create a new map instance with the Tile layer, center and zoom level
        const newMap = new H.Map(mapRef.current, rasterTileLayer, {
          pixelRatio: window.devicePixelRatio,
          center: {
            lat: latAverage/count,
            lng: lngAverage/count,
          },
          zoom: 14,
        });
  
        // Add panning and zooming behavior to the map
        const behavior = new H.mapevents.Behavior(
          new H.mapevents.MapEvents(newMap)
        );
        // Create the polygon object using PolygonObjectAPI
        PolygonObject(newMap);

        // Set the map object to the reference
        map.current = newMap;
      }
    },
    // Dependencies array
    [apikey]
  );

// Return a div element to hold the map
return (
      <>
      <div className="ml-20" style={ { width: "90%", height: "500px" } } ref={mapRef} />
      </>);
}

export default Map;

// https://www.here.com/docs/bundle/maps-api-for-javascript-developer-guide/page/topics/react-practices.html#add-a-react-functional-component-that-displays-a-map
// https://developer.here.com/documentation/examples/maps-js/geoshapes/polygon-on-the-map