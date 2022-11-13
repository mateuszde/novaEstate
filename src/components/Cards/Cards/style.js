import styled from 'styled-components';
import { device } from '../../../device';

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  max-width: 1200px;
  gap: 40px;
  margin: 40px auto;
  color: ${({ theme }) => theme.colors.black};

  @media ${device.laptopM} {
    width: 90%;
  }

  @media ${device.tablet} {
    flex-direction: column;
  }
`;
