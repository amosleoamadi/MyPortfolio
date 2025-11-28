import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Briefcase, Code, Coffee, Users } from "lucide-react";

const StatsSection = () => {
  const stats = [
    {
      icon: Briefcase,
      value: "3+",
      label: "Projects Completed",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: Code,
      value: "5+",
      label: "Technologies",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: Coffee,
      value: "500+",
      label: "Cups of Coffee",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      icon: Users,
      value: "100%",
      label: "Client Satisfaction",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
  ];
  return (
    <Section>
      {stats.map((stat, index) => (
        <StatCard
          key={stat.label}
          gradient={stat.gradient}
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.5, delay: 0.1 * index }}
          whileHover={{ y: -4 }}
        >
          <IconWrapper gradient={stat.gradient}>
            <stat.icon size={24} />
          </IconWrapper>
          <StatContent>
            <StatValue>{stat.value}</StatValue>
            <StatLabel>{stat.label}</StatLabel>
          </StatContent>
        </StatCard>
      ))}
    </Section>
  );
};

export default StatsSection;
const Section = styled(motion.section)`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;
  margin-bottom: 24px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 500px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const StatCard = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a24 0%, #12121a 100%);
  border-radius: 20px;
  padding: 28px;
  border: 1px solid rgba(255, 255, 255, 0.06);
  display: flex;
  flex-direction: column;
  align-items: center;
  text-align: center;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: 0;
    right: 0;
    height: 3px;
    background: ${(props) => props.gradient};
  }

  @media (max-width: 768px) {
    padding: 20px;
    border-radius: 16px;
  }

  @media (max-width: 500px) {
    flex-direction: row;
    text-align: left;
    gap: 16px;
  }
`;

const IconWrapper = styled.div`
  width: 56px;
  height: 56px;
  border-radius: 16px;
  background: ${(props) => props.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: white;

  @media (max-width: 768px) {
    width: 48px;
    height: 48px;
    border-radius: 12px;
  }

  @media (max-width: 500px) {
    margin-bottom: 0;
    flex-shrink: 0;
  }
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  @media (max-width: 500px) {
    align-items: flex-start;
  }
`;

const StatValue = styled.span`
  font-size: 32px;
  font-weight: 700;
  color: #ffffff;
  margin-bottom: 4px;

  @media (max-width: 768px) {
    font-size: 26px;
  }
`;

const StatLabel = styled.span`
  font-size: 14px;
  color: #888;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
