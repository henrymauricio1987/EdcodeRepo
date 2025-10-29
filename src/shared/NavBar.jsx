import styled from 'styled-components';
import { NavLink } from 'react-router-dom';
import { FaHome, FaInfoCircle, FaBook, FaTools, FaRobot, FaEnvelope, FaBars, FaTimes } from 'react-icons/fa';
import { useState } from 'react';

const NavContainer = styled.nav`
  background: ${props => props.theme.colors.white};
  border-bottom: 1px solid ${props => props.theme.colors.lightGray};
  padding: 0;
  width: 100vw;
  max-width: 100vw;
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
    position: fixed;
    top: 0;
    left: 0;
    width: 100%;
    height: 100vh;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    background: ${props => props.theme.colors.white};
    z-index: 1000;
    transform: translateX(${props => props.isOpen ? '0' : '-100%'});
    transition: transform 0.3s ease;
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
    padding: 1rem 2rem;
    font-size: 1.125rem;
    width: 100%;
    justify-content: center;
    border-bottom: none;
    border-radius: 8px;
    margin: 0.5rem 0;

    &:hover {
      background-color: ${props => props.theme.colors.lightGray};
    }

    &.active {
      background-color: ${props => props.theme.colors.primary};
      color: ${props => props.theme.colors.white};
      border-bottom: none;
    }
  }
`;

const HamburgerButton = styled.button`
  display: none;
  background: none;
  border: none;
  font-size: 1.5rem;
  color: ${props => props.theme.colors.text};
  cursor: pointer;
  padding: 0.5rem;
  z-index: 1001;

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    display: block;
    position: fixed;
    top: 1rem;
    right: 1rem;
  }
`;

const NavBar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);

  const closeMenu = () => setIsOpen(false);

  return (
    <>
      <HamburgerButton onClick={toggleMenu}>
        {isOpen ? <FaTimes /> : <FaBars />}
      </HamburgerButton>
      <NavContainer>
        <NavList isOpen={isOpen}>
          <NavItem>
            <StyledNavLink to="/" end onClick={closeMenu}>
              <FaHome />
              Home
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/about" onClick={closeMenu}>
              <FaInfoCircle />
              About
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/methodologies" onClick={closeMenu}>
              <FaBook />
              Methodologies
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/resources" onClick={closeMenu}>
              <FaTools />
              Resources
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/technology" onClick={closeMenu}>
              <FaRobot />
              Technology
            </StyledNavLink>
          </NavItem>
          <NavItem>
            <StyledNavLink to="/contact" onClick={closeMenu}>
              <FaEnvelope />
              Contact
            </StyledNavLink>
          </NavItem>
        </NavList>
      </NavContainer>
    </>
  );
};

export default NavBar;