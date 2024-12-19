import React from 'react';
import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { 
  faJava, 
  faJs, 
  faCss3Alt, 
  faReact, 
  faAws, 
  faGithub,
  faLinkedin
} from '@fortawesome/free-brands-svg-icons';

const SkillsSection = styled.section`
  padding: 5rem 2rem;
  background: ${theme.colors.secondary};
`;

const SectionTitle = styled.h2`
  text-align: center;
  margin-bottom: 3rem;
  color: ${theme.colors.primary};
  position: relative;
  
  &:after {
    content: '';
    position: absolute;
    bottom: -10px;
    left: 50%;
    transform: translateX(-50%);
    width: 60px;
    height: 4px;
    background: ${theme.colors.primary};
    border-radius: 2px;
  }
`;

const SkillsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(150px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto 3rem auto;
`;

const SkillCard = styled(motion.div)`
  background: ${theme.colors.white};
  padding: 1.5rem;
  border-radius: 10px;
  box-shadow: 0 4px 6px rgba(128, 0, 32, 0.1);
  text-align: center;
  
  svg {
    font-size: 2.5rem;
    color: ${theme.colors.primary};
    margin-bottom: 1rem;
  }
`;

const SkillName = styled.h3`
  color: ${theme.colors.primary};
  margin: 0;
  font-size: 1rem;
`;

const SocialButtons = styled.div`
  display: flex;
  justify-content: center;
  gap: 2rem;
  margin-top: 3rem;
`;

const SocialButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 0.5rem;
  padding: 0.75rem 1.5rem;
  background: ${theme.colors.primary};
  color: ${theme.colors.white};
  text-decoration: none;
  border-radius: 5px;
  font-weight: 500;
  transition: background 0.3s ease;

  &:hover {
    background: ${theme.colors.hover.primary};
  }

  svg {
    font-size: 1.2rem;
  }
`;

const Skills = () => {
  const skills = [
    { name: 'C++', icon: '🔧' },
    { name: 'Java', icon: faJava },
    { name: 'JavaScript', icon: faJs },
    { name: 'CSS3', icon: faCss3Alt },
    { name: 'GraphQL', icon: '⚡' },
    { name: 'React', icon: faReact },
    { name: 'Adobe Photoshop', icon: '🎨' },
    { name: 'Canva', icon: '🎯' },
    { name: 'AWS', icon: faAws },
    { name: 'GitHub', icon: faGithub }
  ];

  return (
    <SkillsSection>
      <SectionTitle>Skills</SectionTitle>
      <SkillsGrid>
        {skills.map((skill, index) => (
          <SkillCard
            key={index}
            whileHover={{ y: -5 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.3, delay: index * 0.1 }}
          >
            {typeof skill.icon === 'string' ? (
              <span style={{ fontSize: '2.5rem', marginBottom: '1rem', display: 'block' }}>
                {skill.icon}
              </span>
            ) : (
              <FontAwesomeIcon icon={skill.icon} />
            )}
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </SkillsGrid>

      <SocialButtons>
        <SocialButton
          href="https://github.com/sohuh"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faGithub} />
          GitHub
        </SocialButton>
        <SocialButton
          href="https://www.linkedin.com/in/sohaib-rehman-470714300/"
          target="_blank"
          rel="noopener noreferrer"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
        >
          <FontAwesomeIcon icon={faLinkedin} />
          LinkedIn
        </SocialButton>
      </SocialButtons>
    </SkillsSection>
  );
};

export default Skills;
