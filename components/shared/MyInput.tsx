import styled from 'styled-components';

const myInput = styled.input`
  display: block;
  width: 100%;
  height: ${props => (props.large ? '220px' : '30px')};
  font-size: 18px;
  font-family: Times New Roman, sans-serif;
`;

export default myInput;
