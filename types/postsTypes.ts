// POSTS
export interface SinglePostWithoutId {
  title: string;
  body: string;
}

export interface SinglePost extends SinglePostWithoutId {
  id: number;
}

export interface SinglePostWithComments {
  id: number;
  title: string;
  body: string;
  comments: SingleComment[];
}

// COMMENTS
export interface SingleComment {
  id: number;
  postId: number;
  body: string;
}
