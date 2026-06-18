import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import {
  FaBrain,
  FaLightbulb,
  FaProjectDiagram,
  FaSyncAlt,
  FaSearch,
  FaBullseye,
  FaGlobe,
  FaNetworkWired,
  FaCogs,
  FaChevronDown,
  FaChevronUp
} from 'react-icons/fa';

// Google Fonts import
const FontStyles = styled.style`
  @import url('https://fonts.googleapis.com/css2?family=Poppins:wght@300;400;500;600;700&family=Inter:wght@300;400;500;600;700&display=swap');
`;

const PageContainer = styled.div`
  width: 100%;
  max-width: 100%;
  margin: 0;
  padding: 0;
  box-sizing: border-box;
  overflow-x: hidden;
  font-family: 'Inter', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif;
`;

// Hero/Header Section
const HeaderSection = styled.section`
  position: relative;
  padding: 6rem 2rem 4rem;
  background: linear-gradient(135deg, #1E2A38 0%, #00A8E8 100%);
  text-align: center;
  overflow: hidden;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,%3Csvg width="60" height="60" viewBox="0 0 60 60" xmlns="http://www.w3.org/2000/svg"%3E%3Cg fill="none" fill-rule="evenodd"%3E%3Cg fill="%23ffffff" fill-opacity="0.05"%3E%3Cpath d="M36 34v-4h-2v4h-4v2h4v4h2v-4h4v-2h-4zm0-30V0h-2v4h-4v2h4v4h2V6h4V4h-4zM6 34v-4H4v4H0v2h4v4h2v-4h4v-2H6zM6 4V0H4v4H0v2h4v4h2V6h4V4H6z"/%3E%3C/g%3E%3C/g%3E%3C/svg%3E');
    pointer-events: none;
  }

  @media (max-width: 768px) {
    padding: 4rem 1.5rem 3rem;
  }
`;

const HeaderContent = styled.div`
  position: relative;
  z-index: 2;
  max-width: 800px;
  margin: 0 auto;
`;

const HeaderTitle = styled(motion.h1)`
  font-family: 'Poppins', sans-serif;
  font-size: 3rem;
  font-weight: 700;
  color: #fff;
  margin-bottom: 1.5rem;
  line-height: 1.2;

  span {
    color: #FFD23F;
  }

  @media (max-width: 768px) {
    font-size: 2rem;
  }
`;

const HeaderSubtitle = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.25rem;
  color: rgba(255, 255, 255, 0.9);
  line-height: 1.7;
  max-width: 600px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Section Styles
const Section = styled.section`
  padding: 5rem 2rem;
  background: ${props => props.$light ? '#F9FAFB' : '#fff'};

  @media (max-width: 768px) {
    padding: 3rem 1.5rem;
  }
`;

const SectionContainer = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const SectionHeader = styled.div`
  text-align: center;
  margin-bottom: 3.5rem;
`;

const SectionTitle = styled(motion.h2)`
  font-family: 'Poppins', sans-serif;
  font-size: 2.5rem;
  font-weight: 700;
  color: #1E2A38;
  margin-bottom: 1rem;

  @media (max-width: 768px) {
    font-size: 1.75rem;
  }
`;

const SectionDescription = styled(motion.p)`
  font-family: 'Inter', sans-serif;
  font-size: 1.1rem;
  color: rgba(30, 42, 56, 0.7);
  line-height: 1.7;
  max-width: 700px;
  margin: 0 auto;

  @media (max-width: 768px) {
    font-size: 1rem;
  }
`;

// Card Grid - 2 columns for better visual balance
const CardGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 2rem;
  max-width: 1000px;
  margin: 0 auto;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

// Methodology Card
const MethodCard = styled(motion.div)`
  background: ${props => props.$bgColor || '#fff'};
  border-radius: 24px;
  padding: 1.75rem;
  box-shadow: 0 10px 40px rgba(0, 0, 0, 0.1);
  cursor: pointer;
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;
  min-height: 380px;
  display: flex;
  flex-direction: column;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 6px;
    background: linear-gradient(90deg, ${props => props.$accentColor || '#00A8E8'}, ${props => props.$accentColor2 || '#4CAF50'});
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.4s ease;
  }

  &:hover {
    transform: translateY(-12px);
    box-shadow: 0 25px 60px rgba(0, 0, 0, 0.2);

    &::before {
      transform: scaleX(1);
    }
  }
`;

const CardImageWrapper = styled.div`
  width: 100%;
  height: 140px;
  border-radius: 16px;
  overflow: hidden;
  margin-bottom: 1.25rem;
  position: relative;
  flex-shrink: 0;
`;

const CardImage = styled.img`
  width: 100%;
  height: 100%;
  object-fit: cover;
  transition: transform 0.4s ease;

  ${MethodCard}:hover & {
    transform: scale(1.1);
  }
`;

const CardIconWrapper = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 48px;
  height: 48px;
  background: rgba(255, 255, 255, 0.95);
  border-radius: 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: ${props => props.$color || '#00A8E8'};
  box-shadow: 0 4px 15px rgba(0, 0, 0, 0.15);
`;

const CardTitle = styled.h3`
  font-family: 'Poppins', sans-serif;
  font-size: 1.35rem;
  font-weight: 600;
  color: #1E2A38;
  margin-bottom: 0.75rem;
`;

const CardDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: rgba(30, 42, 56, 0.8);
  line-height: 1.6;
  margin-bottom: 1rem;
  flex-grow: 1;
`;

const ExpandButton = styled.button`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  background: none;
  border: none;
  color: ${props => props.$color || '#00A8E8'};
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  font-weight: 600;
  cursor: pointer;
  padding: 0;
  transition: all 0.2s ease;

  &:hover {
    color: #1E2A38;
  }
`;

// Expanded Content
const ExpandedContent = styled(motion.div)`
  background: rgba(255, 255, 255, 0.6);
  border-radius: 16px;
  padding: 1.5rem;
  margin-top: 1rem;
`;

const ExpandedText = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.95rem;
  color: rgba(30, 42, 56, 0.85);
  line-height: 1.7;
`;

// Protocol Card
const ProtocolCard = styled(motion.div)`
  background: linear-gradient(135deg, ${props => props.$bgColor || '#fff'} 0%, ${props => props.$bgColor2 || '#fff'} 100%);
  border-radius: 20px;
  padding: 2rem;
  box-shadow: 0 8px 30px rgba(0, 0, 0, 0.08);
  transition: all 0.4s cubic-bezier(0.4, 0, 0.2, 1);
  position: relative;
  overflow: hidden;

  &::after {
    content: '';
    position: absolute;
    bottom: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${props => props.$accentColor || '#00A8E8'};
  }

  &:hover {
    transform: translateY(-8px) scale(1.02);
    box-shadow: 0 20px 50px rgba(0, 0, 0, 0.15);
  }
`;

const ProtocolNumber = styled.div`
  position: absolute;
  top: -10px;
  right: 20px;
  font-family: 'Poppins', sans-serif;
  font-size: 5rem;
  font-weight: 700;
  color: rgba(30, 42, 56, 0.05);
  line-height: 1;
`;

const ProtocolIcon = styled.div`
  width: 56px;
  height: 56px;
  background: linear-gradient(135deg, ${props => props.$color || '#00A8E8'} 0%, ${props => props.$color2 || '#4CAF50'} 100%);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 1.5rem;
  color: #fff;
  margin-bottom: 1.25rem;
`;

const ProtocolTitle = styled.h4`
  font-family: 'Poppins', sans-serif;
  font-size: 1.15rem;
  font-weight: 600;
  color: #1E2A38;
  margin-bottom: 0.75rem;
`;

const ProtocolDescription = styled.p`
  font-family: 'Inter', sans-serif;
  font-size: 0.9rem;
  color: rgba(30, 42, 56, 0.75);
  line-height: 1.6;
  margin-bottom: 0;
`;

// Protocols Grid (2 columns on desktop, 1 on mobile)
const ProtocolsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 1.5rem;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
  }
`;

// Footer
const FooterSection = styled.footer`
  padding: 2rem;
  background: #1E2A38;
  text-align: center;
`;

const FooterText = styled.p`
  font-family: 'Inter', sans-serif;
  color: rgba(255, 255, 255, 0.7);
  font-size: 0.9rem;
  margin-bottom: 0;

  span {
    color: #FFD23F;
  }
`;

// Data for Pedagogical Methodologies
const methodologies = [
  {
    id: 1,
    title: "Teaching for Understanding",
    description: "A model focused on deep and meaningful learning, where students not only memorize information but understand and apply it in real contexts.",
    details: "This pedagogical approach is based on constructivist theory, promoting problem-solving and critical thinking. Students develop a deeper comprehension of concepts by connecting new knowledge to existing understanding, enabling them to transfer skills across different contexts and challenges.",
    image: "https://images.unsplash.com/photo-1516321318423-f06f85e504b3?w=600&q=80",
    icon: <FaBrain />,
    iconColor: "#00A8E8",
    bgColor: "#E3F2FD",
    accentColor: "#00A8E8",
    accentColor2: "#0288D1"
  },
  {
    id: 2,
    title: "Project Zero",
    description: "An initiative that transforms education through collaborative projects that integrate technology and creativity.",
    details: "Students work in teams to solve real problems, developing transversal skills such as computational thinking. This framework encourages inquiry, visible thinking, and global citizenship, preparing learners for the challenges of the 21st century.",
    image: "https://images.unsplash.com/photo-1580582932707-520aed937b7b?w=600&q=80",
    icon: <FaLightbulb />,
    iconColor: "#FFD23F",
    bgColor: "#FFF8E1",
    accentColor: "#FFD23F",
    accentColor2: "#FFA000"
  },
  {
    id: 3,
    title: "Project-Based Learning",
    description: "A methodology where learning centers on the completion of practical and meaningful projects.",
    details: "Students research, plan, and execute projects that integrate knowledge from multiple disciplines. This hands-on approach fosters collaboration, creativity, and critical thinking while connecting academic concepts to real-world applications.",
    image: "https://images.unsplash.com/photo-1485827404703-89b55fcc595e?w=600&q=80",
    icon: <FaProjectDiagram />,
    iconColor: "#4CAF50",
    bgColor: "#E8F5E9",
    accentColor: "#4CAF50",
    accentColor2: "#2E7D32"
  },
  {
    id: 4,
    title: "Thinking Routines",
    description: "Structured techniques to develop critical and metacognitive thinking in students.",
    details: "These routines help students analyze information, make connections, and reflect on their own learning. By practicing regular thinking patterns, learners become more self-aware and capable of tackling complex problems independently.",
    image: "https://images.unsplash.com/photo-1561557944-6e7860d1a7eb?w=600&q=80",
    icon: <FaSyncAlt />,
    iconColor: "#9C27B0",
    bgColor: "#F3E5F5",
    accentColor: "#9C27B0",
    accentColor2: "#7B1FA2"
  }
];

// Data for Curricular Integration Protocols
const protocols = [
  {
    id: 1,
    title: "Identification of Computational Thinking Concepts",
    description: "Recognizing and mapping computational thinking elements like decomposition, pattern recognition, abstraction, and algorithms within existing curriculum.",
    icon: <FaSearch />,
    color: "#00A8E8",
    color2: "#0288D1",
    bgColor: "#E1F5FE",
    accentColor: "#00A8E8"
  },
  {
    id: 2,
    title: "Establishment of Clear Shared Objectives",
    description: "Defining measurable learning goals that align computational skills with curricular standards and student outcomes.",
    icon: <FaBullseye />,
    color: "#FF5722",
    color2: "#E64A19",
    bgColor: "#FBE9E7",
    accentColor: "#FF5722"
  },
  {
    id: 3,
    title: "Focus on Transversal Skills",
    description: "Developing skills that span multiple disciplines including problem-solving, collaboration, communication, and digital literacy.",
    icon: <FaGlobe />,
    color: "#4CAF50",
    color2: "#388E3C",
    bgColor: "#E8F5E9",
    accentColor: "#4CAF50"
  },
  {
    id: 4,
    title: "Promotion of Curricular Synergies",
    description: "Creating connections between different subject areas through integrated projects and collaborative teaching approaches.",
    icon: <FaNetworkWired />,
    color: "#9C27B0",
    color2: "#7B1FA2",
    bgColor: "#F3E5F5",
    accentColor: "#9C27B0"
  },
  {
    id: 5,
    title: "Development of Interdisciplinary Projects",
    description: "Designing projects that combine multiple disciplines to solve complex, real-world problems creatively.",
    icon: <FaCogs />,
    color: "#607D8B",
    color2: "#455A64",
    bgColor: "#ECEFF1",
    accentColor: "#607D8B"
  }
];

const Methodologies = () => {
  const [expandedMethodology, setExpandedMethodology] = useState(null);
  const [expandedProtocol, setExpandedProtocol] = useState(null);

  const toggleMethodology = (id) => {
    setExpandedMethodology(expandedMethodology === id ? null : id);
    setExpandedProtocol(null);
  };

  const toggleProtocol = (id) => {
    setExpandedProtocol(expandedProtocol === id ? null : id);
    setExpandedMethodology(null);
  };

  return (
    <PageContainer>
      <FontStyles />

      {/* Header Section */}
      <HeaderSection>
        <HeaderContent>
          <HeaderTitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, ease: "easeOut" }}
          >
            Modern Pedagogical <span>Methodologies</span>
          </HeaderTitle>
          <HeaderSubtitle
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 0.2, ease: "easeOut" }}
          >
            Explore innovative approaches to computational thinking and STEM education
            that empower children and adolescents to become creative problem-solvers.
          </HeaderSubtitle>
        </HeaderContent>
      </HeaderSection>

      {/* Pedagogical Methodologies Section */}
      <Section $light>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Pedagogical Methodologies
            </SectionTitle>
            <SectionDescription
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Discover proven educational frameworks that transform how students learn
              and engage with technology, robotics, and computational thinking.
            </SectionDescription>
          </SectionHeader>

          <CardGrid>
            {methodologies.map((method, index) => (
              <MethodCard
                key={method.id}
                $bgColor={method.bgColor}
                $accentColor={method.accentColor}
                $accentColor2={method.accentColor2}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                onClick={() => toggleMethodology(method.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <CardImageWrapper>
                  <CardImage src={method.image} alt={method.title} />
                  <CardIconWrapper $color={method.iconColor}>
                    {method.icon}
                  </CardIconWrapper>
                </CardImageWrapper>
                <CardTitle>{method.title}</CardTitle>
                <CardDescription>{method.description}</CardDescription>
                <ExpandButton $color={method.accentColor}>
                  {expandedMethodology === method.id ? (
                    <>Less <FaChevronUp /></>
                  ) : (
                    <>Learn More <FaChevronDown /></>
                  )}
                </ExpandButton>

                <AnimatePresence>
                  {expandedMethodology === method.id && (
                    <ExpandedContent
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExpandedText>{method.details}</ExpandedText>
                    </ExpandedContent>
                  )}
                </AnimatePresence>
              </MethodCard>
            ))}
          </CardGrid>
        </SectionContainer>
      </Section>

      {/* Curricular Integration Protocols Section */}
      <Section>
        <SectionContainer>
          <SectionHeader>
            <SectionTitle
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6 }}
            >
              Curricular Integration Protocols
            </SectionTitle>
            <SectionDescription
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.6, delay: 0.1 }}
            >
              Essential frameworks for seamlessly incorporating computational thinking
              and STEM education into existing curriculum structures.
            </SectionDescription>
          </SectionHeader>

          <ProtocolsGrid>
            {protocols.map((protocol, index) => (
              <ProtocolCard
                key={protocol.id}
                $bgColor={protocol.bgColor}
                $accentColor={protocol.accentColor}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                onClick={() => toggleProtocol(protocol.id)}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <ProtocolNumber>{protocol.id}</ProtocolNumber>
                <ProtocolIcon $color={protocol.color} $color2={protocol.color2}>
                  {protocol.icon}
                </ProtocolIcon>
                <ProtocolTitle>{protocol.title}</ProtocolTitle>
                <ProtocolDescription>{protocol.description}</ProtocolDescription>

                <AnimatePresence>
                  {expandedProtocol === protocol.id && (
                    <ExpandedContent
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: 'auto' }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                    >
                      <ExpandedText>
                        This protocol enables educators to systematically integrate computational thinking
                        concepts into their teaching practice, ensuring students develop essential 21st-century
                        skills alongside traditional academic content.
                      </ExpandedText>
                    </ExpandedContent>
                  )}
                </AnimatePresence>

                {expandedProtocol !== protocol.id && (
                  <ExpandButton
                    $color={protocol.color}
                    style={{ marginTop: '1rem' }}
                    onClick={(e) => {
                      e.stopPropagation();
                      toggleProtocol(protocol.id);
                    }}
                  >
                    Learn More <FaChevronDown />
                  </ExpandButton>
                )}
              </ProtocolCard>
            ))}
          </ProtocolsGrid>
        </SectionContainer>
      </Section>

      {/* Footer */}
      <FooterSection>
        <FooterText>
          © 2025 <span>Digital Education and Computational Thinking</span>. Empowering the next generation.
        </FooterText>
      </FooterSection>
    </PageContainer>
  );
};

export default Methodologies;
