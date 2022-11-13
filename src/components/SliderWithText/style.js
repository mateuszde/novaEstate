import styled from 'styled-components';
import { device } from '../../device';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  min-height: 600px;
  margin: 0 auto;
  padding: 120px 0;

  @media ${device.laptopM} {
    width: 90%;
  }

  @media ${device.laptop} {
    width: 90%;
    flex-direction: column-reverse;
    padding: 60px 0;
  }
`;

export const SliderWrapper = styled.div`
  width: 60%;

  @media ${device.laptop} {
    width: 100%;
    margin-top: 60px;
  }
`;

export const TextWrapper = styled.div`
  width: 35%;
  text-align: justify;

  & > p {
    padding-bottom: 20px;
  }

  @media ${device.laptop} {
    width: 100%;
  }
`;
