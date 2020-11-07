import MainLayout from '../../components/MainLayout/MainLayout';
import pageTitles from '../../constants/pageTitles';
import AddPostForm from '../../components/PostForm/PostForm';
import { SinglePostWithoutId } from '../../types/postsTypes';

export default function NewPostPage() {
  const initialFormState: SinglePostWithoutId = {
    title: '',
    body: '',
  };

  const handleSubmitForm = data => {
    console.log('DATA FROM form', data);
  };

  return (
    <MainLayout title={pageTitles.POSTS.NEW_POSTS}>
      NEW POSTS
      <AddPostForm initialState={initialFormState} handleSubmit={handleSubmitForm} />
    </MainLayout>
  );
}
