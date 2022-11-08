import styled from 'styled-components';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

export const CardWrapper = styled.div`
  width: 28%;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 20px;
  z-index: 200;
  position: relative;
  margin-top: 90px;
  margin-bottom: 20px;
  border-radius: 20px;
  box-shadow: rgba(0, 0, 0, 0.05) 0px 0px 0px 1px;
  transition: 0.2s ease;

  &:hover {
    transform: scale(1.02);
  }
`;

export const IconWrapper = styled.div`
  background-color: ${({ theme }) => theme.colors.primary};
  width: 90px;
  height: 90px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 40px;
  position: absolute;
  top: -45px;
  left: 20px;
  color: ${({ theme }) => theme.colors.white};
  border-radius: 20px;
`;

export const Icon = styled(FontAwesomeIcon)``;

export const TextWrapper = styled.div`
  margin: 60px 0;
`;

export const Title = styled.h2`
  margin-bottom: 20px;
`;
