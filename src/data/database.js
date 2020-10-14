import axios from 'axios';

const database = axios.create({
    baseURL: "https://emart-4ab65.firebaseio.com/"
})

export default database;