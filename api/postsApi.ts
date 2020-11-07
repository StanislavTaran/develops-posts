import axios from 'axios'
import { BASE_URL, URL_PATHs } from "../constants/postsAPI";

axios.defaults.baseURL = BASE_URL

export const fetchAllPosts =()=> axios.get(URL_PATHs.POSTS.ALL_POSTS)

export const fetchSinglePostWithComments =(id)=> axios.get(URL_PATHs.POSTS.createPostURLWithComments(id))

export const createPost =(data)=> axios.post(URL_PATHs.POSTS.ALL_POSTS, data)