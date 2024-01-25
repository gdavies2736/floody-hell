<<<<<<< HEAD
import React, { useState } from 'react';
import { fetchLocationData } from '../utils/postcodeAPI';
import { fetchFloodAreas } from '../utils/floodwarningAPI';
import PolygonObject from './PolygonObject';
=======
import React, { useState } from "react";
import { fetchLocationData } from "../utils/postcodeAPI";
import { fetchFloodAreas } from "../utils/floodwarningAPI";
import FloodAlert from "./FloodAlert";
>>>>>>> 8b39c8041f90e433a9663f02743dd4b2e64c0fc7

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
          <div className="absolute inset-y-0 left-0 flex items-center pl-3 pointer-events-none">
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 21 21"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M11.15 5.6h.01m3.337 1.913h.01m-6.979 0h.01M5.541 11h.01M15 15h2.706a1.957 1.957 0 0 0 1.883-1.325A9 9 0 1 0 2.043 11.89 9.1 9.1 0 0 0 7.2 19.1a8.62 8.62 0 0 0 3.769.9A2.013 2.013 0 0 0 13 18v-.857A2.034 2.034 0 0 1 15 15Z"
              />
            </svg>
          </div>
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
            <svg
              className="w-4 h-4 text-gray-500 dark:text-gray-400 hover:text-gray-900 dark:hover:text-white"
              aria-hidden="true"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 16 20"
            >
              <path
                stroke="currentColor"
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 7v3a5.006 5.006 0 0 1-5 5H6a5.006 5.006 0 0 1-5-5V7m7 9v3m-3 0h6M7 1h2a3 3 0 0 1 3 3v5a3 3 0 0 1-3 3H7a3 3 0 0 1-3-3V4a3 3 0 0 1 3-3Z"
              />
            </svg>
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
<<<<<<< HEAD
      {/* <PolygonObject latitude={locationData.latitude} longitude={locationData.longitude} /> */}
      {locationData && (
        <div>
          <h2>Location Data:</h2>
          {locationData.labels.map((label, index) => (
            <div key={index}>{label}</div>
          ))}
        </div>
      )}

=======
      <FloodAlert
        latitude={locationData?.latitude}
        longitude={locationData?.longitude}
      />
>>>>>>> 8b39c8041f90e433a9663f02743dd4b2e64c0fc7
      {error && (
        <div style={{ color: "red" }}>
          <p>Error: {error}</p>
        </div>
      )}
    </div>
  );
}

export default SearchPostcode;
