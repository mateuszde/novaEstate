import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  margin: 60px auto;
  max-width: 1200px;
  min-height: 600px;
`;

export const TextWrapper = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px 40px 40px 0;
`;

export const ImageWrapper = styled.div`
  width: 50%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  z-index: 600;
  transition: 0.4s ease;
  border-radius: 20px;

  &:hover {
    transform: scale(1.3);
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyleParagraph = styled.p`
  margin-bottom: 30px;
`;
