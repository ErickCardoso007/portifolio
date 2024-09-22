import { useState } from 'react';
import { Link } from 'react-scroll';
import styled from 'styled-components';
import Profile from '../assets/Profile.jpg';

const HeaderContainer = styled.header`
  background-color: #1d7874;
  box-shadow: rgba(255, 255, 255, 0.1) 0px 0px 10px 0px inset, rgba(50, 50, 93, 0.25) 0px 50px 100px -20px, rgba(0, 0, 0, 0.3) 0px 30px 60px -30px;
  color: white;
  display: flex;
  justify-content: space-between;
  align-items: center;
  position: sticky;
  top: 0;
  width: 100%;
  box-sizing: border-box;
  padding: 1rem;
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 17px;
  margin-left: 10px;
  @media (min-width: 768px) {
    font-size: 20px;
  }
  @media (min-width: 1024px) {
    font-size: 24px;
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
`;

const ImageProfiles = styled.img`
  width: 50px;
  height: 50px;
  border-radius: 50%;
  margin-right: 15px;
  @media (min-width: 768px) {
    width: 60px;
    height: 60px;
  }
`;

const BurgerMenu = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  cursor: pointer;
  @media (min-width: 769px) {
    display: none;
  }
`;

const BurgerLine = styled.div`
  width: 25px;
  height: 3px;
  background-color: white;
  margin: 3px 0;
  transition: background-color 0.3s ease, transform 0.3s ease;
  &:hover {
    background-color: #DCDCDC;
    transform: scale(1.1);
  }
`;

const Sidebar = styled.div`
  position: fixed;
  top: 0;
  right: ${({ isOpen }) => (isOpen ? '0' : '-250px')};
  width: 250px;
  height: 100%;
  background-color: #1d7874;
  color: white;
  transition: right 0.3s ease;
  padding: 2rem;
  z-index: 999;
  box-sizing: border-box;
  @media (min-width: 769px) {
    display: none;
  }
`;

const SidebarList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const SidebarItem = styled.li`
  margin: 20px 0;
  text-align: center;
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;  
  &:hover {
    color: #DCDCDC;
    transform: scale(1.1); 
  }
`;

const Navbar = styled.nav`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    gap: 20px;
  }
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
  margin: 0;
`;

const NavbarItem = styled.li`
  margin: 0 20px;
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #DCDCDC;
    transform: scale(1.1);
  }
`;

const Header = () => {
  const [isSidebarOpen, setIsSidebarOpen] = useState(false);

  return (
    <>
      <HeaderContainer>
        <LogoContainer>
          <ImageProfiles src={Profile} alt="Profile" />
          <Logo>ERICK CARDOSO</Logo>
        </LogoContainer>
        <Navbar>
          <NavbarList>
            <NavbarItem>
              <NavbarLink to="hero" smooth={true} duration={500} offset={-80} spy={true} exact="true">HOME</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to="about" smooth={true} duration={500} offset={-80} spy={true} exact="true">ABOUT</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to="projects" smooth={true} duration={500} offset={-80} spy={true} exact="true">PROJECTS</NavbarLink>
            </NavbarItem>
            <NavbarItem>
              <NavbarLink to="contact" smooth={true} duration={500} offset={-80} spy={true} exact="true">CONTACT</NavbarLink>
            </NavbarItem>
          </NavbarList>
        </Navbar>
        <BurgerMenu onClick={() => setIsSidebarOpen(!isSidebarOpen)}>
          <BurgerLine />
          <BurgerLine />
          <BurgerLine />
        </BurgerMenu>
      </HeaderContainer>
      <Sidebar isOpen={isSidebarOpen}>
        <SidebarList>
          <SidebarItem>
            <SidebarLink to="hero" smooth={true} duration={500} offset={-80} spy={true} exact="true" onClick={() => setIsSidebarOpen(false)}>HOME</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="about" smooth={true} duration={500} offset={-80} spy={true} exact="true" onClick={() => setIsSidebarOpen(false)}>ABOUT</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="projects" smooth={true} duration={500} offset={-80} spy={true} exact="true" onClick={() => setIsSidebarOpen(false)}>PROJECTS</SidebarLink>
          </SidebarItem>
          <SidebarItem>
            <SidebarLink to="contact" smooth={true} duration={500} offset={-80} spy={true} exact="true" onClick={() => setIsSidebarOpen(false)}>CONTACT</SidebarLink>
          </SidebarItem>
        </SidebarList>
      </Sidebar>
    </>
  );
};

export default Header;
