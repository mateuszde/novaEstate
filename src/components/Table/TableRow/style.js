import styled from 'styled-components';
import { device } from '../../../device';

export const Wrapper = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-around;
  align-items: center;
  padding: 15px 20px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.secondary};
  font-weight: ${({ bold = true }) => (bold ? '600' : '400')};
  transition: 0.4s ease;
  background-color: ${({ bold = true, theme }) => (bold ? theme.colors.lightGray : '')};

  &:hover {
    background-color: ${({ theme }) => theme.colors.lightGray};
  }

  @media ${device.laptop} {
    width: 100%;
    justify-content: space-between;
    padding: 15px 0px;
  }

  @media ${device.mobileLExtra} {
    border-bottom: 3px solid ${({ theme }) => theme.colors.primary};

    & p {
      font-size: ${({ theme }) => theme.fontSize.extraS};
    }
  }

  @media ${device.mobileLExtraS} {
    padding: 15px 20px 0;
  }
`;

export const NumberWrapper = styled.div`
  min-width: 60px;
  display: flex;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};

  @media ${device.laptop} {
    width: 20%;
  }

  @media ${device.mobileXL} {
    width: 50%;
  }

  @media ${device.mobileLExtraS} {
    width: 70%;
    border-right: none;
    margin: 0 auto;
    padding-bottom: 15px;
  }
`;

export const AreaWrapper = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};

  @media ${device.laptop} {
    width: 40%;
  }

  @media ${device.mobileXL} {
    width: 50%;
    border-right: none;
  }

  @media ${device.mobileLExtraS} {
    width: 70%;
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    padding: 15px 0;
    margin: 0 auto;
  }
`;

export const LandAreaWrapper = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};

  @media ${device.laptop} {
    width: 40%;
    border-right: none;
  }

  @media ${device.mobileXL} {
    width: 50%;
    margin-top: 15px;
    border-right: 1px solid ${({ theme }) => theme.colors.secondary};
  }

  @media ${device.mobileLExtraS} {
    width: 70%;
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    border-right: none;
    padding: 15px 0;
    margin: 0 auto;
  }
`;

export const AvailabilityWrapper = styled.div`
  min-width: 200px;
  display: flex;
  justify-content: center;
  border-right: 1px solid ${({ theme }) => theme.colors.secondary};

  @media ${device.laptop} {
    width: 50%;
    margin-top: 15px;
    border-right: none;
    font-weight: 600;
    justify-content: center;
  }

  @media ${device.mobileLExtra} {
    width: 50%;
  }

  @media ${device.mobileLExtraS} {
    width: 70%;
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    padding: 15px 0;
    margin: 0 auto;
  }
`;

export const PriceWrapper = styled.div`
  display: flex;
  flex-grow: 1;
  min-width: 200px;
  justify-content: center;

  @media ${device.laptop} {
    width: 50%;
    margin-top: 15px;
    font-weight: 600;
  }

  @media ${device.mobileLExtra} {
    width: 100%;
  }

  @media ${device.mobileLExtraS} {
    flex-grow: unset;
    width: 70%;
    border-top: 1px solid ${({ theme }) => theme.colors.secondary};
    padding: 15px 0;
    margin: 0 auto;
  }
`;
