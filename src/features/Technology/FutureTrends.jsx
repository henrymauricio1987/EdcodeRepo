import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaBrain, FaNetworkWired, FaShieldAlt, FaInfinity } from 'react-icons/fa';

const Container = styled.section`
  padding: 3rem 1rem;
  max-width: 1000px;
  margin: 0 auto;
  background: linear-gradient(135deg, ${props => props.theme.colors.background} 0%, #f0f8ff 100%);
`;

const Title = styled(motion.h2)`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 3rem;
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
  padding: 2rem;
  border-radius: 12px;
  box-shadow: 0 4px 6px rgba(0, 0, 0, 0.1);
  border-left: 4px solid ${props => props.theme.colors.secondary};
  transition: transform 0.3s ease, box-shadow 0.3s ease;

  &:hover {
    transform: translateY(-5px);
    box-shadow: 0 8px 15px rgba(0, 0, 0, 0.15);
  }
`;

const TrendIcon = styled.div`
  font-size: 2.5rem;
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 1rem;
`;

const TrendTitle = styled.h3`
  color: ${props => props.theme.colors.primary};
  margin-bottom: 1rem;
  font-size: 1.3rem;
`;

const TrendDescription = styled.p`
  color: ${props => props.theme.colors.text};
  line-height: 1.6;
  margin-bottom: 1rem;
`;

const TrendImpact = styled.div`
  background: ${props => props.theme.colors.lightGray};
  padding: 1rem;
  border-radius: 8px;
  margin-top: 1rem;
`;

const ImpactTitle = styled.h4`
  color: ${props => props.theme.colors.secondary};
  margin-bottom: 0.5rem;
  font-size: 1rem;
`;

const ImpactList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
`;

const ImpactItem = styled.li`
  color: ${props => props.theme.colors.text};
  margin-bottom: 0.25rem;
  font-size: 0.9rem;
  padding-left: 1rem;
  position: relative;

  &:before {
    content: '→';
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
      "Personalized adaptive learning",
      "Automatic formative assessment",
      "24/7 tutorial support",
      "Predictive performance analysis"
    ]
  },
  {
    icon: <FaNetworkWired />,
    title: "Connected Learning",
    description: "Artificial neural networks and deep learning will revolutionize how we process and understand complex information.",
    impacts: [
      "Massive data processing",
      "Advanced pattern recognition",
      "Cognitive task automation",
      "New knowledge paradigms"
    ]
  },
  {
    icon: <FaShieldAlt />,
    title: "Cybersecurity and Digital Ethics",
    description: "Training in cybersecurity and digital ethics becomes essential in an increasingly connected and vulnerable world.",
    impacts: [
      "Data privacy awareness",
      "Safe online practices",
      "Ethical thinking in technology",
      "Digital resilience"
    ]
  },
  {
    icon: <FaInfinity />,
    title: "Educational Metaverse",
    description: "Immersive virtual spaces where learning transcends physical limitations, enabling unlimited educational experiences.",
    impacts: [
      "Immersive learning experiences",
      "Real-time global collaboration",
      "Impossible scenario simulations",
      "Universal education accessibility"
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
              <ImpactTitle>Impacto Educativo:</ImpactTitle>
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