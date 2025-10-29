import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBrain, FaNetworkWired, FaShieldAlt, FaInfinity } from 'react-icons/fa';

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

const TrendsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const TrendCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  padding: 2.5rem;
  border-radius: 20px;
  box-shadow: 0 8px 32px rgba(0, 0, 0, 0.1);
  border: 2px solid transparent;
  position: relative;
  overflow: hidden;
  transition: all 0.3s ease;

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
    border-color: ${props => props.theme.colors.playful};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem;
  }
`;

const TrendIcon = styled.div`
  font-size: 3rem;
  color: ${props => props.theme.colors.playful};
  margin-bottom: 1.5rem;
  filter: drop-shadow(0 2px 4px rgba(0, 0, 0, 0.1));
`;

const TrendTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

const TrendDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.5;
  margin-bottom: 1.5rem;
  opacity: 0.9;
  font-size: 0.9375rem;
`;

const TrendImpact = styled.div`
  background: ${props => props.theme.colors.white};
  padding: 1.25rem;
  border-radius: 8px;
  margin-top: 1rem;
`;

const ImpactTitle = styled.h4`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 0.75rem;
  font-size: 0.9375rem;
  font-weight: 500;
`;

const ImpactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ImpactItem = styled.li`
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  padding-left: 1rem;
  position: relative;
  opacity: 0.8;

  &:before {
    content: '•';
    color: ${props => props.theme.colors.primary};
    position: absolute;
    left: 0;
  }
`;

const trends = [
  {
    icon: <FaBrain />,
    title: "Artificial Intelligence in Education",
    description: "AI will personalize learning, adapting to each student's pace and style, offering instant feedback and intelligent tutoring.",
    impacts: [
      "Empowering learning with AI: personalized, interactive, and smarter education for every student."
    ]
  },
  {
    icon: <FaNetworkWired />,
    title: "Connected Learning",
    description: "Artificial neural networks and deep learning will revolutionize how we process and understand complex information.",
    impacts: [
      "Learning together, anytime, anywhere—building knowledge through connection and collaboration."
    ]
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity and Digital Ethics",
    description: "Training in cybersecurity and digital ethics becomes essential in an increasingly connected and vulnerable world.",
    impacts: [
      "Protecting data, respecting rights—learning to navigate the digital world safely and responsibly."
    ]
  },
  {
    icon: <FaInfinity />,
    title: "Educational Metaverse",
    description: "Immersive virtual spaces where learning transcends physical limitations, enabling unlimited educational experiences.",
    impacts: [
      "Step into immersive learning worlds—where education meets virtual reality and innovation."
    ]
  }
];

const FutureTrends = () => {
  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Future Trends in Digital Education
      </Title>

      <TrendsGrid>
        {trends.map((trend, index) => (
          <TrendCard
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <TrendIcon>{trend.icon}</TrendIcon>
            <TrendTitle>{trend.title}</TrendTitle>
            <TrendDescription>{trend.description}</TrendDescription>
            <TrendImpact>
              <ImpactTitle>Educational Impact:</ImpactTitle>
              <ImpactList>
                {trend.impacts.map((impact, impactIndex) => (
                  <ImpactItem key={impactIndex}>{impact}</ImpactItem>
                ))}
              </ImpactList>
            </TrendImpact>
          </TrendCard>
        ))}
      </TrendsGrid>
    </Container>
  );
};

export default FutureTrends;