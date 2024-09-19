import styled from 'styled-components';

const FooterContainer = styled.footer`
  background: #282c34;
  color: #61dafb;
  padding: 20px;
  text-align: center;
  position: relative;
  bottom: 0;
  width: 100%;
`;

const Footer = () => (
  <FooterContainer>
    <p>&copy; {new Date().getFullYear()} Erick Cardoso. Todos os direitos reservados.</p>
  </FooterContainer>
);

export default Footer;
