import { useState } from 'react';
import styled, { keyframes } from 'styled-components';
import emailjs from 'emailjs-com';
import PrimaryButton from '../components/PrimaryButton';

const ContactSection = styled.section`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 50px 20px;
  background-color: #f5f5f5;

  @media (max-width: 768px) {
    padding: 30px 10px; 
  }
`;

const Title = styled.h2`
  font-size: 2rem;
  font-weight: 700;
  text-align: center;
  color: #333;
  margin-bottom: 10px;

  &::after {
    content: '';
    display: block;
    width: 25px; 
    height: 4px; 
    background-color: #1d7874; 
    margin: 10px auto 0; 
    border-radius: 2px; 
  }

  @media (max-width: 768px) {
    font-size: 2rem; 
  }
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    font-size: 1rem; 
  }
`;

const ContactForm = styled.form`
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 20px;
  max-width: 600px;
  width: 100%;

  @media (max-width: 768px) {
    padding: 15px; 
  }
`;

const InputContainer = styled.div`
  position: relative;
  margin: 10px 0;
`;

const InputField = styled.input`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #1d7874;
  }

  @media (max-width: 768px) {
    padding: 12px; 
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 15px;
  margin: 10px 0;
  border: 1px solid #ddd;
  border-radius: 5px;
  font-size: 1rem;
  min-height: 150px;
  outline: none;
  transition: border-color 0.3s ease;

  &:focus {
    border-color: #1d7874;
  }

  @media (max-width: 768px) {
    padding: 12px; 
  }
`;

const Label = styled.label`
  position: absolute;
  top: 26px;
  left: 15px;
  font-size: 1rem;
  color: #aaa;
  transition: 0.2s;
  pointer-events: none;
  z-index: 1;

  &::before {
    content: '';
    position: absolute;
    top: 1px;
    left: -5px;
    right: -5px;
    height: 20px;
    color: #1d7874;
    background-color: #fff;
    z-index: -1;
  }

  ${InputField}:focus ~ &,
  ${InputField}:not(:placeholder-shown) ~ &,
  ${TextArea}:focus ~ &,
  ${TextArea}:not(:placeholder-shown) ~ & {
    top: 1px;
    left: 10px;
    font-size: 0.85rem;
    color: #1d7874;
  }
`;

const bounce = keyframes`
  0%, 20%, 50%, 80%, 100% {
    transform: translateY(0);
  }
  40% {
    transform: translateY(-10px);
  }
  60% {
    transform: translateY(-5px);
  }
`;

const FeedbackMessage = styled.p`
  margin-top: 20px;
  font-size: 1rem;
  color: ${(props) => (props.success ? '#2d7d21' : '#eb0a03')};
  animation: ${bounce} 0.6s forwards;

  @media (max-width: 768px) {
    font-size: 0.9rem; 
  }
`;

const Contact = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [loading, setLoading] = useState(false);
  const [feedbackMessage, setFeedbackMessage] = useState('');
  const [showMessage, setShowMessage] = useState(false);

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const sendEmail = (e) => {
    e.preventDefault();

    if (!formData.name || !formData.email || !formData.message) {
      setFeedbackMessage('Please fill in all fields.');
      setShowMessage(true);
      setTimeout(() => setShowMessage(false), 3000);
      return;
    }

    setLoading(true);
    setFeedbackMessage('');

    emailjs.send(
      'service_mektps9',
      'template_eilk63d',
      formData,
      'q-7CQ3yr1dE-Hgynf',
    )
    .then(
      () => {
        setFormData({ name: '', email: '', message: '' });
        setFeedbackMessage('Message sent successfully!');
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 1000);
      },
      (error) => {
        console.error(error);
        setFeedbackMessage('An error occurred, please try again.');
        setShowMessage(true);
        setTimeout(() => setShowMessage(false), 2000);
      }
    )
    .finally(() => setLoading(false));
  };

  return (
    <ContactSection id='contact'>
      <Title>CONTACT</Title>
      <Subtitle>Feel free to contact me by submitting the form below, and I will get back to you as soon as possible.</Subtitle>
      <ContactForm onSubmit={sendEmail}>
        <InputContainer>
          <InputField
            type="text"
            name="name"
            id="name"
            placeholder=" "
            value={formData.name}
            onChange={handleChange}
            required
          />
          <Label htmlFor="name">Name</Label>
        </InputContainer>
        <InputContainer>
          <InputField
            type="email"
            name="email"
            id="email"
            placeholder=" "
            value={formData.email}
            onChange={handleChange}
            required
          />
          <Label htmlFor="email">Email</Label>
        </InputContainer>
        <InputContainer>
          <TextArea
            name="message"
            id="message"
            placeholder=" "
            value={formData.message}
            onChange={handleChange}
            required
          />
          <Label htmlFor="message">Message</Label>
        </InputContainer>
        <PrimaryButton nameButton={loading ? 'Sending...' : 'Send Message'} onClick={sendEmail} disabled={loading} />
        {showMessage && <FeedbackMessage success={feedbackMessage.includes('successfully')}>{feedbackMessage}</FeedbackMessage>}
      </ContactForm>
    </ContactSection>
  );
};

export default Contact;
