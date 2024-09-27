import PropTypes from 'prop-types';
import styled from 'styled-components';

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

const PrimaryButton = ({ nameButton, onClick, disabled }) => (
  <Button onClick={onClick} disabled={disabled}>
    {nameButton}
  </Button>
);

PrimaryButton.propTypes = {
  nameButton: PropTypes.string.isRequired,
  onClick: PropTypes.func.isRequired,
  disabled: PropTypes.bool,
};

export default PrimaryButton;
