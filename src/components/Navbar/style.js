import { keyframes } from '@emotion/react';
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
    z-index: 2;
  }
`;

export const FadeInRight = keyframes`
  0%{
    transform: translateX(300px),
  }
  100% {
    transform: translateX(0),
  }
`;

export const FadeOutRight = keyframes`
  0%{
    transform: translateX(0),
  }
  100% {
    transform: translateX(300px),
  }
`;

export const StyledList = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;
  gap: 20px;

  @media ${device.laptopS} {
    width: 70%;
    flex-direction: column;
    align-items: flex-end;
    position: absolute;
    top: 0;
    right: 0;
    width: 250px;
    margin-right: -250px;
    height: 100vh;
    padding: 100px 20px 20px;
    z-index: 1;
    background-color: ${({ theme }) => theme.colors.white};
    transition: 0.3s ease-in-out;
    display: flex;
    transform: ${({ navbarOpen = false }) => (navbarOpen ? 'translate(-250px)' : 'none')};
  }
`;

export const ListItem = styled.li`
  height: 100%;

  @media ${device.laptopS} {
    height: auto;
  }
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

  @media ${device.laptopS} {
    padding: 10px;
    margin-right: 40px;
  }
`;

export const Burger = styled.div`
  width: 40px;
  height: 35px;
  overflow: hidden;
  position: absolute;
  top: 50%;
  transform: translateY(-50%);
  right: 30px;
  display: none;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  z-index: 2;

  @media ${device.laptopS} {
    display: flex;
  }

  & input {
    display: flex;
    width: 60px;
    height: 60px;
    position: absolute;
    cursor: pointer;
    opacity: 0; /* hide input */
    z-index: 3; /* top of the menu */
    &:checked ~ #span1 {
      transform: translateY(5px) rotate(45deg);
    }
    &:checked ~ #span2 {
      transform: translateX(-100%);
      opacity: 0;
    }
    &:checked ~ #span3 {
      transform: translateY(-5px) rotate(-45deg);
    }
  }
  & span {
    width: 40px;
    height: 5px;
    background-color: ${({ theme }) => theme.colors.primary};
    border-radius: 4px;
    transition: all 0.2s ease-in;
  }
  & #span1 {
    transform: translateY(-10px);
  }
  & #span3 {
    transform: translateY(10px);
  }
`;
