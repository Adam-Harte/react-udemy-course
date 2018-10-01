import axios from 'axios';

const instance = axios.create({
   baseURL: 'https://burger-builder-875a6.firebaseio.com/'
});

export default instance;