import axios from 'axios';

const url = 'http://localhost:8082/posts';

export const fetchPosts = () => axios.get(url);