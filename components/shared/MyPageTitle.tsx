import styled from 'styled-components';
interface MyPageTitleProps {
  title: string;
}

const Title = styled.h1`
  font-size: 30px;
  text-align: center;
  color: ${({ theme }) => theme.colors.secondMain};
  text-decoration: underline;
`;

const MyPageTitle = ({ title }: MyPageTitleProps) => {
  return <Title>{title}</Title>;
};

export default MyPageTitle;
