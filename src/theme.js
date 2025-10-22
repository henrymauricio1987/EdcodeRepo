import { createGlobalStyle } from 'styled-components';

export const theme = {
    colors: {
        primary: '#1E88E5',
        secondary: '#43A047',
        background: '#F9FAFB',
        text: '#212121',
        lightGray: '#E0E0E0',
        white: '#FFFFFF',
    },
    fonts: {
        heading: "'Poppins', sans-serif",
        body: "'Roboto', sans-serif",
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
    line-height: 1.6;
  }

  h1, h2, h3, h4, h5, h6 {
    font-family: ${props => props.theme.fonts.heading};
    margin-bottom: 1rem;
  }

  a {
    color: ${props => props.theme.colors.primary};
    text-decoration: none;
  }

  button {
    font-family: ${props => props.theme.fonts.body};
  }
`;