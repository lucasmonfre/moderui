import styled from 'styled-components/native';

export const Container = styled.TextInput`
  width: 80%;
  left: 10%;
  height: 54px; 
  padding: 0 16px;
 
  background-color: ${({theme}) => theme.colors.background};
  color: ${({theme}) => theme.colors.text};
 
`;