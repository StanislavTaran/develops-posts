import styled from 'styled-components';

const myInput = styled.input`
  display: block;
  max-width: 100%;
  height: ${props => (props.large ? '220px' : '30px')};
`;

export default myInput;
