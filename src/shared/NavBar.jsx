import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBook, FaTools, FaRobot, FaEnvelope } from 'react-icons/fa';

const NavContainer = styled.nav`
  background: ${props => props.theme.colors.white};
  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);
  padding: 0;
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
  padding: 1rem 1.5rem;
  color: ${props => props.theme.colors.text};
  text-decoration: none;
  transition: all 0.3s ease;
  border-bottom: 3px solid transparent;

  &:hover {
    background-color: ${props => props.theme.colors.lightGray};
    color: ${props => props.theme.colors.primary};
  }

  &.active {
    color: ${props => props.theme.colors.primary};
    border-bottom-color: ${props => props.theme.colors.primary};
    background-color: rgba(30, 136, 229, 0.1);
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    padding: 0.75rem 1rem;
    justify-content: center;
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