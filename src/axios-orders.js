import axios from 'axios';

const instance = axios.create({
    baseURL:'https://react-app-burger-builder-b5738.firebaseio.com/'
})

export default instance;