import { useState } from 'react';
import styled from 'styled-components';
import { motion, AnimatePresence } from 'framer-motion';
import Card from '../../shared/Card';
import { methodologies } from '../../data';

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

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(320px, 1fr));
  gap: 2rem;
  margin-bottom: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ExpandedCard = styled(motion.div)`
  background: ${props => props.theme.colors.white};
  border-radius: 12px;
  padding: 2rem;
  box-shadow: 0 4px 12px rgba(0, 0, 0, 0.08);
  margin-top: 2rem;
  border: 1px solid ${props => props.theme.colors.lightGray};
  border-left: 3px solid ${props => props.theme.colors.primary};
`;

const ExpandedTitle = styled.h3`
  color: ${props => props.theme.colors.text};
  margin-bottom: 1rem;
  font-size: 1.25rem;
  font-weight: 500;
`;

const ExpandedDescription = styled.p`
  line-height: 1.6;
  color: ${props => props.theme.colors.text};
  opacity: 0.9;
  font-size: 0.9375rem;
`;

const Methodologies = () => {
  const [expandedId, setExpandedId] = useState(null);

  const handleCardClick = (id) => {
    setExpandedId(expandedId === id ? null : id);
  };

  const expandedMethodology = methodologies.find(m => m.id === expandedId);

  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Modern Pedagogical Methodologies
      </Title>

      <Grid>
        {methodologies.map((methodology, index) => (
          <motion.div
            key={methodology.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <Card
              title={methodology.title}
              description={methodology.description}
              onClick={() => handleCardClick(methodology.id)}
            />
          </motion.div>
        ))}
      </Grid>

      <AnimatePresence>
        {expandedMethodology && (
          <ExpandedCard
            initial={{ opacity: 0, height: 0 }}
            animate={{ opacity: 1, height: 'auto' }}
            exit={{ opacity: 0, height: 0 }}
            transition={{ duration: 0.3 }}
          >
            <ExpandedTitle>{expandedMethodology.title}</ExpandedTitle>
            <ExpandedDescription>{expandedMethodology.details}</ExpandedDescription>
          </ExpandedCard>
        )}
      </AnimatePresence>
    </Container>
  );
};

export default Methodologies;