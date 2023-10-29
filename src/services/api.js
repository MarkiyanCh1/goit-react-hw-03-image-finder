import axios from 'axios';

async function fetchImages(query, page) {
  const BASE_URL = 'https://pixabay.com/api/';
  const resp = await axios(BASE_URL, {
    params: {
      key: '39500807-1603edb463da9917dec90ef2b',
      q: query,
      image_type: 'photo',
      orientation: 'horizontal',
      safesearch: true,
      page: page,
      per_page: 12,
    },
  });
  return resp.data;
}

export default fetchImages
