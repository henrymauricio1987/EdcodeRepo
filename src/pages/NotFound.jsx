import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaHome, FaSearch } from 'react-icons/fa';

const NotFoundContainer = styled.div`
  text-align: center;
  padding: 5rem;
  width: 100vw;
  margin: 0;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 3rem 1rem;
  }
`;

const ErrorCode = styled(motion.h1)`
  font-size: 5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.5rem;
  opacity: 0.8;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 3.5rem;
  }
`;

const Title = styled(motion.h2)`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.25rem;
  font-size: 1.5rem;
  font-weight: 500;
`;

const Description = styled(motion.p)`
  color: ${props => props.theme.colors.text};
  margin-bottom: 2.5rem;
  line-height: 1.5;
  opacity: 0.8;
  font-size: 1rem;
`;

const HomeButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.accent}, ${props => props.theme.colors.playful});
  color: ${props => props.theme.colors.white};
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 4px 20px rgba(69, 189, 209, 0.3);

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 30px rgba(69, 189, 209, 0.4);
    background: linear-gradient(135deg, ${props => props.theme.colors.playful}, ${props => props.theme.colors.accent});
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