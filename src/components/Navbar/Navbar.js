import { NavWrapper, Wrapper, Logo, StyledList, LogoWrapper, ListItem, NavLink } from './style';
import logo from '../../images/logo.png';

const Navbar = ({ refs }) => {
  const scrollToSection = (elementRef) => {
    elementRef.current.scrollIntoView({
      behavior: 'smooth',
    });
  };

  return (
    <NavWrapper>
      <Wrapper>
        <LogoWrapper onClick={() => scrollToSection(refs.header)}>
          <Logo src={logo} alt="Nova - Osiedle domów szeregowych" />
        </LogoWrapper>
        <StyledList>
          <ListItem>
            <NavLink onClick={() => scrollToSection(refs.localization)}>Lokalizacja</NavLink>
          </ListItem>
          <ListItem>
            <NavLink onClick={() => scrollToSection(refs.aboutInvestment)}>O inwestycji</NavLink>
          </ListItem>
          <ListItem>
            <NavLink onClick={() => scrollToSection(refs.houses)}>Domy</NavLink>
          </ListItem>
          <ListItem>
            <NavLink onClick={() => scrollToSection(refs.availability)}>Dostępność</NavLink>
          </ListItem>
          <ListItem>
            <NavLink onClick={() => scrollToSection(refs.investor)}>O inwestorze</NavLink>
          </ListItem>
          <ListItem>
            <NavLink onClick={() => scrollToSection(refs.contact)}>Kontakt</NavLink>
          </ListItem>
        </StyledList>
      </Wrapper>
    </NavWrapper>
  );
};

export default Navbar;
