// - запит

import axios from "axios";



export function getImagesByQuery(query) {
  const params = {
    q: query,
    key: '52578833-1380a7e48419fcc1cc100434d',
    image_type: 'photo',
    orientation: 'horizontal',
    safesearch: true,
    per_page: 40,
  };

  return axios.get('https://pixabay.com/api/', { params })
    .then(response => response.data.hits);
}
