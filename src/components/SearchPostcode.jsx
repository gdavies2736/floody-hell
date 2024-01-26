import React, { useState } from "react";
import { fetchLocationData } from "../utils/postcodeAPI";
import { fetchFloodAreas } from "../utils/floodwarningAPI";
import FloodAlert from "./FloodAlert";
import Map from "./PolygonMap";

function SearchPostcode() {
  const [searchQuery, setSearchQuery] = useState("");
  const [locationData, setLocationData] = useState(null);
  const [error, setError] = useState(null);

  const submitHandler = async (event) => {
    event.preventDefault();

    try {
      const data = await fetchLocationData(searchQuery);
      const { latitude, longitude } = data;
      const floodAreas = await fetchFloodAreas(latitude, longitude);
      setLocationData({ latitude, longitude });
      console.log(longitude, latitude);
      console.log(floodAreas);
      setError(null);
    } catch (error) {
      setError(error);
      setLocationData(null);
    }
  };

  const changeOfInputHandler = (event) => {
    setSearchQuery(event.target.value);
  };

  return (
    <div>
      <form
        className="flex items-center py-3 pb-4 px-5"
        onSubmit={submitHandler}
      >
        <label htmlFor="voice-search" className="sr-only">
          Search
        </label>
        <div className="relative w-full">
          <input
            type="text"
            id="voice-search"
            className="bg-gray-50 border border-gray-300 text-gray-900 text-sm rounded-lg focus:ring-blue-500 focus:border-blue-500 block w-full pl-10 py-2.5 dark:bg-gray-700 dark:border-gray-600 dark:placeholder-gray-400 dark:text-white dark:focus:ring-blue-500 dark:focus:border-blue-500"
            placeholder="Post Code Search"
            value={searchQuery}
            onChange={changeOfInputHandler}
            required
          />
          <button
            type="button"
            className="absolute inset-y-0 right-0 flex items-center pr-3"
          >
          </button>
        </div>
        <button
          type="submit"
          className="inline-flex items-center py-2.5 px-3 ml-2 text-sm font-medium text-white bg-blue-700 rounded-lg border border-blue-700 hover:bg-blue-800 focus:ring-4 focus:outline-none focus:ring-blue-300 dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
        >
          <svg
            className="w-4 h- mr-2"
            aria-hidden="true"
            xmlns="http://www.w3.org/2000/svg"
            fill="none"
            viewBox="0 0 20 20"
          >
            <path
              stroke="currentColor"
              strokeLinecap="round"
              strokeLinejoin="round"
              strokeWidth="2"
              d="m19 19-4-4m0-7A7 7 0 1 1 1 8a7 7 0 0 1 14 0Z"
            />
          </svg>
        </button>
      </form>
      <Map></Map>
      <FloodAlert
        latitude={locationData?.latitude}
        longitude={locationData?.longitude}
      />
      {error && (
        <div style={{ color: "red" }}>
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
}



export default SearchPostcode;
