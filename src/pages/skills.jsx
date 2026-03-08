import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  DiReact,
  DiJavascript1,
  DiCss3,
  DiHtml5,
  DiGit,
  DiNodejsSmall,
} from "react-icons/di";
import {
  SiRedux,
  SiStyledcomponents,
  SiTailwindcss,
  SiAxios,
  SiReactquery,
} from "react-icons/si";
import { TbPlug, TbBrandFramerMotion } from "react-icons/tb";
import { BiLogoTypescript } from "react-icons/bi";
import { VscJson } from "react-icons/vsc";
import { Fade, Zoom, Slide, Bounce } from "react-awesome-reveal";

const SkillsGrid = () => {
  const skills = [
    {
      name: "React",
      icon: <DiReact />,
      color: "rgba(97, 218, 251, 0.15)",
      category: "Frontend",
      proficiency: 95,
    },
    {
      name: "JavaScript",
      icon: <DiJavascript1 />,
      color: "rgba(247, 223, 30, 0.15)",
      category: "Language",
      proficiency: 90,
    },
    {
      name: "TypeScript",
      icon: <BiLogoTypescript />,
      color: "rgba(49, 120, 198, 0.15)",
      category: "Language",
      proficiency: 85,
    },
    {
      name: "Redux",
      icon: <SiRedux />,
      color: "rgba(118, 74, 188, 0.15)",
      category: "State Management",
      proficiency: 88,
    },
    {
      name: "RTK Query",
      icon: <TbPlug />,
      color: "rgba(118, 74, 188, 0.15)",
      category: "Data Fetching",
      proficiency: 85,
    },
    {
      name: "React Query",
      icon: <SiReactquery />,
      color: "rgba(255, 65, 84, 0.15)",
      category: "Data Fetching",
      proficiency: 75,
    },
    {
      name: "Styled Components",
      icon: <SiStyledcomponents />,
      color: "rgba(219, 112, 147, 0.15)",
      category: "Styling",
      proficiency: 90,
    },
    {
      name: "Tailwind CSS",
      icon: <SiTailwindcss />,
      color: "rgba(6, 182, 212, 0.15)",
      category: "Styling",
      proficiency: 88,
    },
    {
      name: "CSS3",
      icon: <DiCss3 />,
      color: "rgba(38, 77, 228, 0.15)",
      category: "Styling",
      proficiency: 85,
    },
    {
      name: "HTML5",
      icon: <DiHtml5 />,
      color: "rgba(227, 79, 38, 0.15)",
      category: "Markup",
      proficiency: 95,
    },
    {
      name: "Git",
      icon: <DiGit />,
      color: "rgba(240, 80, 51, 0.15)",
      category: "Version Control",
      proficiency: 85,
    },
    {
      name: "Framer Motion",
      icon: <TbBrandFramerMotion />,
      color: "rgba(187, 134, 252, 0.15)",
      category: "Animation",
      proficiency: 75,
    },
    {
      name: "Axios",
      icon: <SiAxios />,
      color: "rgba(90, 42, 142, 0.15)",
      category: "HTTP Client",
      proficiency: 85,
    },
    {
      name: "REST APIs",
      icon: <VscJson />,
      color: "rgba(102, 126, 234, 0.15)",
      category: "Integration",
      proficiency: 88,
    },
    {
      name: "Node.js",
      icon: <DiNodejsSmall />,
      color: "rgba(104, 160, 99, 0.15)",
      category: "Build Tools",
      proficiency: 70,
    },
  ];

  // Group skills by category - reorder categories for better flow
  const categoryOrder = [
    "Frontend",
    "Language",
    "State Management",
    "Data Fetching",
    "Styling",
    "Markup",
    "Animation",
    "HTTP Client",
    "Integration",
    "Version Control",
    "Build Tools",
  ];

  // Group skills by category
  const categories = skills.reduce((acc, skill) => {
    if (!acc[skill.category]) {
      acc[skill.category] = [];
    }
    acc[skill.category].push(skill);
    return acc;
  }, {});

  // Sort categories according to the defined order
  const sortedCategories = categoryOrder.filter((cat) => categories[cat]);

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.03,
      },
    },
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0 },
  };

  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5 }}
    >
      {/* Background decorative elements - scaled for better performance */}
      <BackgroundOrbs>
        <Orb1 />
        <Orb2 />
      </BackgroundOrbs>

      <Container>
        <Fade direction="up" duration={600} triggerOnce>
          <Header>
            <Badge>
              <span>Technical Expertise</span>
            </Badge>
            <Title>Skills & Technologies</Title>
            <Subtitle>
              Technologies I work with to build modern web applications
            </Subtitle>
          </Header>
        </Fade>

        {/* Skills by Category - with improved responsive layout */}
        {sortedCategories.map((category, categoryIndex) => (
          <CategorySection key={category}>
            <Fade
              direction="up"
              delay={200 + categoryIndex * 50}
              duration={500}
              triggerOnce
            >
              <CategoryHeader>
                <CategoryTitle>{category}</CategoryTitle>
                <CategoryLine />
              </CategoryHeader>
            </Fade>

            <Grid
              as={motion.div}
              variants={containerVariants}
              initial="hidden"
              animate="visible"
            >
              {categories[category].map((skill, index) => (
                <SkillCard
                  key={skill.name}
                  variants={itemVariants}
                  whileHover={{
                    y: -6,
                    transition: { type: "spring", stiffness: 300 },
                  }}
                  whileTap={{ scale: 0.98 }}
                >
                  <CardGlow color={skill.color} />

                  <CardContent>
                    <Zoom delay={index * 30} duration={300} triggerOnce>
                      <SkillIconWrapper color={skill.color}>
                        <SkillIcon>{skill.icon}</SkillIcon>
                      </SkillIconWrapper>
                    </Zoom>

                    <Slide
                      direction="up"
                      delay={index * 30 + 50}
                      duration={300}
                      triggerOnce
                    >
                      <SkillName>{skill.name}</SkillName>
                    </Slide>

                    {/* Proficiency Bar */}
                    <ProficiencyBar>
                      <ProficiencyFill
                        proficiency={skill.proficiency}
                        initial={{ width: 0 }}
                        animate={{ width: `${skill.proficiency}%` }}
                        transition={{
                          duration: 0.8,
                          delay: 0.3 + index * 0.05,
                        }}
                      />
                    </ProficiencyBar>

                    {/* Category Tag - hidden on very small screens for space */}
                    <CategoryTag className="category-tag">
                      {skill.category}
                    </CategoryTag>
                  </CardContent>
                </SkillCard>
              ))}
            </Grid>
          </CategorySection>
        ))}

        {/* Additional Info - improved styling */}
        <Fade direction="up" delay={600} duration={600} triggerOnce>
          <AdditionalInfo>
            <InfoText>
              <strong>⚡ Always Learning:</strong> Currently exploring Next.js,
              GraphQL, and advanced animation patterns.
            </InfoText>
          </AdditionalInfo>
        </Fade>
      </Container>
    </Section>
  );
};

export default SkillsGrid;

// Styled Components with improved responsiveness

const Section = styled(motion.section)`
  background: linear-gradient(135deg, #1a1a24 0%, #12121a 100%);
  border-radius: 32px;
  padding: 60px 40px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 24px;
  position: relative;
  overflow: hidden;

  @media (max-width: 1024px) {
    padding: 50px 32px;
  }

  @media (max-width: 768px) {
    padding: 40px 24px;
    border-radius: 24px;
  }

  @media (max-width: 480px) {
    padding: 32px 16px;
    border-radius: 20px;
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
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(102, 126, 234, 0.05) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(50px);

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    filter: blur(40px);
  }
`;

const Orb2 = styled.div`
  position: absolute;
  bottom: -20%;
  left: -10%;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(118, 75, 162, 0.05) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(50px);

  @media (max-width: 768px) {
    width: 300px;
    height: 300px;
    filter: blur(40px);
  }
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  position: relative;
  z-index: 2;
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 40px;

  @media (max-width: 768px) {
    margin-bottom: 32px;
  }

  @media (max-width: 480px) {
    margin-bottom: 28px;
  }
`;

const Badge = styled.div`
  display: inline-block;
  background: rgba(102, 126, 234, 0.08);
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 30px;
  padding: 6px 16px;
  margin-bottom: 16px;
  color: #88aaff;
  font-size: 13px;
  font-weight: 500;
  text-transform: uppercase;
  letter-spacing: 1px;

  @media (max-width: 480px) {
    padding: 4px 12px;
    font-size: 11px;
    margin-bottom: 12px;
  }
`;

const Title = styled.h2`
  font-size: 32px;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin-bottom: 12px;
  letter-spacing: -0.5px;

  @media (max-width: 1024px) {
    font-size: 28px;
  }

  @media (max-width: 768px) {
    font-size: 24px;
    margin-bottom: 8px;
  }

  @media (max-width: 480px) {
    font-size: 22px;
  }
`;

const Subtitle = styled.p`
  font-size: 15px;
  color: #999;
  max-width: 500px;
  margin: 0 auto;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 14px;
    max-width: 400px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
    max-width: 280px;
  }
`;

const CategorySection = styled.div`
  margin-bottom: 48px;

  &:last-child {
    margin-bottom: 0;
  }

  @media (max-width: 768px) {
    margin-bottom: 40px;
  }

  @media (max-width: 480px) {
    margin-bottom: 32px;
  }
`;

const CategoryHeader = styled.div`
  display: flex;
  align-items: center;
  gap: 16px;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    gap: 12px;
    margin-bottom: 20px;
  }

  @media (max-width: 480px) {
    gap: 10px;
    margin-bottom: 16px;
  }
`;

const CategoryTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #88aaff;
  text-transform: uppercase;
  letter-spacing: 1px;
  white-space: nowrap;

  @media (max-width: 1024px) {
    font-size: 17px;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;

const CategoryLine = styled.div`
  flex: 1;
  height: 1px;
  background: linear-gradient(
    90deg,
    rgba(102, 126, 234, 0.3) 0%,
    transparent 100%
  );
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(160px, 1fr));
  gap: 20px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(auto-fill, minmax(150px, 1fr));
    gap: 18px;
  }

  @media (max-width: 900px) {
    grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
    gap: 16px;
  }

  @media (max-width: 700px) {
    grid-template-columns: repeat(auto-fill, minmax(130px, 1fr));
    gap: 14px;
  }

  @media (max-width: 550px) {
    grid-template-columns: repeat(auto-fill, minmax(110px, 1fr));
    gap: 12px;
  }

  @media (max-width: 400px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 10px;
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 20px;
  padding: 20px 12px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;
  backdrop-filter: blur(8px);

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
  }

  &:hover {
    border-color: rgba(102, 126, 234, 0.25);
    box-shadow: 0 10px 25px rgba(102, 126, 234, 0.15);
    background: rgba(255, 255, 255, 0.03);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 900px) {
    padding: 18px 10px;
    border-radius: 18px;
  }

  @media (max-width: 700px) {
    padding: 16px 8px;
    border-radius: 16px;
  }

  @media (max-width: 550px) {
    padding: 14px 6px;
    border-radius: 14px;
  }

  @media (max-width: 400px) {
    padding: 12px 4px;
  }
`;

const CardGlow = styled.div`
  position: absolute;
  top: -50%;
  left: -50%;
  width: 200%;
  height: 200%;
  background: ${(props) => props.color || "rgba(102, 126, 234, 0.1)"};
  opacity: 0.2;
  filter: blur(30px);
  pointer-events: none;

  @media (max-width: 700px) {
    filter: blur(20px);
  }
`;

const CardContent = styled.div`
  position: relative;
  z-index: 2;
`;

const SkillIconWrapper = styled.div`
  width: 55px;
  height: 55px;
  border-radius: 16px;
  background: ${(props) => props.color || "rgba(102, 126, 234, 0.1)"};
  margin: 0 auto 14px;
  display: flex;
  align-items: center;
  justify-content: center;
  transition: all 0.3s ease;
  border: 1px solid rgba(255, 255, 255, 0.05);

  ${SkillCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: ${(props) =>
      props.color?.replace("0.15", "0.25") || "rgba(102, 126, 234, 0.2)"};
  }

  @media (max-width: 900px) {
    width: 50px;
    height: 50px;
    margin-bottom: 12px;
  }

  @media (max-width: 700px) {
    width: 45px;
    height: 45px;
    margin-bottom: 10px;
    border-radius: 14px;
  }

  @media (max-width: 550px) {
    width: 40px;
    height: 40px;
    margin-bottom: 8px;
    border-radius: 12px;
  }

  @media (max-width: 400px) {
    width: 35px;
    height: 35px;
    margin-bottom: 6px;
    border-radius: 10px;
  }
`;

const SkillIcon = styled.div`
  font-size: 30px;
  color: white;

  svg {
    width: 30px;
    height: 30px;
  }

  @media (max-width: 900px) {
    font-size: 28px;

    svg {
      width: 28px;
      height: 28px;
    }
  }

  @media (max-width: 700px) {
    font-size: 26px;

    svg {
      width: 26px;
      height: 26px;
    }
  }

  @media (max-width: 550px) {
    font-size: 22px;

    svg {
      width: 22px;
      height: 22px;
    }
  }

  @media (max-width: 400px) {
    font-size: 20px;

    svg {
      width: 20px;
      height: 20px;
    }
  }
`;

const SkillName = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;
  line-height: 1.4;

  ${SkillCard}:hover & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 900px) {
    font-size: 13px;
    margin-bottom: 6px;
  }

  @media (max-width: 700px) {
    font-size: 12px;
    margin-bottom: 5px;
  }

  @media (max-width: 550px) {
    font-size: 11px;
    margin-bottom: 4px;
  }

  @media (max-width: 400px) {
    font-size: 10px;
    margin-bottom: 3px;
  }
`;

const ProficiencyBar = styled.div`
  width: 100%;
  height: 4px;
  background: rgba(255, 255, 255, 0.05);
  border-radius: 4px;
  margin: 10px 0 8px;
  overflow: hidden;

  @media (max-width: 700px) {
    height: 3px;
    margin: 8px 0 6px;
  }

  @media (max-width: 550px) {
    height: 2px;
    margin: 6px 0 4px;
  }
`;

const ProficiencyFill = styled(motion.div)`
  height: 100%;
  background: linear-gradient(90deg, #667eea 0%, #764ba2 100%);
  border-radius: 4px;
`;

const CategoryTag = styled.span`
  display: inline-block;
  font-size: 9px;
  padding: 3px 6px;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 20px;
  color: #88aaff;
  font-weight: 500;

  @media (max-width: 900px) {
    font-size: 8px;
    padding: 2px 5px;
  }

  @media (max-width: 700px) {
    font-size: 7px;
    padding: 2px 4px;
  }

  @media (max-width: 550px) {
    display: none; /* Hide on very small screens to save space */
  }
`;

const AdditionalInfo = styled.div`
  margin-top: 40px;
  padding: 18px 24px;
  background: rgba(102, 126, 234, 0.05);
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-radius: 50px;
  text-align: center;

  @media (max-width: 768px) {
    margin-top: 32px;
    padding: 16px 20px;
    border-radius: 40px;
  }

  @media (max-width: 480px) {
    margin-top: 28px;
    padding: 14px 16px;
    border-radius: 30px;
  }
`;

const InfoText = styled.p`
  font-size: 14px;
  color: #999;
  line-height: 1.6;

  strong {
    color: #88aaff;
    font-weight: 600;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }

  @media (max-width: 480px) {
    font-size: 12px;
  }
`;
