import styled from 'styled-components';
import { motion } from 'framer-motion';

const CardContainer = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: 16px;
  padding: 1.5rem;
  box-shadow: 0 4px 20px rgba(0, 0, 0, 0.08);
  margin-bottom: 1.5rem;
  cursor: pointer;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  background: linear-gradient(135deg, ${props => props.theme.colors.white} 0%, ${props => props.theme.colors.lightGray} 100%);
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.accent});
    border-radius: 16px 16px 0 0;
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 12px 40px rgba(0, 0, 0, 0.15);
    border-color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 1.25rem;
    margin-bottom: 1rem;
  }
`;

const CardTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-size: 1.125rem;
  font-weight: 500;
`;

const CardDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.5;
  opacity: 0.8;
  font-size: 0.9375rem;
`;

const Card = ({ title, description, onClick, children }) => {
  return (
    <CardContainer
      onClick={onClick}
      whileHover={{ scale: 1.02 }}
      whileTap={{ scale: 0.98 }}
    >
      {title && <CardTitle>{title}</CardTitle>}
      {description && <CardDescription>{description}</CardDescription>}
      {children}
    </CardContainer>
  );
};

export default Card;