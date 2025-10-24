import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBook, FaTools, FaRobot, FaEnvelope } from 'react-icons/fa';

const NavContainer = styled.nav`
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  padding: 0;
  width: 100vw;
  display: flex;
  justify-content: center;
  margin: 0;
  box-sizing: border-box;
`;

const NavList = styled.ul`
  display: flex;
  list-style: none;
  margin: 0;
  padding: 0;
  justify-content: center;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    flex-direction: column;
  }
`;

const NavItem = styled.li`
  margin: 0;
`;

const StyledNavLink = styled(NavLink)`
  display: flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.25rem;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  transition: all 0.2s ease;
  font-size: 0.875rem;
  font-weight: 400;
  border-bottom: 2px solid transparent;

  &:hover {
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
    border-bottom-color: ${props => props.theme.colors.primary};
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.625rem 0.75rem;
    font-size: 0.8125rem;
  }
`;

const NavBar = () => {
  return (
    <NavContainer>
      <NavList>
        <NavItem>
          <StyledNavLink to="/" end>
            <FaHome />
            Home
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/about">
            <FaInfoCircle />
            About
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/methodologies">
            <FaBook />
            Methodologies
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/resources">
            <FaTools />
            Resources
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/technology">
            <FaRobot />
            Technology
          </StyledNavLink>
        </NavItem>
        <NavItem>
          <StyledNavLink to="/contact">
            <FaEnvelope />
            Contact
          </StyledNavLink>
        </NavItem>
      </NavList>
    </NavContainer>
  );
};

export default NavBar;