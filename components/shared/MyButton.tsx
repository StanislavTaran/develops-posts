import styled from 'styled-components';

const MyButton = styled.button`
  border: ${({ theme }) => `2px solid ${theme.colors.secondMain}`};
  max-width: 200px;
  height: 30px;
  background-color:  #fff;
  color: #000;
  `;

export default MyButton;
