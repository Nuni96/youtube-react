import axios from 'axios';
const KEY = 'AIzaSyAYiIqEqwT72VO0gczr1UxB13Lh4lzri4s'; 

export default axios.create({
    baseURL: 'https://www.googleapis.com/youtube/v3/',
    params: {
        part: 'snippet',
        maxResults: 5,
        key: KEY
    }
})

