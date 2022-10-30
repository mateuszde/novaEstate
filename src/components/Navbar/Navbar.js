import { NavWrapper, Wrapper, Logo, StyledList, LogoWrapper, ListItem, NavLink } from './style';
import logo from '../../images/logo.png';

const Navbar = () => {
  return (
    <NavWrapper>
      <Wrapper>
        <LogoWrapper>
          <Logo src={logo} alt="Nova - Osiedle domów szeregowych" />
        </LogoWrapper>
        <StyledList>
          <ListItem>
            <NavLink>Lokalizacja</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>O inwestycji</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Domy</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Dostępność</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>O inwestorze</NavLink>
          </ListItem>
          <ListItem>
            <NavLink>Kontakt</NavLink>
          </ListItem>
        </StyledList>
      </Wrapper>
    </NavWrapper>
  );
};

export default Navbar;
