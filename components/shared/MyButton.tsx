import styled from 'styled-components';

const MyButton = styled.button.attrs(({ theme, ...props }) => ({
  disabled: props.disabled || false,
}))`
  border: ${({ theme }) => `2px solid ${theme.colors.secondMain}`};
  border-radius: 8px;
  width: 180px;
  height: 40px;
  background-color: #fff;
  color: #000;
  font-weight: 500;
  margin: 4px auto;

  &:hover {
    cursor: pointer;
    background-color: ${({ theme }) => theme.colors.firstMain};
    color: #fff;
  }

  &:disabled,
  &[disabled] {
    border: 1px solid #999999;
    background-color: #cccccc;
    color: #666666;
  }
`;

export default MyButton;
