import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';
import { FaArrowRight, FaGraduationCap, FaLightbulb, FaRobot, FaLaptopCode, FaBrain } from 'react-icons/fa';

// Google Fonts import
const FontStyles = styled.style`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
`;

const HomeContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

// Hero Section with Background Image
const HeroSection = styled.section`
  position: relative;
  min-height: 90vh;
  display: flex;
  align-items: center;
  justify-content: center;
  background: linear-gradient(135deg, rgba(30, 42, 56, 0.92) 0%, rgba(0, 168, 232, 0.88) 100%),
              url('https://images.unsplash.com/photo-1581092921461-eab62e97a780?w=1920&q=80') center/cover;
  padding: 6rem 2rem;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,%3Csvg width=\"60\" height=\"60\" viewBox=\"0 0 60 60\" xmlns=\"http://www.w3.org/2000/svg\"%3E%3Cg fill=\"none\" fill-rule=\"evenodd\"%3E%3Cg fill=\"%23ffffff\" fill-opacity=\"0.05\"%3E%3Cpath d=\"M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z\"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    pointer-events: none;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    min-height: 80vh;
    padding: 4rem 1.5rem;
  }
`;

const HeroContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 900px;
  text-align: center;
`;

const HeroTitle = styled(motion.h1)`
  font-family: 'Poppins', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.15;
  text-shadow: 0 4px 30px rgba(0, 0, 0, 0.3);

  span {
    color: #FFD23F;
  }

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    font-size: 2.75rem;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 2rem;
  }
`;

const HeroSubtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.35rem;
  color: rgba(255, 255, 255, 0.9);
  margin-bottom: 2.5rem;
  max-width: 700px;
  margin-left: auto;
  margin-right: auto;
  line-height: 1.7;
  font-weight: 400;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.1rem;
  }
`;

const CTAButton = styled(motion(Link))`
  display: inline-flex;
  align-items: center;
  gap: 0.75rem;
  background: #FFD23F;
  color: #1E2A38;
  padding: 1.1rem 2.5rem;
  border-radius: 50px;
  text-decoration: none;
  font-weight: 600;
  font-size: 1.05rem;
  font-family: 'Poppins', sans-serif;
  transition: all 0.3s cubic-bezier(0.4, 0, 0.2, 1);
  box-shadow: 0 8px 30px rgba(255, 210, 63, 0.4);

  &:hover {
    transform: translateY(-4px) scale(1.02);
    box-shadow: 0 15px 40px rgba(255, 210, 63, 0.5);
    background: #FFE566;
  }

  svg {
    transition: transform 0.3s ease;
  }

  &:hover svg {
    transform: translateX(5px);
  }
`;

// Section with alternating layout
const Section = styled.section`
  padding: 6rem 2rem;
  background: ${props => props.$dark ? '#1E2A38' : '#F9FAFB'};
  position: relative;
  overflow: hidden;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 4rem 1.5rem;
  }
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
  display: flex;
  align-items: center;
  gap: 4rem;
  flex-direction: ${props => props.$reverse ? 'row-reverse' : 'row'};

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    flex-direction: column;
    gap: 3rem;
  }
`;

const SectionImageWrapper = styled(motion.div)`
  flex: 1;
  position: relative;
  
  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
  }
`;

const SectionImage = styled.img`
  width: 100%;
  height: 400px;
  object-fit: cover;
  border-radius: 24px;
  box-shadow: 0 25px 60px rgba(0, 0, 0, 0.25);

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    height: 280px;
  }
`;

const ImageAccent = styled.div`
  position: absolute;
  width: 100%;
  height: 100%;
  top: 20px;
  left: 20px;
  border: 4px solid #FFD23F;
  border-radius: 24px;
  z-index: -1;
`;

const SectionContent = styled(motion.div)`
  flex: 1;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    width: 100%;
    text-align: center;
  }
`;

const SectionTag = styled.span`
  display: inline-block;
  background: ${props => props.$dark ? 'rgba(255, 210, 63, 0.2)' : 'rgba(0, 168, 232, 0.15)'};
  color: ${props => props.$dark ? '#FFD23F' : '#00A8E8'};
  padding: 0.5rem 1rem;
  border-radius: 20px;
  font-size: 0.85rem;
  font-weight: 600;
  font-family: 'Poppins', sans-serif;
  margin-bottom: 1.25rem;
  text-transform: uppercase;
  letter-spacing: 1px;
`;

const SectionTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: ${props => props.$dark ? '#fff' : '#1E2A38'};
  margin-bottom: 1.25rem;
  line-height: 1.2;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.85rem;
  }
`;

const SectionDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: ${props => props.$dark ? 'rgba(255, 255, 255, 0.8)' : 'rgba(30, 42, 56, 0.8)'};
  line-height: 1.8;
  margin-bottom: 0;
`;

// Features Grid Section
const FeaturesSection = styled.section`
  padding: 6rem 2rem;
  background: linear-gradient(180deg, #F9FAFB 0%, #E8F4FD 100%);

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 4rem 1.5rem;
  }
`;

const SectionHeader = styled.div`
  text-align: center;
  max-width: 700px;
  margin: 0 auto 4rem;
`;

const SectionHeaderTitle = styled.h2`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1E2A38;
  margin-bottom: 1rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.85rem;
  }
`;

const SectionHeaderDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: rgba(30, 42, 56, 0.7);
  line-height: 1.7;
  margin-bottom: 0;
`;

const FeaturesGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
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

const FeatureCard = styled(motion.div)`
  background: #fff;
  padding: 2.5rem 2rem;
  border-radius: 24px;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 5px;
    background: linear-gradient(90deg, #00A8E8, #4CAF50);
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.15);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const FeatureIconWrapper = styled.div`
  width: 80px;
  height: 80px;
  background: linear-gradient(135deg, rgba(0, 168, 232, 0.15) 0%, rgba(76, 175, 80, 0.15) 100%);
  border-radius: 20px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 1.5rem;
  font-size: 2rem;
  color: #00A8E8;
  transition: all 0.3s ease;
  
  ${FeatureCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: linear-gradient(135deg, rgba(0, 168, 232, 0.25) 0%, rgba(76, 175, 80, 0.25) 100%);
  }
`;

const FeatureTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  color: #1E2A38;
  margin-bottom: 0.75rem;
  font-size: 1.2rem;
  font-weight: 600;
`;

const FeatureDescription = styled.p`
  font-family: 'Inter', sans-serif;
  color: rgba(30, 42, 56, 0.7);
  line-height: 1.6;
  font-size: 0.95rem;
  margin-bottom: 0;
`;

// Stats Section
const StatsSection = styled.section`
  padding: 5rem 2rem;
  background: linear-gradient(135deg, #00A8E8 0%, #4CAF50 100%);
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;
  text-align: center;

  @media (max-width: ${props => props.theme.breakpoints.tablet}) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 2.5rem;
  }
`;

const StatItem = styled(motion.div)``;

const StatNumber = styled.div`
  font-family: 'Poppins', sans-serif;
  font-size: 3.5rem;
  font-weight: 700;
  color: #fff;
  line-height: 1;
  margin-bottom: 0.5rem;
  text-shadow: 0 4px 20px rgba(0, 0, 0, 0.2);
`;

const StatLabel = styled.div`
  font-family: 'Inter', sans-serif;
  font-size: 1rem;
  color: rgba(255, 255, 255, 0.9);
  font-weight: 500;
`;

// Footer
const FooterSection = styled.footer`
  padding: 3rem 2rem;
  background: #1E2A38;
  text-align: center;
`;

const FooterText = styled.p`
  font-family: 'Inter', sans-serif;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.95rem;
  margin-bottom: 0;

  span {
    color: #FFD23F;
  }
`;

const features = [
  {
    icon: <FaGraduationCap />,
    title: "Pedagogical Methodologies",
    description: "Explore innovative approaches such as teaching for understanding, project-based learning, and thinking routines.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=800&q=80"
  },
  {
    icon: <FaLightbulb />,
    title: "Educational Resources",
    description: "Access learning platforms like Codecademy, Scratch, Khan Academy and other digital tools.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=800&q=80"
  },
  {
    icon: <FaRobot />,
    title: "Educational Technology",
    description: "Discover how robotics, augmented reality, and app development transform modern learning.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
  },
  {
    icon: <FaLaptopCode />,
    title: "E-Learning",
    description: "Learn using the best digital resources, where education comes alive, no boring text, no flat content, just interactive and engaging learning experiences.",
    image: "https://images.unsplash.com/photo-1631549916768-4119b2e5f926?w=800&q=80"
  }
];

const stats = [
  { number: "10K+", label: "Students" },
  { number: "500+", label: "Resources" },
  { number: "50+", label: "Schools" },
  { number: "100+", label: "Projects" }
];

function Home() {
  return (
    <HomeContainer>
      <FontStyles />

      {/* Hero Section */}
      <HeroSection>
        <HeroContent>
          <HeroTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            The Importance of <span>Computational Thinking</span>
          </HeroTitle>

          <HeroSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            In the current digital era, computational thinking becomes an essential skill
            for children and adolescents. Explore modern pedagogical methodologies that integrate technology and education.
          </HeroSubtitle>

          <CTAButton
            to="/about"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.4, ease: "easeOut" }}
          >
            Explore Methodologies <FaArrowRight />
          </CTAButton>
        </HeroContent>
      </HeroSection>

      {/* Feature Cards Grid */}
      <FeaturesSection>
        <SectionHeader>
          <SectionHeaderTitle>Discover Our Focus Areas</SectionHeaderTitle>
          <SectionHeaderDescription>
            Empowering the next generation with essential digital skills and innovative learning approaches
          </SectionHeaderDescription>
        </SectionHeader>

        <FeaturesGrid>
          {features.map((feature, index) => (
            <FeatureCard
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.1 }}
            >
              <FeatureIconWrapper>{feature.icon}</FeatureIconWrapper>
              <FeatureTitle>{feature.title}</FeatureTitle>
              <FeatureDescription>{feature.description}</FeatureDescription>
            </FeatureCard>
          ))}
        </FeaturesGrid>
      </FeaturesSection>

      {/* Alternating Content Sections */}
      <Section>
        <SectionContainer>
          <SectionImageWrapper
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionImage
              src="https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=800&q=80"
              alt="Children learning robotics"
            />
            <ImageAccent />
          </SectionImageWrapper>

          <SectionContent
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionTag>Innovation</SectionTag>
            <SectionTitle>Learn Through Innovation</SectionTitle>
            <SectionDescription>
              Discover how robotics, augmented reality, and app development transform modern learning.
              Our cutting-edge approach combines hands-on activities with digital tools to create
              immersive educational experiences that inspire curiosity and creativity in young minds.
            </SectionDescription>
          </SectionContent>
        </SectionContainer>
      </Section>

      <Section $dark>
        <SectionContainer $reverse>
          <SectionImageWrapper
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionImage
              src="https://images.unsplash.com/photo-1503676260728-1c00da094a0b?w=800&q=80"
              alt="Digital learning platforms"
            />
            <ImageAccent />
          </SectionImageWrapper>

          <SectionContent
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionTag $dark>Engagement</SectionTag>
            <SectionTitle $dark>Interactive E-Learning</SectionTitle>
            <SectionDescription $dark>
              Learn using the best digital resources, where education comes alive. No boring text,
              no flat content — just interactive and engaging learning experiences that adapt to
              each student's unique learning style and pace.
            </SectionDescription>
          </SectionContent>
        </SectionContainer>
      </Section>

      <Section>
        <SectionContainer>
          <SectionImageWrapper
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8 }}
          >
            <SectionImage
              src="https://images.unsplash.com/photo-1581092918056-0c4c3acd3789?w=800&q=80"
              alt="Children learning robotics and STEM"
            />
            <ImageAccent />
          </SectionImageWrapper>

          <SectionContent
            initial={{ opacity: 0, x: 50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: 0.2 }}
          >
            <SectionTag>Future</SectionTag>
            <SectionTitle>Building Tomorrow's Skills</SectionTitle>
            <SectionDescription>
              Computational thinking is the foundation of future innovation. Through project-based
              learning and thinking routines, we prepare children and adolescents to become
              problem-solvers and creators in an increasingly digital world.
            </SectionDescription>
          </SectionContent>
        </SectionContainer>
      </Section>

      {/* Stats Section */}
      <StatsSection>
        <StatsGrid>
          {stats.map((stat, index) => (
            <StatItem
              key={index}
              initial={{ opacity: 0, scale: 0.8 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: index * 0.15 }}
            >
              <StatNumber>{stat.number}</StatNumber>
              <StatLabel>{stat.label}</StatLabel>
            </StatItem>
          ))}
        </StatsGrid>
      </StatsSection>

      {/* Footer */}
      <FooterSection>
        <FooterText>
          © 2025 <span>Digital Education and Computational Thinking</span>. Made for the education of the future.
        </FooterText>
      </FooterSection>
    </HomeContainer>
  );
}

export default Home;
