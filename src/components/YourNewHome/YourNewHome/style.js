import styled from 'styled-components';
import { device } from '../../../device';

export const Wrapper = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 1200px;
  margin: 0 auto;

  @media ${device.laptopM} {
    width: 90%;
  }
`;

export const TitleWrapper = styled.div`
  width: 100%;

  & h2 {
    font-size: ${({ theme }) => theme.fontSize.xl};
    margin-bottom: 20px;
    color: ${({ theme }) => theme.colors.primary};
  }

  & h3 {
    font-size: ${({ theme }) => theme.fontSize.l};
    margin-bottom: 40px;
  }

  @media ${device.mobileXL} {
    & h2 {
      font-size: ${({ theme }) => theme.fontSize.l};
    }

    & h3 {
      font-size: ${({ theme }) => theme.fontSize.s};
    }
  }
`;

export const FloorsWrapper = styled.div`
  width: 100%;
`;
