import axios from "axios";
import {} from "../components/SearchPostcode";

const fetchFloodAreas = async (latitude, longitude, distance = 500) => {
  const apiUrl = `https://environment.data.gov.uk/flood-monitoring/id/floods?lat=${latitude}&long=${longitude}&dist=${distance}`;

  try {
    const response = await axios.get(apiUrl);

    if (response.status !== 200) {
      throw new Error(
        `Failed to fetch flood areas. Status: ${response.status}`
      );
    }

    return response.data;
  } catch (error) {
    throw new Error(`Error fetching flood areas: ${error.message}`);
  }
};

export { fetchFloodAreas };
