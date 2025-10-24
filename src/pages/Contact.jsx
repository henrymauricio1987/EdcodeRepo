import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaEnvelope, FaUser, FaPaperPlane } from 'react-icons/fa';

const ContactContainer = styled.div`
  max-width: 600px;
  margin: 0 auto;
  padding: 4rem;
  width: 100vw;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 3rem 1rem;
  }
`;

const Title = styled(motion.h1)`
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: 2.5rem;
  font-size: 2rem;
  font-weight: 500;
`;

const Form = styled(motion.form)`
  background: ${props => props.theme.colors.white};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 1px 3px rgba(0, 0, 0, 0.1);
  border: 1px solid ${props => props.theme.colors.lightGray};

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.5rem;
  }
`;

const FormGroup = styled.div`
  margin-bottom: 1.5rem;
`;

const Label = styled.label`
  display: block;
  margin-bottom: 0.5rem;
  color: ${props => props.theme.colors.text};
  font-weight: 500;
`;

const Input = styled.input`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.colors.lightGray};
  border-radius: 8px;
  font-size: 1rem;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const TextArea = styled.textarea`
  width: 100%;
  padding: 0.75rem;
  border: 2px solid ${props => props.theme.colors.lightGray};
  border-radius: 8px;
  font-size: 1rem;
  min-height: 120px;
  resize: vertical;
  transition: border-color 0.3s ease;

  &:focus {
    outline: none;
    border-color: ${props => props.theme.colors.primary};
  }
`;

const SubmitButton = styled(motion.button)`
  background: linear-gradient(135deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.accent});
  color: ${props => props.theme.colors.white};
  border: 2px solid transparent;
  padding: 1rem 2rem;
  border-radius: 30px;
  font-size: 1rem;
  font-weight: 600;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  margin: 0 auto;
  transition: all 0.3s ease;
  box-shadow: 0 4px 20px rgba(78, 205, 196, 0.3);

  &:hover:not(:disabled) {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 30px rgba(78, 205, 196, 0.4);
    background: linear-gradient(135deg, ${props => props.theme.colors.accent}, ${props => props.theme.colors.secondary});
  }

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }
`;

const SuccessMessage = styled(motion.div)`
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  padding: 1rem;
  border-radius: 8px;
  text-align: center;
  margin-top: 1rem;
`;

function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [submitted, setSubmitted] = useState(false);

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setIsSubmitting(true);

    // Simulate form submission
    await new Promise(resolve => setTimeout(resolve, 1000));

    setIsSubmitting(false);
    setSubmitted(true);
    setFormData({ name: '', email: '', message: '' });

    // Reset success message after 5 seconds
    setTimeout(() => setSubmitted(false), 5000);
  };

  return (
    <ContactContainer>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Contact
      </Title>

      <Form
        onSubmit={handleSubmit}
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FormGroup>
          <Label htmlFor="name">
            <FaUser style={{ marginRight: '0.5rem' }} />
            Name
          </Label>
          <Input
            type="text"
            id="name"
            name="name"
            value={formData.name}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="email">
            <FaEnvelope style={{ marginRight: '0.5rem' }} />
            Email
          </Label>
          <Input
            type="email"
            id="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <FormGroup>
          <Label htmlFor="message">Message</Label>
          <TextArea
            id="message"
            name="message"
            value={formData.message}
            onChange={handleChange}
            required
          />
        </FormGroup>

        <SubmitButton
          type="submit"
          disabled={isSubmitting}
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FaPaperPlane />
          {isSubmitting ? 'Sending...' : 'Send Message'}
        </SubmitButton>

        {submitted && (
          <SuccessMessage
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.3 }}
          >
            Message sent successfully! Thank you for contacting us.
          </SuccessMessage>
        )}
      </Form>
    </ContactContainer>
  );
}

export default Contact;