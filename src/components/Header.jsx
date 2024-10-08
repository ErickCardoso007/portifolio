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
  padding: 0.5rem; 
  z-index: 1000;
`;

const Logo = styled.h1`
  font-size: 18px; 
  margin-left: 3px;

  @media (max-width: 768px) {
    font-size: 20px; 
  }

  @media (max-width: 480px) {
    font-size: 18px; 
  }
`;

const LogoContainer = styled.div`
  display: flex;
  align-items: center;
  margin-left: 30px;
`;

const ImageProfiles = styled.img`
  width: 45px; 
  height: 45px; 
  border-radius: 50%;
  margin-right: 10px; 

  @media (max-width: 768px) {
    width: 45px; 
    height: 45px;
  }

  @media (max-width: 480px) {
    width: 40px; 
    height: 40px; 
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
  width: 20px; 
  height: 2px; 
  background-color: white;
  margin: 2px 0; 
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
  width: 200px; 
  height: 100%;
  background-color: #1d7874;
  color: white;
  transition: right 0.3s ease;
  padding: 1.5rem; 
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
  margin: 15px 0; 
  text-align: center;
`;

const SidebarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem; 
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;  
  &:hover {
    color: #A9A9A9; 
    transform: translateX(2px); 
  }
`;

const Navbar = styled.nav`
  display: none;
  @media (min-width: 769px) {
    display: flex;
    gap: 15px; 
  }
`;

const NavbarList = styled.ul`
  list-style: none;
  display: flex;
  padding: 0;
`;

const NavbarItem = styled.li`
  margin: 0 15px; 
`;

const NavbarLink = styled(Link)`
  color: white;
  text-decoration: none;
  font-size: 1rem; 
  transition: color 0.3s ease, transform 0.3s ease;
  cursor: pointer;
  &:hover {
    color: #A9A9A9; 
    transform: translateX(2px); 
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
              <NavbarLink to="home" smooth={true} duration={500} offset={-80} spy={true} exact="true">HOME</NavbarLink>
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
            <SidebarLink to="home" smooth={true} duration={500} offset={-80} spy={true} exact="true" onClick={() => setIsSidebarOpen(false)}>HOME</SidebarLink>
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
