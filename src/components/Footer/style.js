import styled from 'styled-components';

export const Wrapper = styled.div`
  width: 100%;
  display: flex;
  justify-content: flex-end;
  padding: 30px;
  background-color: ${({ theme }) => theme.colors.primary};
`;

export const StyledParagraph = styled.div`
  color: ${({ theme }) => theme.colors.white};
`;
