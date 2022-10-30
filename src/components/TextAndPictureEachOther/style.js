import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 60px auto;
  max-width: 1200px;
  max-height: 600px;
`;

export const TextWrapper = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 40px 40px 0;
`;

export const ImageWrapper = styled.div`
  width: 50%;
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyleParagraph = styled.p`
  margin-bottom: 30px;
`;
