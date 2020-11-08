import MainLayout from '../components/MainLayout/MainLayout';
import pageTitles from '../constants/pageTitles';
import PostsList from '../components/PostsList/PostsList';
import { SinglePost } from '../types/postsTypes';
import { wrapper } from '../redux/store';
import * as postsActions from '../redux/posts/postsActions';
import { AxiosResponse } from 'axios';
import { fetchAllPosts } from '../api/postsApi';
import MyPageTitle from '../components/shared/MyPageTitle';

interface LatestPostsPageProps {
  posts: SinglePost[];
}

export default function LatestPotsPage({ posts }: LatestPostsPageProps) {
  return (
    <MainLayout title={pageTitles.HOME.INDEX}>
      <MyPageTitle title="Latest posts for you." />
      <PostsList posts={posts} />
    </MainLayout>
  );
}

export const getServerSideProps = wrapper.getServerSideProps(async ({ store }) => {
  const response: AxiosResponse<SinglePost[]> = await fetchAllPosts();
  await store.dispatch(postsActions.fetchPostsSuccess(response.data));
  return {
    props: {
      posts: response.data,
    },
  };
});
