import React from "react";
import styled from "styled-components";
import { motion } from "framer-motion";
import {
  MapPin,
  Calendar,
  Briefcase,
  Heart,
  Code2,
  Sparkles,
  Target,
  Coffee,
  Award,
  Zap,
  Globe,
  Users,
} from "lucide-react";
import { Fade, Zoom, Slide, Bounce, Flip, Rotate } from "react-awesome-reveal";

const AboutCard = () => {
  const infoItems = [
    {
      icon: MapPin,
      title: "Location",
      value: "Lagos, Nigeria",
      gradient: "linear-gradient(135deg, #667eea 0%, #764ba2 100%)",
    },
    {
      icon: Briefcase,
      title: "Status",
      value: "Open to Work",
      gradient: "linear-gradient(135deg, #f093fb 0%, #f5576c 100%)",
    },
    {
      icon: Heart,
      title: "Passion",
      value: "Building UIs",
      gradient: "linear-gradient(135deg, #43e97b 0%, #38f9d7 100%)",
    },
    {
      icon: Code2,
      title: "Specialty",
      value: "React & TypeScript",
      gradient: "linear-gradient(135deg, #ff9966 0%, #ff5e62 100%)",
    },
  ];

  const stats = [
    { icon: Award, label: "Projects", value: "5+" },
    { icon: Users, label: "Happy Clients", value: "5+" },
    { icon: Coffee, label: "Coffee", value: "500+" },
    { icon: Zap, label: "Commits", value: "500+" },
  ];

  return (
    <Wrapper>
      {/* Background decorative elements */}
      <BackgroundOrbs>
        <Orb1 />
        <Orb2 />
        <Orb3 />
      </BackgroundOrbs>

      <Container>
        <Fade direction="up" duration={600} triggerOnce>
          <Header>
            <Badge>
              <Sparkles size={16} />
              <span>About Me</span>
            </Badge>
            <Title>Get to know me</Title>
          </Header>
        </Fade>

        <ContentGrid>
          <LeftColumn>
            <Fade direction="up" delay={100} duration={600} triggerOnce>
              <Description>
                I'm a frontend developer specializing in building scalable web
                applications using React, JavaScript, and TypeScript. I work
                extensively with modern state management tools like Redux
                Toolkit and RTK Query, and I use styled-components and Tailwind
                CSS to craft clean, responsive interfaces.
              </Description>
            </Fade>

            <Fade direction="up" delay={200} duration={600} triggerOnce>
              <PassionText>
                <QuoteIcon>"</QuoteIcon>
                I'm passionate about writing maintainable, efficient code and
                creating seamless user experiences that are both performant and
                impactful. My focus is on building structured, scalable systems
                that solve real-world problems.
                <QuoteIcon end>"</QuoteIcon>
              </PassionText>
            </Fade>

            {/* Stats Grid */}
            <StatsGrid>
              {stats.map((stat, index) => (
                <Zoom
                  key={stat.label}
                  delay={300 + index * 100}
                  duration={500}
                  triggerOnce
                >
                  <StatCard>
                    <StatIcon>
                      <stat.icon size={20} />
                    </StatIcon>
                    <StatContent>
                      <StatValue>{stat.value}</StatValue>
                      <StatLabel>{stat.label}</StatLabel>
                    </StatContent>
                  </StatCard>
                </Zoom>
              ))}
            </StatsGrid>
          </LeftColumn>

          <RightColumn>
            <InfoGrid>
              {infoItems.map((item, index) => (
                <Fade
                  key={item.title}
                  direction="up"
                  delay={index * 150 + 200}
                  duration={600}
                  triggerOnce
                >
                  <InfoCard
                    whileHover={{
                      y: -8,
                      transition: { type: "spring", stiffness: 300 },
                    }}
                  >
                    <CardGlow gradient={item.gradient} />

                    <CardContent>
                      <Bounce delay={index * 200} duration={500} triggerOnce>
                        <IconWrapper gradient={item.gradient}>
                          <item.icon size={24} />
                        </IconWrapper>
                      </Bounce>

                      <Flip
                        delay={index * 200 + 200}
                        duration={500}
                        triggerOnce
                      >
                        <InfoTitle>{item.title}</InfoTitle>
                      </Flip>

                      <Slide
                        direction="up"
                        delay={index * 200 + 300}
                        duration={400}
                        triggerOnce
                      >
                        <InfoValue>{item.value}</InfoValue>
                      </Slide>

                      {/* Decorative corner accent */}
                      <CornerAccent />
                    </CardContent>
                  </InfoCard>
                </Fade>
              ))}
            </InfoGrid>

            {/* Availability Badge */}
            <Fade delay={800} duration={600} triggerOnce>
              <AvailabilityBadge>
                <StatusDot />
                <AvailabilityText>
                  Available for freelance work
                </AvailabilityText>
                <Sparkles size={14} />
              </AvailabilityBadge>
            </Fade>
          </RightColumn>
        </ContentGrid>
      </Container>
    </Wrapper>
  );
};

export default AboutCard;

// Styled Components with enhanced design

const Wrapper = styled.div`
  position: relative;
  padding: 60px 0;
  overflow: hidden;

  @media (max-width: 768px) {
    padding: 40px 0;
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
  top: -10%;
  right: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(102, 126, 234, 0.05) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(60px);
`;

const Orb2 = styled.div`
  position: absolute;
  bottom: -10%;
  left: -5%;
  width: 400px;
  height: 400px;
  background: radial-gradient(
    circle,
    rgba(118, 75, 162, 0.05) 0%,
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
    rgba(67, 233, 123, 0.03) 0%,
    transparent 70%
  );
  border-radius: 50%;
  filter: blur(50px);
`;

const Container = styled.div`
  max-width: 1280px;
  margin: 0 auto;
  padding: 0 40px;
  position: relative;
  z-index: 2;

  @media (max-width: 1024px) {
    padding: 0 32px;
  }

  @media (max-width: 768px) {
    padding: 0 24px;
  }

  @media (max-width: 480px) {
    padding: 0 16px;
  }
`;

const Header = styled.div`
  text-align: center;
  margin-bottom: 48px;

  @media (max-width: 768px) {
    margin-bottom: 36px;
  }
`;

const Badge = styled.div`
  display: inline-flex;
  align-items: center;
  gap: 8px;
  background: rgba(102, 126, 234, 0.08);
  border: 1px solid rgba(102, 126, 234, 0.15);
  border-radius: 30px;
  padding: 8px 20px;
  margin-bottom: 16px;
  color: #88aaff;
  font-size: 13px;
  font-weight: 500;

  @media (max-width: 768px) {
    padding: 6px 16px;
    font-size: 12px;
  }
`;

const Title = styled.h2`
  font-size: 36px;
  font-weight: 700;
  background: linear-gradient(135deg, #ffffff 0%, #e0e0ff 100%);
  -webkit-background-clip: text;
  -webkit-text-fill-color: transparent;
  background-clip: text;
  margin: 0;
  letter-spacing: -0.5px;

  @media (max-width: 768px) {
    font-size: 28px;
  }

  @media (max-width: 480px) {
    font-size: 24px;
  }
`;

const ContentGrid = styled.div`
  display: grid;
  grid-template-columns: 1fr 1.2fr;
  gap: 48px;
  align-items: start;

  @media (max-width: 900px) {
    grid-template-columns: 1fr;
    gap: 40px;
  }
`;

const LeftColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const Description = styled.p`
  font-size: 17px;
  color: #999;
  line-height: 1.8;
  margin: 0;

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const PassionText = styled.div`
  font-size: 18px;
  color: #ddd;
  line-height: 1.8;
  font-style: italic;
  padding: 28px;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.05) 0%,
    rgba(118, 75, 162, 0.05) 100%
  );
  border-radius: 24px;
  border: 1px solid rgba(102, 126, 234, 0.1);
  position: relative;

  @media (max-width: 768px) {
    font-size: 16px;
    padding: 20px;
  }
`;

const QuoteIcon = styled.span`
  font-size: 48px;
  color: rgba(102, 126, 234, 0.2);
  font-family: serif;
  line-height: 1;
  position: ${(props) => (props.end ? "relative" : "absolute")};
  top: ${(props) => (props.end ? "auto" : "10px")};
  left: ${(props) => (props.end ? "auto" : "10px")};
  display: ${(props) => (props.end ? "inline-block" : "block")};
  margin-left: ${(props) => (props.end ? "5px" : "0")};
  transform: ${(props) => (props.end ? "rotate(180deg)" : "none")};
  vertical-align: middle;
`;

const StatsGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 16px;
  margin-top: 16px;

  @media (max-width: 480px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StatCard = styled(motion.div)`
  background: linear-gradient(135deg, #1a1a24 0%, #12121a 100%);
  border: 1px solid rgba(102, 126, 234, 0.1);
  border-radius: 20px;
  padding: 20px;
  display: flex;
  align-items: center;
  gap: 16px;
  transition: all 0.3s ease;

  &:hover {
    border-color: rgba(102, 126, 234, 0.3);
    transform: translateY(-2px);
    box-shadow: 0 12px 30px rgba(102, 126, 234, 0.15);
  }

  @media (max-width: 768px) {
    padding: 16px;
  }
`;

const StatIcon = styled.div`
  width: 48px;
  height: 48px;
  border-radius: 14px;
  background: rgba(102, 126, 234, 0.1);
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  transition: all 0.3s ease;

  ${StatCard}:hover & {
    background: rgba(102, 126, 234, 0.15);
    transform: scale(1.05);
  }
`;

const StatContent = styled.div`
  display: flex;
  flex-direction: column;
`;

const StatValue = styled.span`
  font-size: 24px;
  font-weight: 700;
  color: #ffffff;
  line-height: 1.2;

  @media (max-width: 768px) {
    font-size: 20px;
  }
`;

const StatLabel = styled.span`
  font-size: 13px;
  color: #888;
  font-weight: 500;
`;

const RightColumn = styled.div`
  display: flex;
  flex-direction: column;
  gap: 32px;
`;

const InfoGrid = styled.div`
  display: grid;
  grid-template-columns: repeat(2, 1fr);
  gap: 24px;

  @media (max-width: 900px) {
    gap: 20px;
  }

  @media (max-width: 480px) {
    gap: 16px;
  }
`;

const InfoCard = styled(motion.div)`
  position: relative;
  border-radius: 24px;
  overflow: hidden;
  background: linear-gradient(135deg, #1a1a24 0%, #12121a 100%);
  border: 1px solid rgba(255, 255, 255, 0.06);
  transition: all 0.4s cubic-bezier(0.23, 1, 0.32, 1);

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
    transition: left 0.8s ease;
    z-index: 1;
  }

  &:hover {
    border-color: rgba(102, 126, 234, 0.25);
    box-shadow: 0 20px 40px rgba(102, 126, 234, 0.2);

    &::before {
      left: 100%;
    }
  }
`;

const CardGlow = styled.div`
  position: absolute;
  inset: 0;
  background: ${(props) =>
    props.gradient || "linear-gradient(135deg, #667eea 0%, #764ba2 100%)"};
  opacity: 0.05;
  transition: opacity 0.3s ease;

  ${InfoCard}:hover & {
    opacity: 0.1;
  }
`;

const CardContent = styled.div`
  position: relative;
  padding: 32px 24px;
  text-align: center;
  z-index: 2;

  @media (max-width: 768px) {
    padding: 24px 20px;
  }
`;

const IconWrapper = styled.div`
  width: 70px;
  height: 70px;
  border-radius: 20px;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.15) 0%,
    rgba(102, 126, 234, 0.05) 100%
  );
  display: flex;
  align-items: center;
  justify-content: center;
  color: #667eea;
  margin: 0 auto 20px;
  transition: all 0.4s ease;
  border: 1px solid rgba(102, 126, 234, 0.2);

  ${InfoCard}:hover & {
    transform: scale(1.1) rotate(5deg);
    background: linear-gradient(
      135deg,
      rgba(102, 126, 234, 0.2) 0%,
      rgba(102, 126, 234, 0.1) 100%
    );
    border-color: rgba(102, 126, 234, 0.3);
  }

  @media (max-width: 768px) {
    width: 60px;
    height: 60px;
    margin-bottom: 16px;
  }
`;

const InfoTitle = styled.h4`
  font-size: 16px;
  font-weight: 600;
  color: #ffffff;
  margin-bottom: 8px;
  transition: color 0.3s ease;

  ${InfoCard}:hover & {
    background: linear-gradient(135deg, #667eea 0%, #764ba2 100%);
    -webkit-background-clip: text;
    -webkit-text-fill-color: transparent;
    background-clip: text;
  }

  @media (max-width: 768px) {
    font-size: 15px;
  }
`;

const InfoValue = styled.p`
  font-size: 15px;
  color: #999;
  transition: color 0.3s ease;
  font-weight: 400;

  ${InfoCard}:hover & {
    color: #bbb;
  }

  @media (max-width: 768px) {
    font-size: 14px;
  }
`;

const CornerAccent = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  width: 40px;
  height: 40px;
  background: linear-gradient(
    135deg,
    rgba(102, 126, 234, 0.1) 0%,
    transparent 100%
  );
  border-bottom-left-radius: 40px;
  pointer-events: none;
`;

const AvailabilityBadge = styled(motion.div)`
  display: inline-flex;
  align-items: center;
  gap: 12px;
  background: linear-gradient(135deg, #1a1a24 0%, #12121a 100%);
  border: 1px solid rgba(34, 197, 94, 0.2);
  padding: 16px 24px;
  border-radius: 50px;
  margin-top: 16px;
  backdrop-filter: blur(10px);
  box-shadow: 0 10px 30px rgba(0, 0, 0, 0.2);

  @media (max-width: 900px) {
    width: fit-content;
    margin-left: auto;
    margin-right: auto;
  }

  @media (max-width: 480px) {
    padding: 12px 20px;
    gap: 8px;
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
`;

const AvailabilityText = styled.span`
  font-size: 15px;
  color: #22c55e;
  font-weight: 500;

  @media (max-width: 480px) {
    font-size: 13px;
  }
`;
