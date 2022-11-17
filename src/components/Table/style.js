import styled from 'styled-components';
import { device } from '../../device';

export const Wrapper = styled.div`
  max-width: 1200px;
  margin: 70px auto;
  padding: 20px 0;

  @media ${device.laptopM} {
    width: 90%;
  }

  @media ${device.mobileXL} {
    width: 100%;
  }
`;
