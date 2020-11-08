import Link from 'next/link';
import Head from 'next/head';
import styled from 'styled-components';
import MyLink from "../shared/MyLink";
import routes from '../../constants/pageRoutes'
const NavBar = styled.nav`
  display: block;
  height: 60px;
  background-color: ${({theme})=>theme.colors.firstMain};
  color:  ${({theme})=>theme.textColors.main};
  font-weight : 700;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const Main = styled.main`
  max-width : 1200px;
  padding: 0 15px;
  margin: 0 auto;
`

export default function MainLayout({ title, children }) {
  return (
    <>
      <Head>
        <title>{`${title} | DevelopsToday Test`}</title>
        <meta charSet="UTF-8" />
        <meta name="keywords" content="HTML, CSS, JavaScript, NEXT" />
        <meta name="description" content="This is my first next.js app " />
      </Head>
      <NavBar>
        <Link href={routes.HOME.INDEX}>
          <MyLink>Latest Posts</MyLink>
        </Link>
        <Link href={routes.POSTS.NEW_POSTS}>
          <MyLink>Create Post</MyLink>
        </Link>
      </NavBar>
      <Main>{children}</Main>
        </>
  );
}
