import { useState } from 'react';
import {
  NavWrapper,
  Wrapper,
  Logo,
  StyledList,
  LogoWrapper,
  ListItem,
  NavLink,
  Burger,
} from './style';
import logo from '../../images/logo.png';

const Navbar = ({ refs }) => {
  const [navbarOpen, setNavbarOpen] = useState(false);
  const checkbox = document.getElementById('checkbox');

  const handleToggle = () => {
    setNavbarOpen(!navbarOpen);
  };

  const handleTouch = () => {
    if (checkbox) {
      checkbox.checked = !checkbox.checked;
      handleToggle();
    }
  };

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

        <Burger onClick={handleToggle}>
          <input type="checkbox" id="checkbox" />
          <span id="span1"></span>
          <span id="span2"></span>
          <span id="span3"></span>
        </Burger>

        <StyledList navbarOpen={navbarOpen} onClick={handleTouch}>
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
