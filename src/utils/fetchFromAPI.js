import axios from 'axios';

export const BASE_URL = 'https://youtube-v31.p.rapidapi.com';
// export const BASE_URL = 'https://youtube-v31.p.rapidapi.com/search?q=new&part=snippet%2Cid&maxResults=50&order=date';

const options = {
  // params: {
  //   maxResults: 50,
  // },
  params: {
  
    // part: 'snippet,id',
    maxResults: '50',
  },
  headers: {
    'X-RapidAPI-Key': process.env.REACT_APP_RAPID_API_KEY,
    'X-RapidAPI-Host': 'youtube-v31.p.rapidapi.com',
  },
};

export const fetchFromAPI = async (url) => {
  console.log(`Get started URL is ${url}`);
  console.log(`Full URl is ${BASE_URL}/${url}`);
  // const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  const { data } = await axios.get(`${BASE_URL}/${url}`, options);
  return data;
};

