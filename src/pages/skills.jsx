import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";

const SkillsGrid = () => {
  const skills = [
    {
      name: "React",
      icon: "⚛️",
      color: "rgba(97, 218, 251, 0.15)",
    },
    {
      name: "JavaScript",
      icon: "📜",
      color: "rgba(247, 223, 30, 0.15)",
    },
    {
      name: "Redux",
      icon: "🔄",
      color: "rgba(118, 74, 188, 0.15)",
    },
    {
      name: "RTK Query",
      icon: "🔌",
      color: "rgba(118, 74, 188, 0.15)",
    },
    {
      name: "Styled Components",
      level: "Advanced",
      icon: "💅",
      color: "rgba(219, 112, 147, 0.15)",
    },
    {
      name: "CSS",
      level: "Advanced",
      icon: "🎨",
      color: "rgba(38, 77, 228, 0.15)",
    },
    {
      name: "HTML",
      level: "Expert",
      icon: "📄",
      color: "rgba(227, 79, 38, 0.15)",
    },
    {
      name: "Git",
      icon: "📦",
      color: "rgba(240, 80, 51, 0.15)",
    },
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    visible: {
      opacity: 1,
      transition: {
        staggerChildren: 0.05,
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
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Title>Skills & Technologies</Title>
      <Grid
        as={motion.div}
        variants={containerVariants}
        initial="hidden"
        animate="visible"
      >
        {skills.map((skill) => (
          <SkillCard
            key={skill.name}
            variants={itemVariants}
            whileHover={{ scale: 1.05 }}
          >
            <SkillIcon color={skill.color}>{skill.icon}</SkillIcon>
            <SkillName>{skill.name}</SkillName>
          </SkillCard>
        ))}
      </Grid>
    </Section>
  );
};

export default SkillsGrid;
const Section = styled(motion.section)`
  background: linear-gradient(135deg, #1a1a24 0%, #12121a 100%);
  border-radius: 24px;
  padding: 40px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  margin-bottom: 24px;

  @media (max-width: 768px) {
    padding: 24px;
    border-radius: 16px;
    margin-bottom: 16px;
  }
`;

const Title = styled.h2`
  font-size: 24px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 20px;
    margin-bottom: 20px;
  }
`;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fill, minmax(140px, 1fr));
  gap: 16px;

  @media (max-width: 600px) {
    grid-template-columns: repeat(auto-fill, minmax(100px, 1fr));
    gap: 12px;
  }
`;

const SkillCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 20px;
  text-align: center;
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.1);
    border-color: rgba(102, 126, 234, 0.2);
  }

  @media (max-width: 768px) {
    padding: 16px;
    border-radius: 12px;
  }
`;

const SkillIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${(props) => props.color || "rgba(102, 126, 234, 0.1)"};
  margin: 0 auto 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  font-size: 24px;

  @media (max-width: 768px) {
    width: 40px;
    height: 40px;
    font-size: 20px;
    margin-bottom: 10px;
  }
`;

const SkillName = styled.h3`
  font-size: 14px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 12px;
  }
`;

const SkillLevel = styled.p`
  font-size: 12px;
  color: #666;

  @media (max-width: 768px) {
    font-size: 11px;
  }
`;
