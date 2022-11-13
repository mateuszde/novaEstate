import styled from 'styled-components';
import { device } from '../../device';
export const BackgroundWrapper = styled.div`
  max-width: 1200px;
  height: 60vh;
  display: flex;
  justify-content: center;
  margin: 70px auto;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.04) 0px 3px 5px;

  @media ${device.laptopM} {
    width: 90%;
  }

  @media ${device.mobileXL} {
    height: 200px;
  }
`;
