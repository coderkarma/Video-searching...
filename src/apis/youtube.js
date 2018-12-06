import axios from 'axios';
const KEY = "AIzaSyC9ut_eYQJsqDvO4XyCsrlq1E_l-TxOp6c";

//preconfigured instance of axios 
export default axios.create({
    baseURL: `https://www.googleapis.com/youtube/v3`,
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY,
    }
});