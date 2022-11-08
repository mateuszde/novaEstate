import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;
`;

export const WrapperImage = styled.div`
  width: 700px;
  height: 500px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
`;

export const WrapperFloorData = styled.div`
  flex-grow: 1;
  padding: 0 0 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  /* justify-content: space-around; */

  & h3 {
    font-size: 27px;
    margin-bottom: 20px;
  }
`;
