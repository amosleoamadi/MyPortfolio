import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Layout, Database, Smartphone, Palette } from "lucide-react";

const Services = () => {
  const services = [
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Building responsive, interactive user interfaces with React, JavaScript, and modern CSS frameworks.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: Database,
      title: "State Management",
      description:
        "Implementing efficient state management solutions using Redux and RTK Query for scalable apps.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description:
        "Ensuring seamless experiences across all devices with mobile-first, responsive layouts.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
  ];
  return (
    <Section
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.2 }}
    >
      <Header>
        <Title>What I Do</Title>
        <Subtitle>Services I offer to bring your ideas to life</Subtitle>
      </Header>
      <Grid>
        {services.map((service, index) => (
          <ServiceCard
            key={service.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: 0.1 * index }}
            whileHover={{ y: -4 }}
          >
            <IconWrapper gradient={service.gradient}>
              <service.icon size={22} />
            </IconWrapper>
            <ServiceTitle>{service.title}</ServiceTitle>
            <ServiceDescription>{service.description}</ServiceDescription>
          </ServiceCard>
        ))}
      </Grid>
    </Section>
  );
};

export default Services;
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
  grid-template-columns: repeat(2, 1fr);
  gap: 20px;

  @media (max-width: 700px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const ServiceCard = styled(motion.div)`
  background: rgba(255, 255, 255, 0.02);
  border: 1px solid rgba(255, 255, 255, 0.04);
  border-radius: 16px;
  padding: 28px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    background: rgba(102, 126, 234, 0.05);
  }

  @media (max-width: 768px) {
    padding: 20px;
  }
`;

const IconWrapper = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 12px;
  background: ${(props) => props.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin-bottom: 16px;
  color: white;

  @media (max-width: 768px) {
    width: 42px;
    height: 42px;
    margin-bottom: 12px;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  color: #888;
  line-height: 1.6;

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
