// src/js/pixabay-api.js
import axios from "axios";

const BASE_URL = "https://pixabay.com/api/";
const API_KEY = "52578833-1380a7e48419fcc1cc100434d"; 

/**
 * @param {string} query 
 * @returns {Promise<object>} 
 */
export function getImagesByQuery(query) {
  const params = {
    key: API_KEY,
    q: query,
    image_type: "photo",
    orientation: "horizontal",
    safesearch: true,
    per_page: 40, 
  };

  return axios.get(BASE_URL, { params }).then(response => {
    return response.data;
  });
}



