import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase, Heart } from "lucide-react";
import { Fade, Zoom, Slide, Bounce } from "react-awesome-reveal";

const AboutCard = () => {
  const infoItems = [
    { icon: MapPin, title: "Location", value: "Lagos, Nigeria" },
    { icon: Calendar, title: "Experience", value: "1+ Years" },
    { icon: Briefcase, title: "Status", value: "Open to Work" },
    { icon: Heart, title: "Passion", value: "Building UIs" },
  ];

  return (
    <Wrapper>
      <Fade direction="up" duration={600}>
        <Description>
          I'm a frontend developer with experience building web applications. I
          specialize in React, JavaScript, styled-components, and state
          management with Redux and RTK Query. I'm passionate about creating
          clean, efficient code and delivering exceptional user experiences that
          make a real difference.
        </Description>
      </Fade>

      <InfoGrid>
        {infoItems.map((item, index) => (
          <Fade
            key={item.title}
            direction="up"
            delay={index * 100}
            duration={500}
          >
            <InfoCard>
              <Bounce delay={index * 150} duration={400}>
                <IconWrapper>
                  <item.icon size={24} />
                </IconWrapper>
              </Bounce>
              <Slide direction="up" delay={index * 100 + 200} duration={400}>
                <InfoTitle>{item.title}</InfoTitle>
              </Slide>
              <Fade delay={index * 100 + 300} duration={400}>
                <InfoValue>{item.value}</InfoValue>
              </Fade>
            </InfoCard>
          </Fade>
        ))}
      </InfoGrid>
    </Wrapper>
  );
};

export default AboutCard;

const Wrapper = styled.div`
  margin-bottom: 48px;
`;

const Description = styled.p`
  font-size: 17px;
  color: #999;
  line-height: 1.8;
  text-align: center;
  max-width: 800px;
  margin: 0 auto 40px;

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 32px;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(4, 1fr);
  gap: 20px;

  @media (max-width: 900px) {
    grid-template-columns: repeat(2, 1fr);
  }

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 16px;
  }
`;

const InfoCard = styled.div`
  background: linear-gradient(135deg, #1a1a24 0%, #12121a 100%);
  border-radius: 20px;
  padding: 32px 24px;
  border: 1px solid rgba(255, 255, 255, 0.06);
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
      rgba(102, 126, 234, 0.05),
      transparent
    );
    transition: left 0.6s ease;
  }

  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-4px);
    box-shadow: 0 12px 30px rgba(0, 0, 0, 0.25);

    &::before {
      left: 100%;
    }
  }

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

const IconWrapper = styled.div`
  width: 60px;
  height: 60px;
  border-radius: 16px;
  background: rgba(102, 126, 234, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  margin: 0 auto 16px;
  transition: all 0.3s ease;

  ${InfoCard}:hover & {
    background: rgba(102, 126, 234, 0.15);
    transform: scale(1.05);
    box-shadow: 0 8px 20px rgba(102, 126, 234, 0.2);
  }

  @media (max-width: 768px) {
    width: 50px;
    height: 50px;
  }
`;

const InfoTitle = styled.h4`
  font-size: 15px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 6px;
  transition: color 0.3s ease;

  ${InfoCard}:hover & {
    color: #667eea;
  }
`;

const InfoValue = styled.p`
  font-size: 14px;
  color: #888;
  transition: color 0.3s ease;

  ${InfoCard}:hover & {
    color: #ccc;
  }
`;
