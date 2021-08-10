import axios from "axios";

axios.defaults.baseURL = "https://ilem-node-rest-api.herokuapp.com/";
axios.defaults.headers.common['Authorization'] = 'Bearer ' + localStorage.getItem('token');