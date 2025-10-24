import styled from 'styled-components';
import { FaHeart } from 'react-icons/fa';

const FooterContainer = styled.footer`
  background: ${props => props.theme.colors.text};
  color: ${props => props.theme.colors.white};
  padding: 2rem;
  text-align: center;
  margin-top: auto;
  width: 100vw;
  box-sizing: border-box;
`;

const FooterContent = styled.div`
  max-width: 1200px;
  margin: 0 auto;
`;

const FooterText = styled.p`
  margin: 0;
  font-size: 0.9rem;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 0.5rem;
`;

const HeartIcon = styled(FaHeart)`
  color: ${props => props.theme.colors.secondary};
`;

const Footer = () => {
  return (
    <FooterContainer>
      <FooterContent>
        <FooterText>
          © 2025 Digital Education and Computational Thinking.
          Made with <HeartIcon /> for the education of the future.
        </FooterText>
      </FooterContent>
    </FooterContainer>
  );
};

export default Footer;