import {  Form, Formik } from 'formik';
import styled from 'styled-components'
import addPostSchema from '../../helpers/schemas/addPostSchema';
import Input from '../shared/MyInput';
import Button from '../shared/MyButton';
import { SinglePostWithoutId } from '../../types/postsTypes';


interface AddPostFormProps {
  initialState: SinglePostWithoutId;
  handleSubmit: ({ title, body }: SinglePostWithoutId) => void;
}

const ErrorTitle = styled.p`
  margin: 0 auto;
  padding: 0;
  text-align: center;
  color: tomato;
`

export default function AddPostForm({ initialState, handleSubmit } : AddPostFormProps) {
  return (
    <Formik
      initialValues={initialState}
      validationSchema={addPostSchema}
      onSubmit={(values ) => {
        handleSubmit(values);
      }}
    >
      {({ errors, touched, values, isSubmitting, handleChange, handleBlur, handleReset }) => (
        <div >

          <Form>
            <label htmlFor="name">
              Title* :
              <Input
                disabled={isSubmitting}
                type="text"
                name="title"
                value={values.title}
                error={errors.title}
                touched={touched.title}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <ErrorTitle>{errors.title ?? errors.title}</ErrorTitle>
            <label htmlFor="name">
              Body* :
              <Input
                large
                disabled={isSubmitting}
                type="text"
                name="body"
                value={values.body}
                error={errors.body}
                touched={touched.body}
                onChange={handleChange}
                onBlur={handleBlur}
              />
            </label>
            <ErrorTitle>{errors.body ?? errors.body}</ErrorTitle>

            <Button actionType="button" disabled={isSubmitting} onClick={handleReset}>
              Сancel changes
            </Button>
            <Button actionType="submit" type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </Form>
        </div>
      )}
    </Formik>
  );
}
