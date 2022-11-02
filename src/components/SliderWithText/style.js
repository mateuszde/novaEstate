import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 1200px;
  min-height: 500px;
  margin: 0 auto;
  padding: 120px 0;
`;

export const SliderWrapper = styled.div`
  width: 60%;
`;

export const TextWrapper = styled.div`
  width: 35%;

  & > p {
    padding-bottom: 20px;
  }
`;
