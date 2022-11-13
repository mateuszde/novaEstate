import styled from 'styled-components';
import { device } from '../../device';

export const BackgroundWrapper = styled.div`
  width: 100%;
  min-height: 80vh;
  display: flex;
  justify-content: center;
  padding: 40px;

  @media ${device.laptopM} {
    padding: 0;
  }
`;

export const Wrapper = styled.div`
  max-width: 1200px;
  height: 100%;
  margin: auto;

  @media ${device.laptopM} {
    width: 90%;
  }

  @media ${device.mobileXL} {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 40px;
  box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px,
    rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px,
    rgba(0, 0, 0, 0.09) 0px -3px 5px;
  opacity: 0.95;
  border-radius: 20px;
  transition: 0.4s ease;

  &:hover {
    opacity: 1;
  }

  @media ${device.laptop} {
    width: 70%;
  }

  @media ${device.mobileXL} {
    width: 90%;
    margin: 40px auto;
    box-shadow: none;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 40px;
  color: ${({ theme }) => theme.colors.primary};

  @media ${device.mobileXL} {
    font-size: ${({ theme }) => theme.fontSize.l};
  }
`;

export const StyledParagraph = styled.p`
  margin-bottom: 30px;
  text-align: justify;
`;
