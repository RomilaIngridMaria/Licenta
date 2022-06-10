import React from 'react';
import {FaBars} from 'react-icons/fa';
import {IoHeartCircleOutline, AiOutlineUse,FaRegUserCircle} from "react-icons/io5";
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
  NavBtnLink,
  MobileIconWhite,
  NavBtnF
} from './NavbarUserElements';

const NavbarUser = ({ toggle }) => {

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
                to="albums"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Albums
                </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="postcards"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
              >
                Postcard
                </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks 
                to="exploadingBoxes"
                smooth={true}
                duration={500}
                spy={true}
                exact='true'
                offset={-80}
                >
                  Exploading Boxes
                  </NavLinks>
            </NavItem>
            <NavItem>
              <NavLinks to="matchboxes">Mini Presents</NavLinks>
            </NavItem>
          </NavMenu>
          <NavBtn >
              {/* <MobileIconWhite>
                <IoHeartCircleOutline />
              </MobileIconWhite>
              <MobileIconWhite>
                <AiOutlineUser />
              </MobileIconWhite> */}
              <NavBtnF>Cart</NavBtnF>
              <NavBtnF>User</NavBtnF>
            </NavBtn>
        </NavbarContainer>
      </Nav>
    </>
  )
}

export default NavbarUser;