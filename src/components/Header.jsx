import styled from 'styled-components';

const HeaderContainer = styled.header`
  background: #282c34;
  color: #61dafb;
  padding: 10px 20px;
  text-align: center;
  position: fixed;
  width: 100%;
  top: 0;
  left: 0;
  z-index: 1000;
  box-shadow: 0 2px 5px rgba(0, 0, 0, 0.1);
`;

const Nav = styled.nav`
  display: flex;
  justify-content: center;
  gap: 20px;
`;

const NavLink = styled.a`
  color: #61dafb;
  text-decoration: none;
  font-size: 1.2rem;
  transition: color 0.3s;

  &:hover {
    color: #21a1f1;
  }
`;

const Header = () => (
  <HeaderContainer>
    <Nav>
      <NavLink href="#hero">Home</NavLink>
      <NavLink href="#about">Sobre</NavLink>
      <NavLink href="#skills">Habilidades</NavLink>
      <NavLink href="#projects">Projetos</NavLink>
      <NavLink href="#contact">Contato</NavLink>
    </Nav>
  </HeaderContainer>
);

export default Header;
