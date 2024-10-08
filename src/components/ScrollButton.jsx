import styled from 'styled-components';
import PropTypes from 'prop-types';

const Button = styled.button`
  background-color: #1d7874;
  color: white;
  border: none;
  padding: 10px 20px;
  font-size: 0.9rem;
  cursor: pointer;
  border-radius: 5px;
  transition: background-color 0.3s ease;

  &:hover {
    background-color: #155c59;
  }
`;

const ScrollButton = ({ nameButton, scrollToSection }) => {
  const handleClick = () => {
    if (scrollToSection) {
      scrollToSection();
    } else {
      const section = document.getElementById("projects");
      if (section) {
        window.scrollTo({
          top: section.offsetTop,
          behavior: 'smooth',
        });
      }
    }
  };

  return <Button onClick={handleClick}>{nameButton}</Button>;
};

ScrollButton.propTypes = {
  nameButton: PropTypes.string.isRequired,
  scrollToSection: PropTypes.func,
};

export default ScrollButton;
