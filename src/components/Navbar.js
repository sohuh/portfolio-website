import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import { motion } from 'framer-motion';
import { theme } from '../theme';

const Nav = styled.nav`
  display: flex;
  justify-content: space-between;
  align-items: center;
  padding: 1rem 2rem;
  background-color: ${theme.colors.secondary};
  box-shadow: 0 2px 4px rgba(128, 0, 32, 0.1);
  position: fixed;
  width: 100%;
  top: 0;
  z-index: 1000;
`;

const Logo = styled(motion(Link))`
  font-size: 1.5rem;
  font-weight: bold;
  text-decoration: none;
  color: ${theme.colors.primary};
  padding: 0.5rem 1rem;
  border-radius: 4px;
`;

const Navbar = ({ scrollToProjects }) => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
  };

  return (
    <Nav>
      <Logo
        to="/"
        onClick={scrollToTop}
        whileHover={{ scale: 1.05 }}
        whileTap={{ scale: 0.95 }}
      >
        Portfolio
      </Logo>
    </Nav>
  );
};

export default Navbar;