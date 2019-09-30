import axios from 'axios';

const instance = axios.create({
    baseURL: 'https://burger-project-26456.firebaseio.com/'
});

export default instance;