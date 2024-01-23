import axios from "axios";

const baseURL = "https://api.postcodes.io/postcodes/";

export const fetchLocationData = async (postcode) => {
  try {
    const response = await axios.get(`${baseURL}${postcode}`);
    return response.data.result;
  } catch (error) {
    throw (
      error.response?.data?.error || "An error occurred while fetching data."
    );
  }
};
