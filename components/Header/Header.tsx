import NavBar from '../NavBar/NavBar';
import styled from 'styled-components';

const MyLogoString = styled.h1`
  margin: 0;
  padding: 10px 0;
  text-align: center;
  background-color: ${({ theme }) => theme.colors.firstMain};
  color: ${({ theme }) => theme.textColors.main};
`;

const Header = () => {
  return (
    <header>
      <MyLogoString>Unknown Developer Blog</MyLogoString>
      <NavBar />
    </header>
  );
};

export default Header;
