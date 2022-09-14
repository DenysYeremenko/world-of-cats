import axios from 'axios';

axios.defaults.baseURL = 'https://api.thecatapi.com/v1/';
axios.defaults.headers.common['x-api-key'] =
  'live_6SswE7BwMNdqFYWFoUpChtN8htjHUjsSPsQVNp6QImJSNPfVG1cJX4UkzNO9LWVX';

export const getCatBreeds = async ({ limit, page, order }) => {
  try {
    let response = await axios.get(
      `breeds/?order=${order}&limit=${limit}&page=${page}`
    );
    return response.data;
  } catch (err) {
    console.log(err);
  }
};

export const getSelectedBreed = async breed => {
  try {
    const response = await axios.get(`images/search?breed_ids=${breed}`);
    return { url: response.data[0].url, breedInfo: response.data[0].breeds[0] };
  } catch (err) {
    console.log(err);
  }
};

export const getImagesBreed = async breed => {
  try {
    let response = await axios.get(`/images/search?limit=5&breed_ids=${breed}`);
    return response.data;
  } catch (err) {
    console.log(err);
  }
};
