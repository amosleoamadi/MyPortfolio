import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { MapPin, Calendar, Briefcase } from "lucide-react";

const AboutPage = () => {
  return (
    <Card
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay: 0.1 }}
    >
      <Header>
        <Title>About Me</Title>
      </Header>
      <Description>
        I'm a frontend developer with experience building web applications. I
        specialize in React, JavaScript, styled-components, and state management
        with Redux. I'm passionate about creating clean, efficient code and
        delivering exceptional user experiences.
      </Description>
      <InfoGrid>
        <InfoItem>
          <IconWrapper>
            <MapPin size={18} />
          </IconWrapper>
          <InfoText>
            <h4>Location</h4>
            <p>Olodi-Apapa, Lagos</p>
          </InfoText>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <Calendar size={18} />
          </IconWrapper>
          <InfoText>
            <h4>Experience</h4>
            <p>6+ Months</p>
          </InfoText>
        </InfoItem>
        <InfoItem>
          <IconWrapper>
            <Briefcase size={18} />
          </IconWrapper>
          <InfoText>
            <h4>Status</h4>
            <p>Open to Work</p>
          </InfoText>
        </InfoItem>
      </InfoGrid>
    </Card>
  );
};

export default AboutPage;

const Card = styled(motion.section)`
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
  margin-bottom: 24px;

  @media (max-width: 768px) {
    margin-bottom: 16px;
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

const Description = styled.p`
  font-size: 15px;
  color: #888;
  line-height: 1.7;
  margin-bottom: 24px;

  @media (max-width: 768px) {
    font-size: 14px;
    margin-bottom: 20px;
  }
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  gap: 16px;

  @media (max-width: 480px) {
    grid-template-columns: 1fr;
    gap: 12px;
  }
`;

const InfoItem = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  padding: 16px;
  background: rgba(255, 255, 255, 0.02);
  border-radius: 12px;
  border: 1px solid rgba(255, 255, 255, 0.04);

  @media (max-width: 768px) {
    padding: 14px;
    gap: 10px;
  }
`;

const IconWrapper = styled.div`
  width: 40px;
  height: 40px;
  border-radius: 10px;
  background: rgba(102, 126, 234, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  flex-shrink: 0;

  @media (max-width: 768px) {
    width: 36px;
    height: 36px;
  }
`;

const InfoText = styled.div`
  h4 {
    font-size: 14px;
    font-weight: 600;
    color: #ffffff;
    margin-bottom: 2px;
  }

  p {
    font-size: 13px;
    color: #666;
  }

  @media (max-width: 768px) {
    h4 {
      font-size: 13px;
    }
    p {
      font-size: 12px;
    }
  }
`;
