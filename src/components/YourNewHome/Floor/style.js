import styled from 'styled-components';
import { device } from '../../../device';

export const Wrapper = styled.div`
  display: flex;
  width: 100%;
  padding: 20px 0;

  @media ${device.laptop} {
    flex-direction: column-reverse;
  }
`;

export const WrapperImage = styled.div`
  width: 60%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  border-radius: 20px;

  @media ${device.laptop} {
    width: 90%;
    margin: 60px auto 0;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
`;

export const WrapperFloorData = styled.div`
  width: 40%;
  padding: 0 0 0 30px;
  display: flex;
  flex-direction: column;
  justify-content: center;

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-bottom: 20px;
  }

  @media ${device.laptop} {
    width: 80%;
    margin: 0 auto;
    padding: 0;
  }

  @media ${device.tablet} {
    width: 100%;
  }

  @media ${device.mobileXL} {
    font-size: ${({ theme }) => theme.fontSize.m};
  }
`;
