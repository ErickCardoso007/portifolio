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
`;

const Title = styled.h2`
  font-size: 2.5rem;
  font-weight: 700;
  text-align: center;
  color: #333;
  margin-bottom: 10px;
`;

const Subtitle = styled.p`
  font-size: 1.2rem;
  text-align: center;
  color: #666;
  margin-bottom: 40px;
`;

const ContactForm = styled.form`
  background-color: #fff;
  box-shadow: 0 4px 10px rgba(0, 0, 0, 0.1);
  border-radius: 10px;
  padding: 30px;
  max-width: 600px;
  width: 100%;
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
    border-color: #6c63ff;
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
    border-color: #6c63ff;
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
      setTimeout(() => {
        setShowMessage(false);
      }, 3000);
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
        setTimeout(() => {
          setShowMessage(false);
        }, 1000);
      },
      (error) => {
        console.error(error);
        setFeedbackMessage('An error occurred, please try again.');
        setShowMessage(true);
        setTimeout(() => {
          setShowMessage(false);
        }, 2000);
      }
    )
    .finally(() => {
      setLoading(false);
    });
  };

  return (
    <ContactSection id='contact'>
      <Title>Contact</Title>
      <Subtitle>Feel free to contact me by submitting the form below, and I will get back to you as soon as possible.</Subtitle>
      <ContactForm onSubmit={sendEmail}>
        <InputField
          type="text"
          name="name"
          placeholder="Enter Your Name"
          value={formData.name}
          onChange={handleChange}
          required
        />
        <InputField
          type="email"
          name="email"
          placeholder="Enter Your Email"
          value={formData.email}
          onChange={handleChange}
          required
        />
        <TextArea
          name="message"
          placeholder="Enter Your Message"
          value={formData.message}
          onChange={handleChange}
          required
        />
        <PrimaryButton nameButton={loading ? 'Sending...' : 'SEND'} scrollToSection={sendEmail} disabled={loading} />
      </ContactForm>
      {showMessage && (
        <FeedbackMessage success={feedbackMessage === 'Message sent successfully!'} visible={showMessage}>
          {feedbackMessage}
        </FeedbackMessage>
      )}
    </ContactSection>
  );
};

export default Contact;
