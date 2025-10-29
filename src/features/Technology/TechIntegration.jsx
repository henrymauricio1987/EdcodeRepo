import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRobot, FaVrCardboard, FaMobileAlt, FaCode } from 'react-icons/fa';

const Container = styled.section`
  padding: 4rem;
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

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TechCard = styled(motion.div)`
  background: ${props => props.theme.colors.background};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  text-align: center;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: ${props => props.theme.colors.primary};
    border-radius: 20px 20px 0 0;
  }

  &:hover {
    transform: translateY(-10px) scale(1.02);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    border-color: ${props => props.theme.colors.accent};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem;
  }
`;

const TechIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.accent};
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const TechTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

const TechDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.5;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  font-size: 0.9375rem;
`;

const TechSkills = styled.ul`
  list-style: none;
  padding: 0;
  text-align: left;
`;

const SkillItem = styled.li`
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  padding-left: 1rem;
  position: relative;
  font-size: 0.875rem;
  opacity: 0.8;

  &:before {
    content: '•';
    color: ${props => props.theme.colors.primary};
    font-weight: bold;
    position: absolute;
    left: 0;
  }
`;

const technologies = [
  {
    icon: <FaRobot />,
    title: "Educational Robotics",
    description: "The integration of robots in the classroom allows students to learn programming, electronics, and mechanics concepts in a practical way.",
    skills: [
      "Sequence programming",
      "Sensor and actuator control",
      "Physical problem solving",
      "Teamwork"
    ]
  },
  {
    icon: <FaVrCardboard />,
    title: "Augmented Reality",
    description: "AR applications offer immersive experiences that facilitate understanding of abstract and complex concepts.",
    skills: [
      "3D visualization",
      "Spatial interaction",
      "Contextual learning",
      "Digital creativity"
    ]
  },
  {
    icon: <FaMobileAlt />,
    title: "App Development",
    description: "Creating mobile applications teaches interface design, programming logic, and real-world problem solving.",
    skills: [
      "UX/UI design",
      "Functional programming",
      "Data management",
      "Testing and debugging"
    ]
  },
  {
    icon: <FaCode />,
    title: "Creative Programming",
    description: "The use of visual and textual programming languages fosters algorithmic thinking and creative expression.",
    skills: [
      "Computational thinking",
      "Algorithmic logic",
      "Code debugging",
      "Documentation"
    ]
  }
];

const TechIntegration = () => {
  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Technology Integration in Education
      </Title>

      <TechGrid>
        {technologies.map((tech, index) => (
          <TechCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <TechIcon>{tech.icon}</TechIcon>
            <TechTitle>{tech.title}</TechTitle>
            <TechDescription>{tech.description}</TechDescription>
            <TechSkills>
              {tech.skills.map((skill, skillIndex) => (
                <SkillItem key={skillIndex}>{skill}</SkillItem>
              ))}
            </TechSkills>
          </TechCard>
        ))}
      </TechGrid>
    </Container>
  );
};

export default TechIntegration;