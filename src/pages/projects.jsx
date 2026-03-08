import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Globe,
  DollarSign,
  Utensils,
  ExternalLink,
  Github,
  ChefHat,
  CreditCard,
  Sparkles,
  ArrowUpRight,
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
      githubLink: "",
    },
    {
      title: "Donation & Fundraising Web App",
      description:
        "A platform where students can request donations and manage fundraising campaigns. Includes authentication, campaign management, and real-time updates.",
      features: [
        "User login & registration",
        "Campaign dashboard",
        "Withdrawal request system",
        "Real-time donation tracking",
      ],
      tags: ["React", "Redux Toolkit", "RTK Query", "Styled Components"],
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
      icon: DollarSign,
      liveLink: "https://edu-fund-gamma.vercel.app",
      githubLink: "",
    },
    {
      title: "QuickLah Food Platform",
      description:
        "A modern food delivery platform that connects users with local restaurants. Features dynamic menu browsing, cart management, and seamless ordering experience.",
      features: [
        "Restaurant and menu browsing",
        "Dynamic cart functionality",
        "Order tracking system",
        "API integration for food data",
      ],
      tags: ["React", "TypeScript", "Context API", "API Integration"],
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      icon: Utensils,
      liveLink: "https://quicklah.vercel.app",
      githubLink: "",
    },
    {
      title: "EasyTranz Payment Platform",
      description:
        "A cross-border payment web application that enables freelancers in Nigeria to receive payments from clients abroad using CashApp, Zelle, and other supported methods.",
      features: [
        "Multi-payment method integration (CashApp, Zelle)",
        "Secure transaction processing",
        "User dashboard with payment tracking",
        "Type-safe architecture with TypeScript",
      ],
      tags: ["React", "TypeScript", "Tailwind CSS", "Axios", "Secure Payments"],
      gradient: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)",
      icon: CreditCard,
      liveLink: "https://www.eazytranz.com/",
      githubLink: "",
    },
    {
      title: "Chizzy Restaurant Web App",
      description:
        "A restaurant ordering and management platform developed during my internship. Built with TypeScript, featuring structured components, menu management, and optimized UI performance.",
      features: [
        "Interactive food menu system",
        "Responsive UI with modern design",
        "Reusable TypeScript interfaces",
        "Clean and scalable component structure",
      ],
      tags: ["React", "TypeScript", "Tailwind CSS"],
      gradient: "linear-gradient(135deg, #f7971e 0%, #ffd200 100%)",
      icon: ChefHat,
      liveLink: "https://trueminds-project.vercel.app/",
      githubLink: "",
    },
  ];

  return (
    <Section>
      {/* Background decorative elements */}
      <BackgroundOrbs>
        <Orb1 />
        <Orb2 />
        <Orb3 />
      </BackgroundOrbs>

      <Fade direction="up" duration={600} triggerOnce>
        <Header>
          <Badge>
            <Sparkles size={16} />
            <span>My Work</span>
          </Badge>
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
            <ProjectCard
              whileHover={{ y: -8 }}
              transition={{ type: "spring", stiffness: 300 }}
            >
              <ProjectImage gradient={project.gradient}>
                <ImageOverlay />
                <ProjectIconWrapper>
                  <Zoom delay={index * 200} duration={500} triggerOnce>
                    <ProjectIcon>
                      <project.icon size={32} />
                    </ProjectIcon>
                  </Zoom>
                </ProjectIconWrapper>
              </ProjectImage>

              <ProjectContent>
                <ContentHeader>
                  <Slide
                    direction="up"
                    delay={index * 150 + 200}
                    duration={400}
                    triggerOnce
                  >
                    <ProjectTitle>{project.title}</ProjectTitle>
                  </Slide>

                  <ProjectNumber>0{index + 1}</ProjectNumber>
                </ContentHeader>

                <Fade delay={index * 150 + 300} duration={400} triggerOnce>
                  <ProjectDescription>{project.description}</ProjectDescription>
                </Fade>

                <FeatureSection>
                  <FeatureTitle>Key Features</FeatureTitle>
                  <Flip delay={index * 150 + 400} duration={500} triggerOnce>
                    <FeatureList>
                      {project.features.map((feature, i) => (
                        <FeatureItem key={i}>
                          <FeatureBullet />
                          {feature}
                        </FeatureItem>
                      ))}
                    </FeatureList>
                  </Flip>
                </FeatureSection>

                <TagsSection>
                  <Fade delay={index * 150 + 500} duration={400} triggerOnce>
                    <Tags>
                      {project.tags.map((tag) => (
                        <Tag key={tag}>{tag}</Tag>
                      ))}
                    </Tags>
                  </Fade>
                </TagsSection>

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
                        whileTap={{ scale: 0.98 }}
                        primary
                      >
                        <span>View Live</span>
                        <ArrowUpRight size={16} />
                      </ActionButton>
                    )}
                    {project.githubLink && (
                      <ActionButton
                        href={project.githubLink}
                        target="_blank"
                        rel="noopener noreferrer"
                        whileHover={{ scale: 1.05 }}
                        whileTap={{ scale: 0.98 }}
                      >
                        <Github size={16} />
                        <span>Code</span>
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

// Styled Components with enhanced design

const Section = styled.section`
  background: linear-gradient(135deg, #0f0f18 0%, #1a1a28 50%, #12121a 100%);
  border-radius: 32px;
  padding: 80px 60px;
  border: 1px solid rgba(102, 126, 234, 0.08);
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 60px 40px;
  }

  @media (max-width: 768px) {
    padding: 48px 24px;
    border-radius: 24px;
  }

  @media (max-width: 480px) {
    padding: 40px 16px;
  }
`;

const BackgroundOrbs = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`;

const Orb1 = styled.div`
  position: absolute;
  top: -20%;
  right: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(102, 126, 234, 0.03) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(60px);
`;

const Orb2 = styled.div`
  position: absolute;
  bottom: -20%;
  left: -10%;
  width: 500px;
  height: 500px;
  background: radial-gradient(
    circle,
    rgba(118, 75, 162, 0.03) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(60px);
`;

const Orb3 = styled.div`
  position: absolute;
  top: 40%;
  left: 30%;
  width: 300px;
  height: 300px;
  background: radial-gradient(
    circle,
    rgba(67, 233, 123, 0.02) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(50px);
`;

const Header = styled.div`
  margin-bottom: 64px;
  text-align: center;
  position: relative;
  z-index: 1;

  @media (max-width: 768px) {
    margin-bottom: 48px;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(102, 126, 234, 0.08);
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 30px;
  padding: 8px 16px;
  margin-bottom: 20px;
  color: #88aaff;
  font-size: 13px;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 6px 14px;
    font-size: 12px;
  }
`;

const Title = styled.h2`
  font-size: 42px;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 16px;
  letter-spacing: -0.5px;

  @media (max-width: 1024px) {
    font-size: 36px;
  }

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const Subtitle = styled.p`
  font-size: 16px;
  color: #999;
  font-weight: 400;
  letter-spacing: 0.3px;
  max-width: 600px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(380px, 1fr));
  gap: 36px;
  position: relative;
  z-index: 2;

  @media (max-width: 1200px) {
    grid-template-columns: repeat(auto-fill, minmax(340px, 1fr));
    gap: 32px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(300px, 1fr));
    gap: 28px;
  }

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 24px;
  }
`;

const ProjectCard = styled(motion.div)`
  background: linear-gradient(
    135deg,
    rgba(255, 255, 255, 0.03) 0%,
    rgba(255, 255, 255, 0.005) 100%
  );
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-radius: 28px;
  overflow: hidden;
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);
  position: relative;
  backdrop-filter: blur(8px);
  -webkit-backdrop-filter: blur(8px);
  display: flex;
  flex-direction: column;
  height: 100%;

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
      rgba(102, 126, 234, 0.08),
      transparent
    );
    transition: left 0.8s cubic-bezier(0.23, 1, 0.32, 1);
    z-index: 1;
    pointer-events: none;
  }

  &::after {
    content: "";
    position: absolute;
    inset: 0;
    border-radius: 28px;
    padding: 1px;
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.15) 0%,
      rgba(102, 126, 234, 0) 100%
    );
    -webkit-mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    mask:
      linear-gradient(#fff 0 0) content-box,
      linear-gradient(#fff 0 0);
    -webkit-mask-composite: xor;
    mask-composite: exclude;
    pointer-events: none;
    opacity: 0;
    transition: opacity 0.4s ease;
  }

  &:hover {
    border-color: rgba(102, 126, 234, 0.25);
    box-shadow:
      0 30px 60px rgba(102, 126, 234, 0.15),
      0 0 1px rgba(102, 126, 234, 0.2);
    background: linear-gradient(
      135deg,
      rgba(255, 255, 255, 0.05) 0%,
      rgba(255, 255, 255, 0.01) 100%
    );

    &::before {
      left: 100%;
    }

    &::after {
      opacity: 1;
    }
  }

  @media (max-width: 768px) {
    border-radius: 24px;
  }
`;

const ProjectImage = styled.div`
  height: 220px;
  background: ${(props) =>
    props.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  position: relative;
  overflow: hidden;
  flex-shrink: 0;

  @media (max-width: 768px) {
    height: 190px;
  }

  @media (max-width: 480px) {
    height: 170px;
  }
`;

const ImageOverlay = styled.div`
  position: absolute;
  inset: 0;
  background: linear-gradient(
    135deg,
    rgba(0, 0, 0, 0.2) 0%,
    rgba(0, 0, 0, 0.4) 50%,
    rgba(0, 0, 0, 0.2) 100%
  );
  z-index: 1;
`;

const ProjectIconWrapper = styled.div`
  position: absolute;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  z-index: 2;
`;

const ProjectIcon = styled.div`
  width: 80px;
  height: 80px;
  background: rgba(255, 255, 255, 0.15);
  backdrop-filter: blur(12px);
  border-radius: 24px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: white;
  border: 1px solid rgba(255, 255, 255, 0.2);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);

  ${ProjectCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: rgba(255, 255, 255, 0.2);
    border-color: rgba(255, 255, 255, 0.3);
  }

  @media (max-width: 768px) {
    width: 70px;
    height: 70px;
  }

  @media (max-width: 480px) {
    width: 60px;
    height: 60px;
  }
`;

const ProjectContent = styled.div`
  padding: 28px;
  display: flex;
  flex-direction: column;
  flex-grow: 1;
  position: relative;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 24px;
  }

  @media (max-width: 480px) {
    padding: 20px;
  }
`;

const ContentHeader = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  margin-bottom: 12px;
`;

const ProjectTitle = styled.h3`
  font-size: 22px;
  font-weight: 700;
  color: #ffffff;
  transition: all 0.4s ease;
  letter-spacing: -0.3px;
  line-height: 1.3;
  flex: 1;

  ${ProjectCard}:hover & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 19px;
  }

  @media (max-width: 480px) {
    font-size: 18px;
  }
`;

const ProjectNumber = styled.span`
  font-size: 16px;
  font-weight: 600;
  color: rgba(102, 126, 234, 0.3);
  margin-left: 12px;
`;

const ProjectDescription = styled.p`
  font-size: 14px;
  color: #999;
  line-height: 1.7;
  margin-bottom: 20px;
  transition: color 0.3s ease;

  ${ProjectCard}:hover & {
    color: #aaa;
  }

  @media (max-width: 768px) {
    font-size: 13.5px;
    margin-bottom: 18px;
  }
`;

const FeatureSection = styled.div`
  margin-bottom: 20px;
  flex-grow: 1;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const FeatureTitle = styled.h4`
  font-size: 13px;
  font-weight: 600;
  color: #88aaff;
  margin-bottom: 12px;
  text-transform: uppercase;
  letter-spacing: 0.5px;
`;

const FeatureList = styled.ul`
  list-style: none;
  padding: 0;
  margin: 0;
  display: grid;
  grid-template-columns: 1fr;
  gap: 8px;
`;

const FeatureItem = styled.li`
  font-size: 13px;
  color: #999;
  padding-left: 24px;
  position: relative;
  transition: all 0.3s ease;
  line-height: 1.5;

  ${ProjectCard}:hover & {
    color: #bbb;
  }

  @media (max-width: 768px) {
    font-size: 12.5px;
  }
`;

const FeatureBullet = styled.span`
  position: absolute;
  left: 4px;
  top: 7px;
  width: 6px;
  height: 6px;
  border-radius: 50%;
  background: #667eea;
  transition: all 0.3s ease;

  ${ProjectCard}:hover & {
    transform: scale(1.2);
    background: #88aaff;
  }
`;

const TagsSection = styled.div`
  margin-bottom: 20px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
  }
`;

const Tags = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 8px;
`;

const Tag = styled.span`
  font-size: 11px;
  padding: 6px 12px;
  background: rgba(102, 126, 234, 0.08);
  color: #88aaff;
  border-radius: 20px;
  font-weight: 500;
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  border: 1px solid rgba(102, 126, 234, 0.15);

  ${ProjectCard}:hover & {
    background: rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-2px);
  }

  @media (max-width: 768px) {
    font-size: 10.5px;
    padding: 5px 11px;
  }
`;

const Actions = styled.div`
  display: flex;
  gap: 12px;
  flex-wrap: wrap;
  margin-top: auto;
`;

const ActionButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 8px;
  font-size: 13px;
  color: ${(props) => (props.primary ? "#fff" : "#999")};
  text-decoration: none;
  padding: ${(props) => (props.primary ? "12px 20px" : "10px 16px")};
  border-radius: 30px;
  background: ${(props) =>
    props.primary
      ? "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"
      : "rgba(102, 126, 234, 0.05)"};
  border: 1px solid
    ${(props) =>
      props.primary ? "rgba(102, 126, 234, 0.3)" : "rgba(102, 126, 234, 0.12)"};
  transition: all 0.3s cubic-bezier(0.23, 1, 0.32, 1);
  font-weight: 500;
  flex: ${(props) => (props.primary ? "1" : "0 1 auto")};

  &:hover {
    color: #fff;
    background: ${(props) =>
      props.primary
        ? "linear-gradient(135deg, #764ba2 0%, #667eea 100%)"
        : "rgba(102, 126, 234, 0.18)"};
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 8px 16px rgba(102, 126, 234, 0.2);
  }

  @media (max-width: 768px) {
    font-size: 12.5px;
    padding: ${(props) => (props.primary ? "10px 16px" : "8px 14px")};
  }
`;
