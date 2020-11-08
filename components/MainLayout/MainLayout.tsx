import Head from 'next/head';
import styled from 'styled-components';
import Header from '../Header/Header';

const Main = styled.main`
  max-width: 1200px;
  padding: 0 15px;
  margin: 0 auto;
`;

export default function MainLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | DevelopsToday Test`}</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="HTML, CSS, JavaScript, NEXT" />
        <meta name="description" content="This is my first next.js app " />
      </Head>
      <Header />

      <Main>{children}</Main>
    </>
  );
}
