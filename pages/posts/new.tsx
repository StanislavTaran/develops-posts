import { useDispatch } from 'react-redux';
import MainLayout from '../../components/MainLayout/MainLayout';
import pageTitles from '../../constants/pageTitles';
import AddPostForm from '../../components/PostForm/PostForm';
import { SinglePostWithoutId } from '../../types/postsTypes';
import * as postsActions from '../../redux/posts/postsActions';
import MyPageTitle from '../../components/shared/MyPageTitle';

export default function NewPostPage() {
  const dispatch = useDispatch();

  const initialFormState: SinglePostWithoutId = {
    title: '',
    body: '',
  };

  const handleSubmitForm = data => {
    dispatch(postsActions.createPostRequest(data));
  };

  return (
    <MainLayout title={pageTitles.POSTS.NEW_POSTS}>
      <MyPageTitle title="Create post about anything." />
      <AddPostForm initialState={initialFormState} handleSubmit={handleSubmitForm} />
    </MainLayout>
  );
}
