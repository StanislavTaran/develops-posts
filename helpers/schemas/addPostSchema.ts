import { object, string } from 'yup';


const addPostSchema = object().shape({
  title: string()
    .min(3, 'Title must be at least 3 characters!')
    .max(30, 'Title must be no more than 20 characters!')
    .required('Title is required'),
  body: string()
    .min(3, 'Your post too short!')
    .max(3000, 'Post must be no more than 3000 characters!')
    .required('Field is required'),
});

export default addPostSchema;