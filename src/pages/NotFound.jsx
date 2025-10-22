import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 4rem 1rem;
  max-width: 600px;
  margin: 0 auto;
`;

const ErrorCode = styled(motion.h1)`
  font-size: 6rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 4rem;
  }
`;

const Title = styled(motion.h2)`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
`;

const Description = styled(motion.p)`
  color: ${props => props.theme.colors.text};
  margin-bottom: 2rem;
  line-height: 1.6;
`;

const HomeButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.white};
  padding: 1rem 2rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: bold;
  font-size: 1.1rem;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-2px);
    box-shadow: 0 8px 15px rgba(30, 136, 229, 0.3);
  }
`;

function NotFound() {
  return (
    <NotFoundContainer>
      <ErrorCode
        initial={{ opacity: 0, scale: 0.5 }}
        animate={{ opacity: 1, scale: 1 }}
        transition={{ duration: 0.6 }}
      >
        404
      </ErrorCode>

      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        <FaSearch style={{ marginRight: '0.5rem' }} />
        Page Not Found
      </Title>

      <Description
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Sorry, the page you're looking for doesn't exist or has been moved.
      </Description>

      <HomeButton
        to="/"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.6 }}
      >
        <FaHome />
        Back to Home
      </HomeButton>
    </NotFoundContainer>
  );
}

export default NotFound;