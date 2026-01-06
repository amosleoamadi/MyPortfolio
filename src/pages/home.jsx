import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import { Download, Mail, Sparkles } from "lucide-react";
import {
  Reveal,
  Fade,
  Slide,
  Zoom,
  Bounce,
  JackInTheBox,
  Roll,
  Rotate,
  Flip,
} from "react-awesome-reveal";
import myImage from "../assets/myImage.jpg";

const HeroSection = () => {
  const [showDownloadSuccess, setShowDownloadSuccess] = useState(false);

  const handleDownloadCV = () => {
    const link = document.createElement("a");
    link.href = "/My_Resume.pdf";
    link.download = "My_Resume.pdf";
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);

    setShowDownloadSuccess(true);
    setTimeout(() => setShowDownloadSuccess(false), 5000);
  };

  return (
    <Section>
      <Container>
        <Content>
          <Fade duration={600}>
            <Badge>
              <Sparkles size={16} />
              Welcome to my portfolio
            </Badge>
          </Fade>

          <Fade delay={100} duration={600}>
            <Greeting>Hello, I'm</Greeting>
          </Fade>

          <Slide direction="up" delay={200} duration={800}>
            <Title>
              <span>Amadi Amos Leo</span>
            </Title>
          </Slide>

          <Fade delay={300} duration={600}>
            <Role>Frontend Developer</Role>
          </Fade>

          <Fade delay={400} duration={800}>
            <Description>
              A passionate frontend developer specializing in React, JavaScript,
              and modern web technologies. I build beautiful, responsive, and
              user-friendly web applications that deliver exceptional
              experiences.
            </Description>
          </Fade>

          <Fade delay={500} duration={700}>
            <ButtonGroup>
              <PrimaryButton
                href="#contact"
                whileHover={{
                  scale: 1.02,
                  boxShadow: "0 12px 40px rgba(102, 126, 234, 0.45)",
                }}
                whileTap={{ scale: 0.98 }}
              >
                <Mail size={18} />
                Get In Touch
              </PrimaryButton>
              <SecondaryButton
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                My Resume
              </SecondaryButton>
            </ButtonGroup>
          </Fade>

          {/* Download Success Notification */}
          {showDownloadSuccess && (
            <Zoom duration={500}>
              <SuccessNotification>
                <Sparkles size={16} />
                CV downloaded successfully!
              </SuccessNotification>
            </Zoom>
          )}
        </Content>

        <ImageWrapper>
          <JackInTheBox delay={300} duration={800}>
            <ProfileImage>
              <img src={myImage} alt="Amadi Amos Leo - Frontend Developer" />
            </ProfileImage>
          </JackInTheBox>

          <Bounce delay={700} duration={600}>
            <StatusBadge>
              <StatusDot />
              <StatusText>Available for work</StatusText>
            </StatusBadge>
          </Bounce>
        </ImageWrapper>
      </Container>
    </Section>
  );
};

export default HeroSection;

const Section = styled.section`
  min-height: calc(100vh - 80px);
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 80px 0;
  position: relative;
  overflow: hidden;

  &::before {
    content: "";
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 800px;
    height: 800px;
    background: radial-gradient(
      circle,
      rgba(102, 126, 234, 0.08) 0%,
      transparent 70%
    );
    pointer-events: none;
  }

  @media (max-width: 768px) {
    min-height: auto;
    padding: 60px 0;
  }
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 80px;
  width: 100%;

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 40px;
    text-align: center;
  }
`;

const Content = styled.div`
  flex: 1;
  position: relative;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
  padding: 10px 20px;
  border-radius: 50px;
  font-size: 14px;
  color: #667eea;
  margin-bottom: 28px;

  @media (max-width: 768px) {
    padding: 8px 16px;
    font-size: 13px;
    margin-bottom: 20px;
  }
`;

const Greeting = styled.span`
  display: block;
  font-size: 20px;
  color: #888;
  margin-bottom: 12px;
  font-weight: 400;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Title = styled.h1`
  font-size: 56px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 16px;

  span {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 36px;
  }

  @media (max-width: 480px) {
    font-size: 28px;
  }
`;

const Role = styled.h2`
  font-size: 24px;
  font-weight: 500;
  color: #667eea;
  margin-bottom: 20px;

  @media (max-width: 768px) {
    font-size: 18px;
    margin-bottom: 16px;
  }
`;

const Description = styled.p`
  font-size: 17px;
  color: #999;
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 36px;

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 28px;
  }
`;

const ButtonGroup = styled.div`
  display: flex;
  gap: 16px;
  flex-wrap: wrap;

  @media (max-width: 900px) {
    justify-content: center;
  }

  @media (max-width: 480px) {
    flex-direction: column;
    width: 100%;
  }
`;

const PrimaryButton = styled(motion.a)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.35);
  cursor: pointer;

  @media (max-width: 768px) {
    padding: 14px 24px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SecondaryButton = styled(motion.button)`
  display: inline-flex;
  align-items: center;
  justify-content: center;
  gap: 10px;
  background: transparent;
  color: white;
  padding: 16px 32px;
  border-radius: 12px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.15);
  cursor: pointer;
  font-family: inherit;

  &:hover {
    background: rgba(255, 255, 255, 0.05);
    border-color: rgba(255, 255, 255, 0.25);
  }

  @media (max-width: 768px) {
    padding: 14px 24px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SuccessNotification = styled.div`
  position: absolute;
  bottom: -80px;
  left: 0;
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.2);
  padding: 12px 20px;
  border-radius: 50px;
  font-size: 14px;
  color: #22c55e;
  margin-top: 20px;

  @media (max-width: 900px) {
    position: relative;
    bottom: auto;
    left: auto;
    margin-top: 20px;
    justify-content: center;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
`;

const ProfileImage = styled.div`
  width: 380px;
  height: 380px;
  border-radius: 50%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  border: 4px solid rgba(102, 126, 234, 0.3);
  box-shadow: 0 20px 60px rgba(102, 126, 234, 0.25);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }

  &::before {
    content: "";
    position: absolute;
    inset: -8px;
    border-radius: 50%;
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    z-index: -1;
    opacity: 0.2;
    filter: blur(30px);
  }

  @media (max-width: 900px) {
    width: 280px;
    height: 280px;
  }

  @media (max-width: 480px) {
    width: 220px;
    height: 220px;
  }
`;

const StatusBadge = styled.div`
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  gap: 8px;
  background: rgba(18, 18, 26, 0.95);
  padding: 12px 20px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 2;

  @media (max-width: 900px) {
    bottom: 20px;
    right: 20px;
    padding: 10px 16px;
  }
`;

const StatusDot = styled.span`
  width: 10px;
  height: 10px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;

  @keyframes pulse {
    0%,
    100% {
      opacity: 1;
    }
    50% {
      opacity: 0.5;
    }
  }
`;

const StatusText = styled.span`
  font-size: 13px;
  color: #ffffff;
  font-weight: 500;
`;
