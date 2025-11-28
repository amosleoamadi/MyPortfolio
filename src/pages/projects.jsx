import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Globe,
  DollarSign,
  Utensils,
  ExternalLink,
  Github,
} from "lucide-react";
import { Fade, Zoom, Slide, Bounce, Flip } from "react-awesome-reveal";

const ProjectsGrid = () => {
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
      liveLink: "https://amos-portfolio-five.vercel.app/contact",
      githubLink: "", // Add GitHub link if available
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
      liveLink: "https://edu-fund-gamma.vercel.app",
      githubLink: "", // Add GitHub link if available
    },
    {
      title: "QuickChow Food Platform",
      description:
        "A modern food delivery platform that connects users with local restaurants. Features menu browsing, order tracking, and secure payment processing.",
      features: [
        "Restaurant and menu browsing",
        "Food search and filtering",
        "Order tracking system",
        "Secure payment integration",
      ],
      tags: ["React", "JavaScript", "CSS", "API Integration"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      icon: Utensils,
      liveLink: "", // Add live link if available
      githubLink: "https://github.com/amosleoamadi/QUICKCHOW-PROJECT",
    },
  ];

  return (
    <Section>
      <Fade direction="up" duration={600} triggerOnce>
        <Header>
          <Title>Featured Projects</Title>
          <Subtitle>Some of the projects I've worked on recently</Subtitle>
        </Header>
      </Fade>

      <Grid>
        {projects.map((project, index) => (
          <Fade
            key={project.title}
            direction="up"
            delay={index * 150}
            duration={600}
            triggerOnce
            cascade
          >
            <ProjectCard whileHover={{ y: -4 }}>
              <Zoom delay={index * 200} duration={500} triggerOnce>
                <ProjectImage gradient={project.gradient}>
                  <Bounce delay={index * 200 + 300} duration={400} triggerOnce>
                    <ProjectIcon>
                      <project.icon size={28} />
                    </ProjectIcon>
                  </Bounce>
                </ProjectImage>
              </Zoom>

              <ProjectContent>
                <Slide
                  direction="up"
                  delay={index * 150 + 200}
                  duration={400}
                  triggerOnce
                >
                  <ProjectTitle>{project.title}</ProjectTitle>
                </Slide>

                <Fade delay={index * 150 + 300} duration={400} triggerOnce>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </Fade>

                <Flip delay={index * 150 + 400} duration={500} triggerOnce>
                  <FeatureList>
                    {project.features.map((feature, i) => (
                      <FeatureItem key={i}>{feature}</FeatureItem>
                    ))}
                  </FeatureList>
                </Flip>

                <Fade delay={index * 150 + 500} duration={400} triggerOnce>
                  <Tags>
                    {project.tags.map((tag) => (
                      <Tag key={tag}>{tag}</Tag>
                    ))}
                  </Tags>
                </Fade>

                <Slide
                  direction="up"
                  delay={index * 150 + 600}
                  duration={400}
                  triggerOnce
                >
                  <Actions>
                    {project.liveLink && (
                      <ActionButton
                        href={project.liveLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                      >
                        <ExternalLink size={16} />
                        View Project
                      </ActionButton>
                    )}
                    {project.githubLink && (
                      <ActionButton
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                      >
                        <Github size={16} />
                        GitHub
                      </ActionButton>
                    )}
                  </Actions>
                </Slide>
              </ProjectContent>
            </ProjectCard>
          </Fade>
        ))}
      </Grid>
    </Section>
  );
};

export default ProjectsGrid;

const Section = styled.section`
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
  position: relative;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -100%;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      90deg,
      transparent,
      rgba(102, 126, 234, 0.05),
      transparent
    );
    transition: left 0.6s ease;
    z-index: 1;
  }

  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 15px 35px rgba(0, 0, 0, 0.3);

    &::before {
      left: 100%;
    }
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
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: rgba(255, 255, 255, 0.2);
  }

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
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

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
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    color: #aaa;
  }

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
  transition: color 0.3s ease;

  &::before {
    content: "→";
    position: absolute;
    left: 0;
    color: #667eea;
    transition: transform 0.3s ease;
  }

  ${ProjectCard}:hover & {
    color: #ccc;

    &::before {
      transform: translateX(3px);
    }
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
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    background: rgba(102, 126, 234, 0.2);
    transform: translateY(-1px);
  }

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
