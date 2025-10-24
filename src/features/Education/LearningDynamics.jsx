import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaPuzzlePiece, FaRocket } from 'react-icons/fa';

const Container = styled.section`
  padding: 4rem;
  background: ${props => props.theme.colors.subtleGray};
  width: 100vw;
  margin: 0;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 3rem 1rem;
  }
`;

const Title = styled(motion.h2)`
  color: ${props => props.theme.colors.text};
  text-align: center;
  margin-bottom: 3rem;
  font-size: 2rem;
  font-weight: 500;
`;

const DynamicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const DynamicCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
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
    height: 6px;
    background: linear-gradient(90deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.accent}, ${props => props.theme.colors.playful});
    border-radius: 20px 20px 0 0;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    border-color: ${props => props.theme.colors.secondary};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem;
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const DynamicTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

const DynamicDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.5;
  opacity: 0.8;
  font-size: 0.9375rem;
`;

const dynamics = [
  {
    icon: <FaLightbulb />,
    title: "Critical Thinking",
    description: "Develop the ability to analyze complex problems and find creative solutions through logical reasoning."
  },
  {
    icon: <FaUsers />,
    title: "Collaborative Learning",
    description: "Foster teamwork and effective communication to solve technological challenges together."
  },
  {
    icon: <FaPuzzlePiece />,
    title: "Problem Solving",
    description: "Teach systematic strategies to break down large problems into manageable components."
  },
  {
    icon: <FaRocket />,
    title: "Technological Innovation",
    description: "Inspire the creation of technological solutions that address real societal needs."
  }
];

const LearningDynamics = () => {
  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Dinámicas de Aprendizaje
      </Title>

      <DynamicsGrid>
        {dynamics.map((dynamic, index) => (
          <DynamicCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <IconWrapper>{dynamic.icon}</IconWrapper>
            <DynamicTitle>{dynamic.title}</DynamicTitle>
            <DynamicDescription>{dynamic.description}</DynamicDescription>
          </DynamicCard>
        ))}
      </DynamicsGrid>
    </Container>
  );
};

export default LearningDynamics;