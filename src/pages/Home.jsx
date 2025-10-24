import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaBookOpen, FaTools, FaRobot } from 'react-icons/fa';

const HomeContainer = styled.div`
  text-align: center;
  padding: 5rem;
  width: 100vw;
  margin: 0;
  box-sizing: border-box;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 3rem 1rem;
  }
`;

const HeroTitle = styled(motion.h1)`
  font-size: 2.5rem;
  font-weight: 600;
  color: ${props => props.theme.colors.text};
  margin-bottom: 1.25rem;
  line-height: 1.2;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${props => props.theme.colors.text};
  margin-bottom: 2.5rem;
  max-width: 600px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.5;
  opacity: 0.8;
`;

const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  background: linear-gradient(135deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary});
  color: ${props => props.theme.colors.white};
  padding: 1rem 2rem;
  border-radius: 30px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1rem;
  transition: all 0.3s ease;
  border: 2px solid transparent;
  box-shadow: 0 4px 20px rgba(255, 107, 107, 0.3);

  &:hover {
    transform: translateY(-3px) scale(1.05);
    box-shadow: 0 8px 30px rgba(255, 107, 107, 0.4);
    background: linear-gradient(135deg, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.primary});
  }
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
  gap: 2rem;
  margin-top: 5rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
    margin-top: 3rem;
  }
`;

const FeatureCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
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
    background: linear-gradient(90deg, ${props => props.theme.colors.primary}, ${props => props.theme.colors.secondary}, ${props => props.theme.colors.accent});
    border-radius: 20px 20px 0 0;
  }

  &:hover {
    transform: translateY(-12px) scale(1.03);
    box-shadow: 0 20px 60px rgba(0, 0, 0, 0.2);
    border-color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem;
  }
`;

const FeatureIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const FeatureTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

const FeatureDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.5;
  opacity: 0.8;
  font-size: 0.9375rem;
`;

const features = [
  {
    icon: <FaBookOpen />,
    title: "Pedagogical Methodologies",
    description: "Explore innovative approaches such as teaching for understanding, project-based learning, and thinking routines."
  },
  {
    icon: <FaTools />,
    title: "Educational Resources",
    description: "Access learning platforms like Codecademy, Scratch, Khan Academy and other digital tools."
  },
  {
    icon: <FaRobot />,
    title: "Educational Technology",
    description: "Discover how robotics, augmented reality, and app development transform modern learning."
  }
];

function Home() {
  return (
    <HomeContainer>
      <HeroTitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        The Importance of Computational Thinking
      </HeroTitle>

      <HeroSubtitle
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.2 }}
      >
        In Manuel Castells' digital era, computational thinking becomes an essential skill
        for children and adolescents. Explore modern pedagogical methodologies that integrate technology and education.
      </HeroSubtitle>

      <CTAButton
        to="/about"
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.4 }}
      >
        Explore Methodologies <FaArrowRight />
      </CTAButton>

      <FeaturesGrid>
        {features.map((feature, index) => (
          <FeatureCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 0.6 + index * 0.1 }}
          >
            <FeatureIcon>{feature.icon}</FeatureIcon>
            <FeatureTitle>{feature.title}</FeatureTitle>
            <FeatureDescription>{feature.description}</FeatureDescription>
          </FeatureCard>
        ))}
      </FeaturesGrid>
    </HomeContainer>
  );
}

export default Home;