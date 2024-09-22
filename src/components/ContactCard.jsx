import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";


const ContactCard = () => {
  const ContactCard = styled.div`
  position: fixed;
  left: 0;
  top: 50%;
  height: 30%;
  transform: translateY(-50%);
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  background: rgba(255, 255, 255, 0.1); /* Fundo muito transparente */
  backdrop-filter: blur(10px); /* Efeito de desfoque */
  border-radius: 6px;
  box-shadow: rgba(100, 100, 111, 0.2) 0px 7px 29px 0px;
  padding: 0.5rem;
`;


const Link = styled.a`
  font-size: 35px;
  color: #333;
  transition: color 0.3s, transform 0.3s;
  text-decoration: none;

  &:hover {
    transform: scale(1.1);
  }
`;

const LinkedInLink = styled(Link)`
  &:hover {
    color: #0a66c2; /* Cor específica para LinkedIn */
  }
`;

const GitHubLink = styled(Link)`
  &:hover {
    color: black; /* Cor específica para GitHub */
  }
`;

const WhatsappLink = styled(Link)`
  &:hover {
    color: #25D366; /* Cor verde específica para WhatsApp */
  }
`;

  return (
    <ContactCard>
      <LinkedInLink href="https://www.linkedin.com/in/erickcardosozz/" target="_blank">
        <FaLinkedin />
      </LinkedInLink>
      <GitHubLink href="https://github.com/ErickCardoso007" target="_blank">
        <FaGithub />
      </GitHubLink>
      <WhatsappLink href="https://wa.me/5551997025784" target="_blank">
        <IoLogoWhatsapp />
      </WhatsappLink>
    </ContactCard>
  );
};
export default ContactCard;