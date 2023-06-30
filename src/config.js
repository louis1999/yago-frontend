const isLocal = process.env.NODE_ENV === 'development';

const api_url = isLocal ? "http://localhost:3001/api/v1" : "https://protected-ravine-11477-83e6ea03141f.herokuapp.com/api/v1";

export default api_url;
