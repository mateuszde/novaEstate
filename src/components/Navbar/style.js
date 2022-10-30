import styled from 'styled-components';

export const Wrapper = styled.div`
  display: flex;
  position: sticky;
  top: 0;
  left: 0;
  justify-content: space-between;
  align-items: center;
  max-width: 1200px;
  margin: 0 auto;
  color: ${({ theme }) => theme.colors.black};
`;

export const LogoWrapper = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
`;
export const Logo = styled.img`
  height: 90px;
`;

export const StyledList = styled.ul`
  display: flex;
  height: 100%;
  list-style: none;
  gap: 20px;
`;

export const ListItem = styled.li`
  height: 100%;
`;

export const NavLink = styled.p`
  height: 100%;
  padding: 30px 0;
  font-size: 18px;
  font-weight: 600;
  cursor: pointer;
  transition: 0.2s ease-in-out;

  &:hover {
    color: ${({ theme }) => theme.colors.secondary};
  }
`;
