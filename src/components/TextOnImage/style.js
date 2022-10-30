import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  padding: 40px;
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  min-height: 100%;
  margin: auto;
`;

export const TextWrapper = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledParagraph = styled.p``;
