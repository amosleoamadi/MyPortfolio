import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Globe, DollarSign, Cloud } from "lucide-react";

const ProjectsPage = () => {
  const projects = [
    {
      title: "Modern Portfolio Website",
      description:
        "A clean and responsive personal portfolio built with React and Tailwind CSS. Showcases projects and skills with a modern, elegant interface.",
      features: [
        "Multiple animated sections",
        "Smooth navigation with React Router",
        "Fully responsive design",
        "Dark theme with gradient accents",
      ],
      tags: ["React", "Tailwind CSS", "Framer Motion"],
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      icon: Globe,
    },
    {
      title: "Donation & Fundraising Web App",
      description:
        "A platform where students can request donations and manage fundraising campaigns. Includes user authentication and campaign management features.",
      features: [
        "User login & registration",
        "Campaign dashboard",
        "Withdrawal request system",
        "Real-time donation tracking",
      ],
      tags: ["React", "Redux", "RTK Query", "Styled Components"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: DollarSign,
    },
    {
      title: "Weather App",
      description:
        "A simple and interactive weather application powered by a public API. Displays live weather conditions for any city the user searches.",
      features: [
        "City search functionality",
        "Live weather data",
        "Temperature & conditions display",
        "Clean, intuitive interface",
      ],
      tags: ["React", "JavaScript", "REST API", "CSS"],
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      icon: Cloud,
    },
  ];
  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.3 }}
    >
      <Header>
        <Title>Featured Projects</Title>
        <Subtitle>Some of the projects I've worked on recently</Subtitle>
      </Header>
      <Grid>
        {projects.map((project, index) => (
          <ProjectCard
            key={project.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -4 }}
          >
            <ProjectImage gradient={project.gradient}>
              <ProjectIcon>
                <project.icon size={28} />
              </ProjectIcon>
            </ProjectImage>
            <ProjectContent>
              <ProjectTitle>{project.title}</ProjectTitle>
              <ProjectDescription>{project.description}</ProjectDescription>
              <FeatureList>
                {project.features.map((feature, i) => (
                  <FeatureItem key={i}>{feature}</FeatureItem>
                ))}
              </FeatureList>
              <Tags>
                {project.tags.map((tag) => (
                  <Tag key={tag}>{tag}</Tag>
                ))}
              </Tags>
            </ProjectContent>
          </ProjectCard>
        ))}
      </Grid>
    </Section>
  );
};

export default ProjectsPage;
const Section = styled(motion.section)`
  background: linear-gradient(135deg, #1a1a24 0%, #12121a 100%);
  border-radius: 24px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.06);

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 16px;
  }
`;

const Header = styled.div`
  margin-bottom: 32px;

  @media (max-width: 768px) {
    margin-bottom: 24px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Subtitle = styled.p`
  font-size: 14px;
  color: #888;
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(320px, 1fr));
  gap: 24px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 20px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 20px;
  overflow: hidden;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-4px);
  }

  @media (max-width: 768px) {
    border-radius: 16px;
  }
`;

const ProjectImage = styled.div`
  height: 180px;
  background: ${(props) =>
    props.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  display: flex;
  align-items: center;
  justify-content: center;
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    background: linear-gradient(
      to bottom,
      transparent 50%,
      rgba(0, 0, 0, 0.5) 100%
    );
  }

  @media (max-width: 768px) {
    height: 150px;
  }
`;

const ProjectIcon = styled.div`
  width: 64px;
  height: 64px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(10px);
  border-radius: 16px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  z-index: 1;

  @media (max-width: 768px) {
    width: 52px;
    height: 52px;
  }
`;

const ProjectContent = styled.div`
  padding: 24px;

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const ProjectTitle = styled.h3`
  font-size: 20px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;

  @media (max-width: 768px) {
    font-size: 17px;
    margin-bottom: 10px;
  }
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: #888;
  line-height: 1.7;
  margin-bottom: 16px;

  @media (max-width: 768px) {
    font-size: 13px;
    margin-bottom: 14px;
  }
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0 0 20px 0;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const FeatureItem = styled.li`
  font-size: 13px;
  color: #aaa;
  padding: 6px 0;
  padding-left: 20px;
  position: relative;

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #667eea;
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 5px 0;
    padding-left: 18px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    gap: 6px;
    margin-bottom: 16px;
  }
`;

const Tag = styled.span`
  font-size: 12px;
  padding: 6px 12px;
  background: rgba(102, 126, 234, 0.1);
  color: #667eea;
  border-radius: 8px;
  font-weight: 500;

  @media (max-width: 768px) {
    font-size: 11px;
    padding: 5px 10px;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;

  @media (max-width: 768px) {
    gap: 10px;
  }
`;

const ActionButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  gap: 6px;
  font-size: 13px;
  color: #888;
  text-decoration: none;
  padding: 10px 16px;
  border-radius: 10px;
  background: rgba(255, 255, 255, 0.05);
  transition: all 0.2s ease;
  font-weight: 500;

  &:hover {
    color: #fff;
    background: rgba(102, 126, 234, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 12px;
    padding: 8px 14px;
  }
`;
