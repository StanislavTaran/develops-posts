import styled from 'styled-components';
import Link from 'next/link';
import routes from '../../constants/pageRoutes';
import MyLink from '../shared/MyLink';

const MyNavBar = styled.nav`
  display: block;
  height: 60px;
  background-color: ${({ theme }) => theme.colors.firstMain};
  color: ${({ theme }) => theme.textColors.main};
  font-weight: 700;
  display: flex;
  justify-content: space-around;
  align-items: center;
`;

const NavBar = () => {
  return (
    <MyNavBar>
      <Link href={routes.HOME.INDEX}>
        <MyLink>Latest Posts</MyLink>
      </Link>
      <Link href={routes.POSTS.NEW_POSTS}>
        <MyLink>Create Post</MyLink>
      </Link>
    </MyNavBar>
  );
};
export default NavBar;
