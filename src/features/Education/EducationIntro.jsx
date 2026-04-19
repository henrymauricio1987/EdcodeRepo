import styled from 'styled-components';
import { motion } from 'framer-motion';

const SectionContainer = styled.section`
  padding: 4rem 2rem;
  width: 100%;
  box-sizing: border-box;
  background: linear-gradient(135deg, #f8f9fc 0%, #eef2f7 100%);

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2.5rem 1rem;
  }
`;
//
const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 3.5rem;
`;

const SectionTitle = styled(motion.h2)`
  font-size: 2.75rem;
  font-weight: 700;
  color: #1a1f2e;
  margin-bottom: 1rem;
  letter-spacing: -0.5px;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const SectionSubtitle = styled(motion.p)`
  font-size: 1.15rem;
  color: #5a6577;
  line-height: 1.7;
  margin: 0;
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const CardsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(3, 1fr);
  gap: 1.75rem;
  max-width: 1200px;
  margin: 0 auto;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }
  
  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1.5rem;
  }
`;

const Card = styled(motion.div)`
  background: ${props => props.bgColor || '#ffffff'};
  border-radius: 16px;
  padding: 1.75rem;
  box-shadow: 0 2px 16px rgba(0, 0, 0, 0.06);
  transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
  cursor: pointer;
  display: flex;
  flex-direction: column;
  
  &:hover {
    transform: translateY(-6px);
    box-shadow: 0 12px 32px rgba(0, 0, 0, 0.12);
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 12px;
  overflow: hidden;
  margin-bottom: 1.25rem;
  position: relative;
  
  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
    transition: transform 0.4s ease;
  }
  
  ${Card}:hover & img {
    transform: scale(1.05);
  }
`;

const CardIconBadge = styled.div`
  position: absolute;
  bottom: 0.75rem;
  right: 0.75rem;
  width: 40px;
  height: 40px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.25rem;
  box-shadow: 0 2px 8px rgba(0, 0, 0, 0.1);
`;

const CardTitle = styled.h3`
  font-size: 1.25rem;
  font-weight: 600;
  color: #1a1f2e;
  margin-bottom: 0.6rem;
`;

const CardDescription = styled.p`
  font-size: 0.9rem;
  color: #5a6577;
  line-height: 1.65;
  margin: 0;
  flex-grow: 1;
`;

const CategoryTag = styled.span`
  display: inline-flex;
  align-items: center;
  gap: 0.4rem;
  padding: 0.35rem 0.75rem;
  background: rgba(30, 42, 56, 0.06);
  color: #1E2A38;
  border-radius: 20px;
  font-size: 0.7rem;
  font-weight: 600;
  margin-top: 1rem;
  text-transform: uppercase;
  letter-spacing: 0.8px;
  width: fit-content;
`;

// 6 Cards data - 2 rows of 3
const cardData = [
  // Row 1
  {
    id: 1,
    title: "Technology",
    description: "Explore the latest technological innovations and discover how technology is transforming our world.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=500&h=350&fit=crop",
    icon: "💡",
    bgColor: "#E3F2FD",
    tag: "Technology"
  },
  {
    id: 2,
    title: "Science",
    description: "Experience the scientific method and perform fascinating experiments in physics, chemistry, and biology.",
    image: "https://images.unsplash.com/photo-1532094349884-543bc11b234d?w=500&h=350&fit=crop",
    icon: "🔬",
    bgColor: "#F3E5F5",
    tag: "Science"
  },
  {
    id: 3,
    title: "Robotics",
    description: "Build and program intelligent robots. Learn about sensors, actuators, and control systems.",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=500&h=350&fit=crop",
    icon: "🤖",
    bgColor: "#E8F5E9",
    tag: "Robotics"
  },
  // Row 2
  {
    id: 4,
    title: "Education",
    description: "Innovative teaching methods that make learning an interactive and fun experience.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=500&h=350&fit=crop",
    icon: "📚",
    bgColor: "#FFF3E0",
    tag: "Education"
  },
  {
    id: 5,
    title: "Programming",
    description: "Learn to program with visual and text-based languages. Create games, apps, and interactive animations.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=500&h=350&fit=crop",
    icon: "💻",
    bgColor: "#FCE4EC",
    tag: "Programming"
  },
  {
    id: 6,
    title: "3D Printing",
    description: "Design three-dimensional objects and bring them to life. Additive manufacturing within your creative reach.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=500&h=350&fit=crop",
    icon: "🖨️",
    bgColor: "#E0F7FA",
    tag: "3D Printing"
  }
];

const containerVariants = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.12
    }
  }
};

const cardVariants = {
  hidden: { opacity: 0, y: 25 },
  visible: {
    opacity: 1,
    y: 0,
    transition: {
      duration: 0.5,
      ease: "easeOut"
    }
  }
};

const EducationIntro = () => {
  return (
    <SectionContainer>
      <SectionHeader>
        <SectionTitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          🌟 Explore the STEM World
        </SectionTitle>

        <SectionSubtitle
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6, delay: 0.15 }}
        >
          Discover a world of possibilities where technology, science, and creativity
          come together to inspire the next generation of innovators.
        </SectionSubtitle>
      </SectionHeader>

      <CardsGrid as={motion.div} variants={containerVariants} initial="hidden" animate="visible">
        {cardData.map((card) => (
          <Card
            key={card.id}
            bgColor={card.bgColor}
            variants={cardVariants}
            whileHover={{ scale: 1.02 }}
          >
            <CardImageWrapper>
              <img src={card.image} alt={card.title} loading="lazy" />
              <CardIconBadge>{card.icon}</CardIconBadge>
            </CardImageWrapper>

            <CardTitle>{card.title}</CardTitle>

            <CardDescription>
              {card.description}
            </CardDescription>

            <CategoryTag>✦ {card.tag}</CategoryTag>
          </Card>
        ))}
      </CardsGrid>
    </SectionContainer>
  );
};

export default EducationIntro;
