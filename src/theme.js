import { createGlobalStyle } from 'styled-components';

export const theme = {
  colors: {
    primary: '#0094C9', // Azul principal
    secondary: '#3498DB', // Azul claro
    accent: '#2ECC71', // Verde claro
    playful: '#F1C40F', // Amarillo
    background: '#FFFFFF',
    text: '#000000',
    lightGray: '#2C3E50',
    white: '#FFFFFF',
    subtleGray: '#2C3E50',
    cardBg: '#FFFFFF',
    gradientStart: '#0094C9',
    gradientEnd: '#2ECC71',
  },
  fonts: {
    heading: "'SF Pro Display', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
    body: "'SF Pro Text', -apple-system, BlinkMacSystemFont, 'Segoe UI', sans-serif",
  },
  breakpoints: {
    mobile: '768px',
    tablet: '1024px',
  },
};

export const GlobalStyle = createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: ${props => props.theme.fonts.body};
    background-color: ${props => props.theme.colors.background};
    color: ${props => props.theme.colors.text};
    line-height: 1.5;
    font-weight: 400;
    -webkit-font-smoothing: antialiased;
    -moz-osx-font-smoothing: grayscale;
    margin: 0;
    padding: 0;
    width: 100vw;
    max-width: 100vw;
    overflow-x: hidden;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    font-weight: 500;
    margin-bottom: 0.5rem;
    line-height: 1.2;
  }

  h1 { font-size: 2.5rem; font-weight: 600; }
  h2 { font-size: 2rem; font-weight: 500; }
  h3 { font-size: 1.5rem; font-weight: 500; }
  h4 { font-size: 1.25rem; font-weight: 500; }

  p {
    margin-bottom: 1rem;
    font-size: 1rem;
    line-height: 1.6;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
    transition: color 0.2s ease;
  }

  a:hover {
    color: ${props => props.theme.colors.secondary};
  }

  button {
    font-family: ${props => props.theme.fonts.body};
    font-weight: 400;
    border: none;
    cursor: pointer;
    transition: all 0.2s ease;
  }

  @media (max-width: ${props => props.theme.breakpoints.mobile}) {
    h1 { font-size: 2rem; }
    h2 { font-size: 1.75rem; }
    h3 { font-size: 1.25rem; }
    h4 { font-size: 1.1rem; }
    p { font-size: 0.95rem; }
  }
`;