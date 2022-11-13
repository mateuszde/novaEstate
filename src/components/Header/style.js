import styled from 'styled-components';
import { device } from '../../device';

export const BackgroundWrapper = styled.div`
  width: 100%;
  min-height: 85vh;
  position: relative;
`;
export const Wrapper = styled.header`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  right: 100;
  background-color: rgba(0, 0, 0, 0.32);
`;

export const TextWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 30px;
  width: 100%;
  height: 100%;
  text-shadow: 0 1px 1px #000;
  color: ${({ theme }) => theme.colors.white};

  & h1 {
    font-size: ${({ theme }) => theme.fontSize.xxl};
    font-weight: 400;
  }

  & h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    font-weight: 400;
  }

  @media ${device.mobileL} {
    & h1 {
      font-size: ${({ theme }) => theme.fontSize.xl};
    }

    & h2 {
      font-size: ${({ theme }) => theme.fontSize.l};
    }
  }
`;

export const ExtraContentWrapper = styled.div`
  text-align: center;
  margin-top: 10px;
  width: 40%;

  @media ${device.laptopS} {
    width: 70%;
  }

  @media ${device.mobileL} {
    width: 90%;
  }
`;
