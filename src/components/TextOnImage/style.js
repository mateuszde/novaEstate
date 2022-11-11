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
  height: 100%;
  margin: auto;
`;

export const TextWrapper = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  opacity: 0.95;
  border-radius: 20px;
  transition: 0.4s ease;

  &:hover {
    opacity: 1;
  }
`;

export const Title = styled.h2`
  font-size: 36px;
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyledParagraph = styled.p`
  margin-bottom: 30px;
  text-align: justify;
`;
