import React from 'react';
import {FaBars} from 'react-icons/fa';
import {animateScroll as scroll} from 'react-scroll'
import{ 
  Nav, 
  NavbarContainer, 
  NavLogo, 
  MobileIcon, 
  NavMenu, 
  NavItem, 
  NavLinks,
  NavBtn,
  NavBtnLink
} from './NavbarElements';

const Navbar = ({ toggle }) => {

  const toggleHome = () => {
    scroll.scrollToTop();
  }

  return (
    <>
      <Nav>
        <NavbarContainer>
          <NavLogo to="/" onClick={toggleHome}>Crafty</NavLogo>
          <MobileIcon onClick={toggle}>
            <FaBars />
          </MobileIcon>
          <NavMenu>
            <NavItem>
              <NavLinks 
                to="about"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                About
                </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="discover"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Discover
                </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="services"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                  Services
                  </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="signup">Sign Up</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn>
              <NavBtnLink to="/login">Log in</NavBtnLink>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default Navbar;