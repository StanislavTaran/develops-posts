import MainLayout from '../../components/MainLayout/MainLayout';
import pageTitles from '../../constants/pageTitles';
import { SinglePostWithComments, SinglePostWithoutId } from '../../types/postsTypes';
import CommentsBlock from '../../components/CommentsBlock/CommentsBlock';
import SinglePost from '../../components/SinglePost/SinglePost';
import { wrapper } from '../../redux/store';
import { AxiosResponse } from 'axios';
import { fetchSinglePostWithComments } from '../../api/postsApi';

interface NewPostPageProps {
  post: SinglePostWithComments;
}

export default function NewPostPage({ post }: NewPostPageProps) {
  return (
    <MainLayout title={pageTitles.POSTS.NEW_POSTS}>
      <SinglePost post={post} />
      <CommentsBlock comments={post.comments} />
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store, params }) => {
  const response: AxiosResponse<SinglePostWithComments> = await fetchSinglePostWithComments(params.id);

  return {
    props: {
      post: response.data,
    },
  };
});
