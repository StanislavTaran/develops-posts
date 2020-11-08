import { Form, Formik } from 'formik';
import styled from 'styled-components';
import addPostSchema from '../../helpers/schemas/addPostSchema';
import Input from '../shared/MyInput';
import TextArea from '../shared/MyTextArea';
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
`;

const StyledForm = styled(Form)`
  max-width: 500px;
  display: flex;
  flex-direction: column;
  margin: 0 auto;
`;

const StyledLabel = styled.label`
  text-align: start;
  font-weight: 700;
`;

export default function AddPostForm({ initialState, handleSubmit }: AddPostFormProps) {
  return (
    <Formik
      initialValues={initialState}
      validationSchema={addPostSchema}
      onSubmit={async (values, { setSubmitting, resetForm }) => {
        await handleSubmit(values);
        await setSubmitting(false);
        await(resetForm())
      }}
    >
      {({ errors, touched, values, isSubmitting, handleChange, handleBlur, handleReset }) => (
        <div>
          <StyledForm>
            <StyledLabel htmlFor="title">Title* :</StyledLabel>
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
            <ErrorTitle>{errors.title ?? errors.title}</ErrorTitle>
            <StyledLabel htmlFor="body">Post* :</StyledLabel>
            <TextArea
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
            <ErrorTitle>{errors.body ?? errors.body}</ErrorTitle>

            <Button type="button" disabled={isSubmitting} onClick={handleReset}>
              Cancel changes
            </Button>
            <Button type="submit" disabled={isSubmitting}>
              Submit
            </Button>
          </StyledForm>
        </div>
      )}
    </Formik>
  );
}
