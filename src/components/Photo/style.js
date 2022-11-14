import styled from 'styled-components';
import { device } from '../../device';
export const BackgroundWrapper = styled.div`
  max-width: 1200px;
  max-height: 700px;
  display: flex;
  justify-content: center;
  margin: 70px auto;

  @media ${device.laptopM} {
    width: 90%;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  object-fit: contain;
  border-radius: 20px;
`;
