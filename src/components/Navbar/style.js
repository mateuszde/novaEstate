import styled from 'styled-components';
import { device } from '../../device';

export const NavWrapper = styled.div`
  width: 100%;
  position: fixed;
  top: 0;
  left: 0;
  z-index: 900;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 1px 1px 1px rgba(0, 0, 0, 0.2);
`;

export const Wrapper = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.black};

  @media ${device.laptopM} {
    width: 90%;
  }
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  cursor: pointer;
`;
export const Logo = styled.img`
  height: 90px;

  @media ${device.laptopS} {
    height: 70px;
  }
`;

export const StyledList = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;
  gap: 20px;

  @media ${device.laptopS} {
    width: 70%;
    display: none;
  }
`;

export const ListItem = styled.li`
  height: 100%;
`;

export const NavLink = styled.p`
  height: 100%;
  padding: 30px 0;
  font-size: ${({ theme }) => theme.fontSize.s};
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
