import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaRobot, FaVrCardboard, FaMobileAlt, FaCode } from 'react-icons/fa';

const Container = styled.section`
  padding: 3rem 1rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const Title = styled(motion.h2)`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 3rem;
`;

const TechGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TechCard = styled(motion.div)`
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

const TechIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

const TechTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const TechDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1rem;
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

  &:before {
    content: '✓';
    color: ${props => props.theme.colors.secondary};
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