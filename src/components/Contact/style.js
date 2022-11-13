import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { device } from '../../device';
export const Wrapper = styled.div`
  display: flex;
  max-width: 1200px;
  margin: 70px auto;

  & > div {
    width: 50%;
    min-height: 200px;
  }

  @media ${device.laptopM} {
    width: 90%;
  }

  @media ${device.mobileXL} {
    flex-direction: column;

    & > div {
      width: 100%;
      min-height: 200px;
    }
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.primary};

  @media ${device.mobileL} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const Icon = styled(FontAwesomeIcon)`
  font-size: 20px;
  width: 25px;
  height: 25px;
  margin-right: 20px;
`;

export const ContactWrapper = styled.div`
  display: flex;
  flex-direction: column;

  @media ${device.mobileXL} {
    width: 100%;
    margin-bottom: 60px;
  }
`;

export const ContactElementWrapper = styled.div`
  display: flex;
  width: 75%;
  align-items: center;
  padding: 5px 20px 5px 0;
  min-height: 50px;

  @media ${device.mobileXL} {
    width: 100%;
  }
`;

export const InvestmentAddressWrapper = styled.div`
  display: flex;
  flex-direction: column;
`;

export const PersonImageWrapper = styled.div``;
