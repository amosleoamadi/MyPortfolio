import React, { useState } from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  Download,
  Mail,
  Sparkles,
  ArrowRight,
  Code,
  Zap,
  Award,
} from "lucide-react";
import {
  Fade,
  Slide,
  Zoom,
  Bounce,
  JackInTheBox,
  Rotate,
} from "react-awesome-reveal";
import myImage from "../assets/professionalImage.jpeg";

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
      {/* Background decorative elements */}
      <BackgroundElements>
        <GradientOrb1 />
        <GradientOrb2 />
        <GridPattern />
      </BackgroundElements>

      <Container>
        <Content>
          <Fade duration={600} triggerOnce>
            <BadgeWrapper>
              <Badge>
                <Sparkles size={16} />
                Welcome to my portfolio
              </Badge>
            </BadgeWrapper>
          </Fade>

          <Fade delay={100} duration={600} triggerOnce>
            <Greeting>Hello, I'm</Greeting>
          </Fade>

          <Slide direction="up" delay={200} duration={800} triggerOnce>
            <Title>
              <NameHighlight>Amadi Amos Leo</NameHighlight>
            </Title>
          </Slide>

          <Fade delay={300} duration={600} triggerOnce>
            <RoleContainer>
              <RoleIcon>
                <Code size={20} />
              </RoleIcon>
              <Role>Frontend Developer</Role>
            </RoleContainer>
          </Fade>

          <Fade delay={400} duration={800} triggerOnce>
            <Description>
              A passionate frontend developer specializing in React, JavaScript,
              and modern web technologies. I build beautiful, responsive, and
              user-friendly web applications that deliver exceptional
              experiences.
            </Description>
          </Fade>

          {/* Tech Stack Pills */}
          <Fade delay={450} duration={600} triggerOnce>
            <TechStack>
              <TechPill>React</TechPill>
              <TechPill>JavaScript</TechPill>
              <TechPill>TypeScript</TechPill>
              <TechPill>Tailwind</TechPill>
              <TechPill>Node.js</TechPill>
            </TechStack>
          </Fade>

          <Fade delay={500} duration={700} triggerOnce>
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
                <span>Get In Touch</span>
                <ArrowRight size={16} />
              </PrimaryButton>
              <SecondaryButton
                onClick={handleDownloadCV}
                whileHover={{ scale: 1.02 }}
                whileTap={{ scale: 0.98 }}
              >
                <Download size={18} />
                <span>Download CV</span>
              </SecondaryButton>
            </ButtonGroup>
          </Fade>

          {/* Download Success Notification */}
          {showDownloadSuccess && (
            <Zoom duration={500} triggerOnce>
              <SuccessNotification>
                <Sparkles size={16} />
                <span>CV downloaded successfully!</span>
              </SuccessNotification>
            </Zoom>
          )}
        </Content>

        <ImageWrapper>
          <JackInTheBox delay={300} duration={800} triggerOnce>
            <ProfileImageContainer>
              <ProfileImage>
                <img src={myImage} alt="Amadi Amos Leo - Frontend Developer" />
              </ProfileImage>
              <ImageGlow />
            </ProfileImageContainer>
          </JackInTheBox>

          {/* Experience Badge - Adjusted positioning for mobile */}
          <Rotate delay={500} duration={800} triggerOnce>
            <ExperienceBadge className="experience-badge">
              <Award size={20} />
              <div>
                <strong>3+ Years</strong>
                <span>Experience</span>
              </div>
            </ExperienceBadge>
          </Rotate>

          <Bounce delay={700} duration={600} triggerOnce>
            <StatusBadge>
              <StatusDot />
              <StatusText>Available for work</StatusText>
              <Zap size={14} />
            </StatusBadge>
          </Bounce>

          {/* Floating Elements */}
          <FloatingElement1>
            <Code size={16} />
          </FloatingElement1>
          <FloatingElement2>
            <Zap size={16} />
          </FloatingElement2>
        </ImageWrapper>
      </Container>

      {/* Scroll Indicator */}
      <ScrollIndicator>
        <ScrollText>Scroll</ScrollText>
        <ScrollLine />
      </ScrollIndicator>
    </Section>
  );
};

export default HeroSection;

// Styled Components with enhanced design and fixed mobile issues

const Section = styled.section`
  min-height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 100px 0;
  position: relative;
  overflow: hidden;

  @media (max-width: 768px) {
    min-height: auto;
    padding: 60px 0 40px;
  }
`;

const BackgroundElements = styled.div`
  position: absolute;
  inset: 0;
  pointer-events: none;
  z-index: 0;
`;

const GradientOrb1 = styled.div`
  position: absolute;
  top: -20%;
  right: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(102, 126, 234, 0.08) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(60px);

  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const GradientOrb2 = styled.div`
  position: absolute;
  bottom: -20%;
  left: -10%;
  width: 600px;
  height: 600px;
  background: radial-gradient(
    circle,
    rgba(118, 75, 162, 0.08) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(60px);

  @media (max-width: 768px) {
    width: 400px;
    height: 400px;
  }
`;

const GridPattern = styled.div`
  position: absolute;
  inset: 0;
  background-image:
    linear-gradient(rgba(102, 126, 234, 0.03) 1px, transparent 1px),
    linear-gradient(90deg, rgba(102, 126, 234, 0.03) 1px, transparent 1px);
  background-size: 50px 50px;
  opacity: 0.5;
`;

const Container = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  gap: 100px; /* Increased gap between text and image */
  width: 100%;
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    padding: 0 32px;
    gap: 60px;
  }

  @media (max-width: 900px) {
    flex-direction: column-reverse;
    gap: 50px; /* Increased gap on mobile */
    text-align: center;
    padding: 0 24px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
    gap: 40px;
  }
`;

const Content = styled.div`
  flex: 1;
  position: relative;
  max-width: 600px;
`;

const BadgeWrapper = styled.div`
  display: inline-block;
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.15) 0%,
    rgba(102, 126, 234, 0.05) 100%
  );
  border: 1px solid rgba(102, 126, 234, 0.25);
  padding: 10px 24px;
  border-radius: 50px;
  font-size: 14px;
  color: #88aaff;
  margin-bottom: 28px;
  backdrop-filter: blur(10px);
  box-shadow: 0 4px 20px rgba(102, 126, 234, 0.1);

  @media (max-width: 768px) {
    padding: 8px 20px;
    font-size: 13px;
    margin-bottom: 20px;
  }
`;

const Greeting = styled.span`
  display: block;
  font-size: 20px;
  color: #999;
  margin-bottom: 12px;
  font-weight: 400;
  letter-spacing: 0.5px;

  @media (max-width: 768px) {
    font-size: 16px;
  }
`;

const Title = styled.h1`
  font-size: 55px;
  font-weight: 800;
  color: #ffffff;
  line-height: 1.1;
  margin-bottom: 20px;
  letter-spacing: -1px;

  @media (max-width: 1024px) {
    font-size: 54px;
  }

  @media (max-width: 768px) {
    font-size: 40px;
  }

  @media (max-width: 480px) {
    font-size: 32px;
  }
`;

const NameHighlight = styled.span`
  background: linear-gradient(135deg, #667eea 0%, #a78bfa 50%, #764ba2 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  background-size: 100% 100%;
  animation: gradient 8s ease infinite;

  @keyframes gradient {
    0%,
    100% {
      background-position: 0% 50%;
    }
    50% {
      background-position: 100% 50%;
    }
  }
`;

const RoleContainer = styled.div`
  display: flex;
  align-items: center;
  gap: 12px;
  margin-bottom: 20px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const RoleIcon = styled.div`
  width: 40px;
  height: 40px;
  background: rgba(102, 126, 234, 0.15);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #88aaff;
`;

const Role = styled.h2`
  font-size: 26px;
  font-weight: 600;
  color: #ffffff;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const Description = styled.p`
  font-size: 17px;
  color: #999;
  line-height: 1.8;
  max-width: 520px;
  margin-bottom: 28px;

  @media (max-width: 900px) {
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 768px) {
    font-size: 15px;
    margin-bottom: 24px;
  }
`;

const TechStack = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 10px;
  margin-bottom: 32px;

  @media (max-width: 900px) {
    justify-content: center;
  }
`;

const TechPill = styled.span`
  font-size: 12px;
  padding: 6px 14px;
  background: rgba(102, 126, 234, 0.08);
  color: #88aaff;
  border-radius: 30px;
  font-weight: 500;
  border: 1px solid rgba(102, 126, 234, 0.15);
  backdrop-filter: blur(5px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(102, 126, 234, 0.15);
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-2px);
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
  border-radius: 14px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  box-shadow: 0 8px 32px rgba(102, 126, 234, 0.35);
  cursor: pointer;
  border: none;
  transition: all 0.3s ease;

  @media (max-width: 768px) {
    padding: 14px 28px;
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
  background: rgba(255, 255, 255, 0.03);
  color: white;
  padding: 16px 32px;
  border-radius: 14px;
  font-weight: 600;
  font-size: 15px;
  text-decoration: none;
  border: 2px solid rgba(255, 255, 255, 0.1);
  cursor: pointer;
  font-family: inherit;
  backdrop-filter: blur(10px);
  transition: all 0.3s ease;

  &:hover {
    background: rgba(255, 255, 255, 0.08);
    border-color: rgba(255, 255, 255, 0.2);
  }

  @media (max-width: 768px) {
    padding: 14px 28px;
    font-size: 14px;
  }

  @media (max-width: 480px) {
    width: 100%;
  }
`;

const SuccessNotification = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 10px;
  background: rgba(34, 197, 94, 0.1);
  border: 1px solid rgba(34, 197, 94, 0.2);
  padding: 14px 24px;
  border-radius: 50px;
  font-size: 14px;
  color: #22c55e;
  margin-top: 24px;
  backdrop-filter: blur(10px);

  @media (max-width: 900px) {
    justify-content: center;
    width: 100%;
  }
`;

const ImageWrapper = styled.div`
  position: relative;
  flex-shrink: 0;
  margin-left: 20px; /* Added margin to create space on the left */

  @media (max-width: 900px) {
    margin-left: 0;
    margin-bottom: 20px;
  }
`;

const ProfileImageContainer = styled.div`
  position: relative;
  width: 400px;
  height: 400px;

  @media (max-width: 1024px) {
    width: 340px;
    height: 340px;
  }

  @media (max-width: 900px) {
    width: 300px;
    height: 300px;
    margin: 0 auto;
  }

  @media (max-width: 480px) {
    width: 260px;
    height: 260px;
  }
`;

const ProfileImage = styled.div`
  width: 100%;
  height: 100%;
  border-radius: 38% 62% 42% 58% / 52% 48% 52% 48%;
  overflow: hidden;
  position: relative;
  z-index: 1;
  border: 3px solid rgba(102, 126, 234, 0.3);
  box-shadow: 0 30px 60px rgba(102, 126, 234, 0.25);
  animation: morph 8s ease-in-out infinite;

  @keyframes morph {
    0%,
    100% {
      border-radius: 38% 62% 42% 58% / 52% 48% 52% 48%;
    }
    33% {
      border-radius: 42% 58% 38% 62% / 48% 52% 48% 52%;
    }
    66% {
      border-radius: 58% 42% 62% 38% / 52% 48% 52% 48%;
    }
  }

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

const ImageGlow = styled.div`
  position: absolute;
  inset: -20px;
  background: radial-gradient(
    circle at 50% 50%,
    rgba(102, 126, 234, 0.2) 0%,
    transparent 70%
  );
  filter: blur(40px);
  z-index: 0;
`;

const ExperienceBadge = styled(motion.div)`
  position: absolute;
  top: 30px;
  left: -30px;
  background: linear-gradient(135deg, #1a1a28 0%, #12121a 100%);
  border: 1px solid rgba(102, 126, 234, 0.2);
  padding: 12px 20px;
  border-radius: 16px;
  display: flex;
  align-items: center;
  gap: 12px;
  z-index: 3;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  div {
    display: flex;
    flex-direction: column;
  }

  strong {
    font-size: 16px;
    color: #ffffff;
    font-weight: 700;
  }

  span {
    font-size: 12px;
    color: #999;
  }

  svg {
    color: #667eea;
  }

  @media (max-width: 1024px) {
    top: 20px;
    left: -20px;
    padding: 10px 18px;
  }

  @media (max-width: 900px) {
    top: 10px;
    left: 10px; /* Changed position on mobile to avoid covering image */
    padding: 8px 16px;

    strong {
      font-size: 14px;
    }

    span {
      font-size: 11px;
    }
  }

  @media (max-width: 480px) {
    top: 5px;
    left: 5px;
    padding: 6px 12px;
    gap: 8px;

    strong {
      font-size: 13px;
    }

    span {
      font-size: 10px;
    }
  }
`;

const StatusBadge = styled(motion.div)`
  position: absolute;
  bottom: 30px;
  right: 30px;
  display: flex;
  align-items: center;
  gap: 10px;
  background: linear-gradient(135deg, #1a1a28 0%, #12121a 100%);
  padding: 14px 24px;
  border-radius: 50px;
  border: 1px solid rgba(255, 255, 255, 0.1);
  z-index: 3;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 1024px) {
    bottom: 20px;
    right: 20px;
    padding: 12px 20px;
  }

  @media (max-width: 900px) {
    bottom: 10px;
    right: 10px;
    padding: 8px 16px;
    gap: 8px;
  }

  @media (max-width: 480px) {
    bottom: 5px;
    right: 5px;
    padding: 6px 12px;
  }
`;

const StatusDot = styled.span`
  width: 10px;
  height: 10px;
  background: #22c55e;
  border-radius: 50%;
  animation: pulse 2s infinite;
  box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);

  @keyframes pulse {
    0% {
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0.5);
    }
    70% {
      box-shadow: 0 0 0 10px rgba(34, 197, 94, 0);
    }
    100% {
      box-shadow: 0 0 0 0 rgba(34, 197, 94, 0);
    }
  }

  @media (max-width: 480px) {
    width: 8px;
    height: 8px;
  }
`;

const StatusText = styled.span`
  font-size: 14px;
  color: #ffffff;
  font-weight: 500;

  @media (max-width: 900px) {
    font-size: 12px;
  }

  @media (max-width: 480px) {
    font-size: 11px;
  }
`;

const FloatingElement1 = styled(motion.div)`
  position: absolute;
  top: 20%;
  right: -20px;
  width: 50px;
  height: 50px;
  background: rgba(102, 126, 234, 0.1);
  border: 1px solid rgba(102, 126, 234, 0.2);
  border-radius: 12px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  backdrop-filter: blur(10px);
  animation: float 6s ease-in-out infinite;
  z-index: 2;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(10deg);
    }
  }

  @media (max-width: 900px) {
    width: 40px;
    height: 40px;
    right: -10px;
  }

  @media (max-width: 480px) {
    width: 30px;
    height: 30px;
    right: -5px;
  }
`;

const FloatingElement2 = styled(motion.div)`
  position: absolute;
  bottom: 20%;
  left: -20px;
  width: 40px;
  height: 40px;
  background: rgba(118, 75, 162, 0.1);
  border: 1px solid rgba(118, 75, 162, 0.2);
  border-radius: 10px;
  display: flex;
  align-items: center;
  justify-content: center;
  color: #764ba2;
  backdrop-filter: blur(10px);
  animation: float 8s ease-in-out infinite reverse;
  z-index: 2;

  @keyframes float {
    0%,
    100% {
      transform: translateY(0) rotate(0deg);
    }
    50% {
      transform: translateY(-20px) rotate(-10deg);
    }
  }

  @media (max-width: 900px) {
    width: 35px;
    height: 35px;
    left: -10px;
  }

  @media (max-width: 480px) {
    width: 25px;
    height: 25px;
    left: -5px;
  }
`;

const ScrollIndicator = styled.div`
  position: absolute;
  bottom: 40px;
  left: 50%;
  transform: translateX(-50%);
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 8px;
  z-index: 2;

  @media (max-width: 768px) {
    display: none;
  }
`;

const ScrollText = styled.span`
  font-size: 12px;
  color: #999;
  text-transform: uppercase;
  letter-spacing: 2px;
`;

const ScrollLine = styled.div`
  width: 2px;
  height: 60px;
  background: linear-gradient(
    to bottom,
    rgba(102, 126, 234, 0.3) 0%,
    transparent 100%
  );
  position: relative;
  overflow: hidden;

  &::after {
    content: "";
    position: absolute;
    top: -100%;
    left: 0;
    width: 100%;
    height: 100%;
    background: linear-gradient(
      to bottom,
      transparent 0%,
      #667eea 50%,
      transparent 100%
    );
    animation: scrollLine 2s ease-in-out infinite;
  }

  @keyframes scrollLine {
    0% {
      top: -100%;
    }
    100% {
      top: 100%;
    }
  }
`;
