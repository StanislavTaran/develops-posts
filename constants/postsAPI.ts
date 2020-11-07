export const BASE_URL = 'https://simple-blog-api.crew.red'

export const URL_PATHs = {
  POSTS :{
    ALL_POSTS: '/posts',
    createPostURL: (id)=> `/posts/${id}`,
    createPostURLWithComments : (id)=> `/posts/${id}?_embed=comments`
  }
}