import { useState } from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { FaExternalLinkAlt, FaFilter } from 'react-icons/fa';
import Card from '../../shared/Card';
import { resources } from '../../data';

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

const FilterContainer = styled.div`
  display: flex;
  justify-content: center;
  margin-bottom: 2rem;
  gap: 1rem;
  flex-wrap: wrap;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
    align-items: center;
  }
`;

const FilterButton = styled.button`
  background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.lightGray};
  color: ${props => props.active ? props.theme.colors.white : props.theme.colors.text};
  border: none;
  padding: 0.5rem 1rem;
  border-radius: 25px;
  cursor: pointer;
  display: flex;
  align-items: center;
  gap: 0.5rem;
  transition: all 0.3s ease;

  &:hover {
    background: ${props => props.active ? props.theme.colors.primary : props.theme.colors.primary};
    color: ${props => props.theme.colors.white};
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    grid-template-columns: 1fr;
    gap: 1rem;
  }
`;

const ResourceCard = styled(Card)`
  display: flex;
  flex-direction: column;
  height: 100%;
`;

const ResourceCategory = styled.span`
  display: inline-block;
  background: ${props => props.theme.colors.secondary};
  color: ${props => props.theme.colors.white};
  padding: 0.25rem 0.5rem;
  border-radius: 12px;
  font-size: 0.8rem;
  margin-bottom: 0.5rem;
  align-self: flex-start;
`;

const ResourceLink = styled.a`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  color: ${props => props.theme.colors.primary};
  text-decoration: none;
  font-weight: bold;
  margin-top: auto;
  padding-top: 1rem;

  &:hover {
    text-decoration: underline;
  }
`;

const Resources = () => {
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const categories = ['Todos', ...new Set(resources.map(r => r.category))];

  const filteredResources = selectedCategory === 'Todos'
    ? resources
    : resources.filter(r => r.category === selectedCategory);

  return (
    <Container>
      <Title
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
      >
        Learning Resources
      </Title>

      <FilterContainer>
        <FaFilter />
        {categories.map(category => (
          <FilterButton
            key={category}
            active={selectedCategory === category}
            onClick={() => setSelectedCategory(category)}
          >
            {category}
          </FilterButton>
        ))}
      </FilterContainer>

      <Grid>
        {filteredResources.map((resource, index) => (
          <motion.div
            key={resource.id}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: index * 0.1 }}
          >
            <ResourceCard>
              <ResourceCategory>{resource.category}</ResourceCategory>
              <h3>{resource.name}</h3>
              <p>{resource.description}</p>
              <ResourceLink href={resource.link} target="_blank" rel="noopener noreferrer">
                Visitar sitio <FaExternalLinkAlt />
              </ResourceLink>
            </ResourceCard>
          </motion.div>
        ))}
      </Grid>
    </Container>
  );
};

export default Resources;