import axios from 'axios';
export const fetchFactAboutCats = () => axios.get('https://meowfacts.herokuapp.com/');
