import styled from 'styled-components';
import { device } from '../../device';

export const Wrapper = styled.div`
  display: flex;
  margin: 60px auto;
  max-width: 1200px;
  min-height: 600px;

  @media ${device.laptopM} {
    width: 90%;
  }

  @media ${device.laptop} {
    flex-direction: column;
  }

  @media ${device.tablet} {
    width: 100%;
  }
`;

export const TextWrapper = styled.div`
  width: 50%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 0 40px 40px 0;
  text-align: justify;

  @media ${device.laptop} {
    width: 100%;
    padding: 40px 0;
  }

  @media ${device.tablet} {
    width: 90%;
    margin: 0 auto;
  }
`;

export const ImageWrapper = styled.div`
  width: 50%;

  @media ${device.laptop} {
    width: 100%;
  }
`;

export const StyledImage = styled.img`
  width: 100%;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  transition: 0.4s ease;
  border-radius: 20px;

  &:hover {
    transform: scale(1.3);
  }

  @media ${device.laptop} {
    &:hover {
      transform: none;
    }
  }

  @media ${device.tablet} {
    border-radius: 0;
  }
`;

export const Title = styled.h2`
  font-size: ${({ theme }) => theme.fontSize.xl};
  margin-bottom: 40px;
  text-align: left;
  color: ${({ theme }) => theme.colors.primary};
`;

export const StyleParagraph = styled.p`
  margin-bottom: 30px;
`;
