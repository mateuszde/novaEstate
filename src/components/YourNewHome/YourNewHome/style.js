import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;
`;

export const TitleWrapper = styled.div`
  width: 100%;

  & h2 {
    font-size: 36px;
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }

  & h3 {
    font-size: 27px;
    margin-bottom: 40px;
  }
`;

export const FloorsWrapper = styled.div`
  width: 100%;
`;
