import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaLightbulb, FaUsers, FaPuzzlePiece, FaRocket } from 'react-icons/fa';

const Container = styled.section`
  padding: 3rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
  background: ${props => props.theme.colors.background};
`;

const Title = styled(motion.h2)`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 3rem;
`;

const DynamicsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const DynamicCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }
`;

const IconWrapper = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
`;

const DynamicTitle = styled.h3`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
  font-size: 1.2rem;
`;

const DynamicDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
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