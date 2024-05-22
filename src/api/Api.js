// Handle api request with axios
// 1. Get request from search service
// 2. Get request from url service

import http from "../utils/http";

export const fetchData = async (endpoint, params = {}) => {
  try {
    const response = await http.Http.get(endpoint, { params });
    return response.data;
  } catch (error) {
    console.log("Error fetching data:", error);
    throw error;
  }
};
