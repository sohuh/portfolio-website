import styled from 'styled-components';
import { motion } from 'framer-motion';
import { theme } from '../theme';
import React from 'react';

const ProjectsSection = styled.section`
  padding: 5rem 2rem;
  background-color: ${theme.colors.secondary};
`;

const ProjectsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(300px, 1fr));
  gap: 2rem;
  max-width: 1200px;
  margin: 0 auto;
`;

const ProjectCard = styled(motion.div)`
  background: ${theme.colors.white};
  border-radius: 10px;
  overflow: hidden;
  box-shadow: 0 4px 6px rgba(128, 0, 32, 0.1);
  position: relative;

  &:before {
    content: '';
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 4px;
    background: ${theme.colors.primary};
    transform: scaleX(0);
    transform-origin: left;
    transition: transform 0.3s ease;
  }

  &:hover:before {
    transform: scaleX(1);
  }
`;

const ProjectImage = styled.img`
  width: 100%;
  height: 200px;
  object-fit: cover;
  transition: transform 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.05);
  }
`;

const ProjectInfo = styled.div`
  padding: 1.5rem;
`;

const ProjectTitle = styled.h3`
  margin: 0 0 1rem 0;
  color: ${theme.colors.primary};
`;

const ProjectDescription = styled.p`
  color: ${theme.colors.dark};
  margin-bottom: 1rem;
`;

const ProjectTech = styled.div`
  display: flex;
  gap: 0.5rem;
  flex-wrap: wrap;
`;

const TechTag = styled.span`
  background: ${theme.colors.primary}10;
  padding: 0.25rem 0.75rem;
  border-radius: 15px;
  font-size: 0.875rem;
  color: ${theme.colors.primary};
  transition: all 0.3s ease;

  &:hover {
    background: ${theme.colors.primary};
    color: ${theme.colors.secondary};
  }
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

const Projects = React.forwardRef((props, ref) => {
  const projects = [
    {
      id: 1,
      title: "Project One",
      description: "A full-stack web application built with React and Node.js",
      image: "https://via.placeholder.com/300x200",
      tech: ["React", "Node.js", "MongoDB"]
    },
    {
      id: 2,
      title: "Project Two",
      description: "An e-commerce platform with payment integration",
      image: "https://via.placeholder.com/300x200",
      tech: ["React", "Redux", "Stripe"]
    },
    {
      id: 3,
      title: "Project Three",
      description: "A real-time chat application",
      image: "https://via.placeholder.com/300x200",
      tech: ["Socket.io", "Express", "MongoDB"]
    }
  ];

  return (
    <ProjectsSection ref={ref}>
      <SectionTitle>My Projects</SectionTitle>
      <ProjectsGrid>
        {projects.map((project) => (
          <ProjectCard
            key={project.id}
            whileHover={{ y: -10 }}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5 }}
          >
            <ProjectImage src={project.image} alt={project.title} />
            <ProjectInfo>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <ProjectTech>
                {project.tech.map((tech, index) => (
                  <TechTag key={index}>{tech}</TechTag>
                ))}
              </ProjectTech>
            </ProjectInfo>
          </ProjectCard>
        ))}
      </ProjectsGrid>
    </ProjectsSection>
  );
});

Projects.displayName = 'Projects';

export default Projects;