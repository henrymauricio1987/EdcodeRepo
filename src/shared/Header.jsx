import styled from 'styled-components';
import { FaBookOpen } from 'react-icons/fa';

const HeaderContainer = styled.header`
  background: linear-gradient(135deg, ${props => props.theme.colors.gradientStart} 0%, ${props => props.theme.colors.gradientEnd} 100%);
  color: ${props => props.theme.colors.white};
  padding: 3rem;
  text-align: center;
  position: relative;
  overflow: hidden;
  width: 100%;

  &::before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    background: url('data:image/svg+xml,<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 100 100"><circle cx="20" cy="20" r="2" fill="rgba(255,255,255,0.1)"/><circle cx="80" cy="40" r="1.5" fill="rgba(255,255,255,0.1)"/><circle cx="60" cy="80" r="1" fill="rgba(255,255,255,0.1)"/><circle cx="30" cy="70" r="1.5" fill="rgba(255,255,255,0.1)"/></svg>') repeat;
    opacity: 0.3;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 2rem 1rem;
  }
`;

const HeaderTitle = styled.h1`
  font-size: 2.25rem;
  font-weight: 600;
  margin-bottom: 0.75rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.75rem;
  color: ${props => props.theme.colors.white};
  position: relative;
  z-index: 1;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1.875rem;
  }
`;

const HeaderSubtitle = styled.p`
  font-size: 1.125rem;
  font-weight: 400;
  color: ${props => props.theme.colors.white};
  opacity: 0.9;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.5;
  position: relative;
  z-index: 1;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    font-size: 1rem;
  }
`;

const Header = () => {
  return (
    <HeaderContainer>
      <HeaderTitle>
        <FaBookOpen />
        Digital Education and Computational Thinking
      </HeaderTitle>
      <HeaderSubtitle>
        Exploring modern pedagogical methodologies for digital learning
      </HeaderSubtitle>
    </HeaderContainer>
  );
};

export default Header;