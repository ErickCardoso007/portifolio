import styled from "styled-components";
import { FaLinkedin } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLogoWhatsapp } from "react-icons/io";

const ContactCard = () => {
  const Card = styled.div`
    position: fixed;
    left: 0;
    top: 50%;
    height: 30%;
    transform: translateY(-50%);
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    background: rgba(255, 255, 255, 0.1);
    backdrop-filter: blur(10px);
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
      color: #0a66c2;
    }
  `;

  const GitHubLink = styled(Link)`
    &:hover {
      color: black;
    }
  `;

  const WhatsappLink = styled(Link)`
    &:hover {
      color: #25D366;
    }
  `;

  return (
    <Card>
      <LinkedInLink href="https://www.linkedin.com/in/erickcardosozz/" target="_blank">
        <FaLinkedin />
      </LinkedInLink>
      <GitHubLink href="https://github.com/ErickCardoso007" target="_blank">
        <FaGithub />
      </GitHubLink>
      <WhatsappLink href="https://wa.me/5551997025784" target="_blank">
        <IoLogoWhatsapp />
      </WhatsappLink>
    </Card>
  );
};

export default ContactCard;
