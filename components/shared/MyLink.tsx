import styled from 'styled-components';

const MyLink = styled.a`
  text-decoration: none;
  color: ${({ theme }) => theme.textColors.main};

  &:hover {
    color: ${({ theme }) => theme.colors.secondMain};
    cursor: pointer;
  }
`;

export default MyLink;
