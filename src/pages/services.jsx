import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Layout, Database, Smartphone, Palette } from "lucide-react";
import { Fade, Zoom, Slide } from "react-awesome-reveal";

const ServicesSection = () => {
  const services = [
    {
      icon: Layout,
      title: "Frontend Development",
      description:
        "Building responsive, interactive user interfaces with React and JavaScript.",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
      shadow: "rgba(102, 126, 234, 0.3)",
    },
    {
      icon: Database,
      title: "State Management",
      description: "Efficient state management with Redux and RTK Query.",
      gradient: "linear-gradient(135deg, #4facfe 0%, #00f2fe 100%)",
      shadow: "rgba(79, 172, 254, 0.3)",
    },
    {
      icon: Smartphone,
      title: "Responsive Design",
      description: "Seamless experiences across all devices and screen sizes.",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
      shadow: "rgba(67, 233, 123, 0.3)",
    },
  ];

  return (
    <Grid>
      {services.map((service, index) => (
        <Fade
          key={service.title}
          direction="up"
          delay={index * 100}
          duration={600}
          triggerOnce
          cascade
        >
          <ServiceCard>
            <Zoom delay={index * 150} duration={500} triggerOnce>
              <IconWrapper gradient={service.gradient} shadow={service.shadow}>
                <service.icon size={28} />
              </IconWrapper>
            </Zoom>
            <Slide
              direction="up"
              delay={index * 100 + 200}
              duration={500}
              triggerOnce
            >
              <ServiceTitle>{service.title}</ServiceTitle>
            </Slide>
            <Fade delay={index * 100 + 300} duration={500} triggerOnce>
              <ServiceDescription>{service.description}</ServiceDescription>
            </Fade>
          </ServiceCard>
        </Fade>
      ))}
    </Grid>
  );
};

export default ServicesSection;

const Grid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 24px;

  @media (max-width: 1024px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 600px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const ServiceCard = styled.div`
  background: linear-gradient(135deg, #1a1a24 0%, #12121a 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  border-radius: 20px;
  padding: 32px 24px;
  text-align: center;
  transition: all 0.3s ease;
  position: relative;
  overflow: hidden;

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
      rgba(255, 255, 255, 0.03),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-6px);
    box-shadow: 0 20px 40px rgba(0, 0, 0, 0.3);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background: ${(props) => props.gradient};
  display: flex;
  align-items: center;
  justify-content: center;
  margin: 0 auto 20px;
  color: white;
  box-shadow: 0 8px 24px ${(props) => props.shadow};
  transition: transform 0.3s ease;

  ${ServiceCard}:hover & {
    transform: scale(1.1) rotate(5deg);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 16px;
  }
`;

const ServiceTitle = styled.h3`
  font-size: 18px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 12px;
  transition: color 0.3s ease;

  ${ServiceCard}:hover & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const ServiceDescription = styled.p`
  font-size: 14px;
  color: #888;
  line-height: 1.7;
  transition: color 0.3s ease;

  ${ServiceCard}:hover & {
    color: #ccc;
  }

  @media (max-width: 768px) {
    font-size: 13px;
  }
`;
