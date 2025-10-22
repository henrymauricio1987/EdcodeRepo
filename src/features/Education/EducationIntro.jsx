import styled from 'styled-components';
import { motion } from 'framer-motion';

const IntroContainer = styled.section`
  padding: 3rem 1rem;
  max-width: 800px;
  margin: 0 auto;
`;

const IntroTitle = styled(motion.h2)`
  color: ${props => props.theme.colors.primary};
  text-align: center;
  margin-bottom: 2rem;
`;

const IntroText = styled(motion.p)`
  font-size: 1.1rem;
  line-height: 1.8;
  margin-bottom: 1.5rem;
  text-align: justify;
`;

const EducationIntro = () => {
    return (
        <IntroContainer>
            <IntroTitle
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6 }}
            >
                The Importance of Computational Thinking
            </IntroTitle>

            <IntroText
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.2 }}
            >
                In the current digital era, characterized by Manuel Castells (2000) as the "information society",
                computational thinking has become an essential skill for children and adolescents.
                This ability transcends mere computer use and refers to the capacity to solve problems
                in a systematic, algorithmic, and creative manner.
            </IntroText>

            <IntroText
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.4 }}
            >
                Teaching programming from an early age not only prepares students for technological careers,
                but also develops fundamental cognitive skills such as logical thinking,
                problem-solving, and creativity. The challenges in basic and secondary education require
                innovative pedagogical approaches that integrate technology with arts, mathematics, sciences,
                and other disciplines.
            </IntroText>

            <IntroText
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: 0.6 }}
            >
                Constructivist models and active learning approaches, combined with modern methodologies such as
                project-based learning and thinking routines, offer a solid framework for integrating
                computational thinking into the educational curriculum in a meaningful and effective way.
            </IntroText>
        </IntroContainer>
    );
};

export default EducationIntro;