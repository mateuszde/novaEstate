import styled from 'styled-components';

export const BackgroundWrapper = styled.div`
  width: 100%;
  min-height: 75vh;
  position: relative;
`;
export const Wrapper = styled.header`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 100;
  /* background-color: rgba(56, 62, 66, 0.3); */
  /* background-color: rgba(0, 0, 0, 0.1); */
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 100%;
  color: ${({ theme }) => theme.colors.white};

  & h1 {
    font-size: 65px;
    font-weight: 400;
  }

  & h2 {
    font-size: 36px;
    font-weight: 400;
  }
`;

export const ExtraContentWrapper = styled.div`
  text-align: center;
  margin-top: 30px;
  width: 40%;
`;
